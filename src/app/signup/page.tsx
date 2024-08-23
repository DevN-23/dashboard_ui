'use client'

import React from 'react'
import axios from 'axios'
import Link from 'next/link'
import toast from 'react-hot-toast'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import InputField from '@/components/InputField'
import { ERROR_MESSAGES } from '@/lib/constants'

const schema = z.object({
  username: z
    .string()
    .min(3, { message: ERROR_MESSAGES.USERNAME_MIN_LENGTH })
    .max(20, { message: ERROR_MESSAGES.USERNAME_MAX_LENGTH }),
  email: z.string().email({ message: ERROR_MESSAGES.EMAIL_REQUIRED }),
  password: z.string().min(8, { message: ERROR_MESSAGES.PASSWORD_REQUIRED }),
  firstName: z.string().min(1, { message: ERROR_MESSAGES.FIRST_NAME_REQUIRED }),
  lastName: z.string().min(1, { message: ERROR_MESSAGES.LAST_NAME_REQUIRED }),
  phone: z.string().min(1, { message: ERROR_MESSAGES.PHONE_REQUIRED }),
  address: z.string().min(1, { message: ERROR_MESSAGES.ADDRESS_REQUIRED }),
})

type Inputs = z.infer<typeof schema>

const SingupPage = () => {
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ resolver: zodResolver(schema) })

  const signup = handleSubmit(async (data) => {
    console.log('-data', data)

    try {
      const response = await axios.post('/api/users/signup', data)
      console.log('response', response)
      router.push('/login')
    } catch (error: any) {
      console.log('-err', error)
      toast.error(error.message)
    }
  })

  return (
    <div className="bg-[#f7f8fa] w-screen h-screen flex items-center justify-center">
      <form
        onSubmit={signup}
        className="bg-white max-w-[380px] w-[90%] mx-auto p-8 rounded-md flex flex-col gap-4"
      >
        <h1 className="text-xl font-semibold text-center">SignUp</h1>
        <InputField
          label="First Name"
          name="firstName"
          register={register}
          error={errors?.firstName}
          className="md:w-full"
        />
        <InputField
          label="Last Name"
          name="lastName"
          register={register}
          error={errors?.lastName}
          className="md:w-full"
        />
        <InputField
          label="Username"
          name="username"
          register={register}
          error={errors?.username}
          className="md:w-full"
        />
        <InputField
          label="Email"
          name="email"
          register={register}
          error={errors?.email}
          className="md:w-full"
        />
        <InputField
          label="Password"
          name="password"
          register={register}
          type="password"
          error={errors?.password}
          className="md:w-full"
        />
        <InputField
          label="Phone"
          name="phone"
          register={register}
          error={errors?.phone}
          className="md:w-full"
        />
        <InputField
          label="Address"
          name="address"
          register={register}
          error={errors?.address}
          className="md:w-full"
        />
        <button className="bg-blue-400 text-white p-2 rounded-md">
          Register
        </button>
        <span className="text-center text-gray-500 text-sm">
          Already have an account?{' '}
          <Link
            href="/login"
            className="text-blue-500"
          >
            Login
          </Link>
        </span>
      </form>
    </div>
  )
}

export default SingupPage
