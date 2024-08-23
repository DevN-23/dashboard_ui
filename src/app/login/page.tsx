'use client'

import InputField from '@/components/InputField'
import { ERROR_MESSAGES } from '@/lib/constants'
import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { z } from 'zod'

const schema = z.object({
  email: z.string().email({ message: ERROR_MESSAGES.EMAIL_REQUIRED }),
  password: z.string().min(8, { message: ERROR_MESSAGES.PASSWORD_REQUIRED }),
})

type Inputs = z.infer<typeof schema>

const LoginPage = () => {
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ resolver: zodResolver(schema) })

  const login = handleSubmit(async (data) => {
    console.log('-data', data)
    try {
      const res = await axios.post('/api/users/login', data)
      console.log(res)
      toast.success('Login Success!')
      router.push('/admin')
    } catch (error: any) {
      toast.error(error.message)
    }
  })

  return (
    <div className="bg-[#f7f8fa] w-screen h-screen flex items-center justify-center">
      <form
        onSubmit={login}
        className="bg-white w-[380px] max-w-[90%] mx-auto p-4 rounded-md flex flex-col gap-4"
      >
        <h1 className="text-xl font-semibold text-center">SignIn</h1>
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
        <button className="bg-blue-400 text-white p-2 rounded-md">Login</button>
        <span className="text-center text-gray-500 text-sm">
          New User?{' '}
          <Link
            href="/signup"
            className="text-blue-500"
          >
            Create an account
          </Link>
        </span>
      </form>
    </div>
  )
}

export default LoginPage
