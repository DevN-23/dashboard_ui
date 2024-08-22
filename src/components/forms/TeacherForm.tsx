'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import InputField from '../InputField'
import Image from 'next/image'
import { ERROR_MESSAGES, GENDERS } from '@/lib/constants'

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
  bloodType: z.string().min(1, { message: ERROR_MESSAGES.BLOOD_TYPE_REQUIRED }),
  birthday: z.string().min(1, { message: ERROR_MESSAGES.BIRTHDAY_REQUIRED }),
  sex: z.enum(GENDERS, { message: ERROR_MESSAGES.GENDER_REQUIRED }),
  img: z.instanceof(File, { message: ERROR_MESSAGES.IMG_REQUIRED }),
})

type Inputs = z.infer<typeof schema>

const TeacherForm = ({
  type,
  data,
}: {
  type: 'create' | 'update'
  data?: any
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ resolver: zodResolver(schema) })

  const submitForm = handleSubmit((data) => {
    console.log(data)
  })

  return (
    <form
      className="flex flex-col gap-8"
      onSubmit={submitForm}
    >
      <h1 className="text-xl font-semibold">Create a new teacher</h1>
      <span className="text-xs text-gray-400 font-medium">
        Authentication Information
      </span>
      <div className="flex justify-between flex-wrap gap-4">
        <InputField
          label="Username"
          name="username"
          defaultValue={data?.username}
          register={register}
          error={errors?.username}
        />
        <InputField
          label="Email"
          name="email"
          defaultValue={data?.email}
          register={register}
          error={errors?.email}
        />
        <InputField
          label="Password"
          name="password"
          defaultValue={data?.password}
          register={register}
          type="password"
          error={errors?.password}
        />
      </div>
      <span className="text-xs text-gray-400 font-medium">
        Personal Information
      </span>
      <div className="flex justify-between flex-wrap gap-4">
        <InputField
          label="First Name"
          name="firstName"
          defaultValue={data?.firstName}
          register={register}
          error={errors?.firstName}
        />
        <InputField
          label="Last Name"
          name="lastName"
          defaultValue={data?.lastName}
          register={register}
          error={errors?.lastName}
        />
        <InputField
          label="Phone"
          name="phone"
          defaultValue={data?.phone}
          register={register}
          error={errors?.phone}
        />
        <InputField
          label="Address"
          name="address"
          defaultValue={data?.address}
          register={register}
          error={errors?.address}
        />
        <InputField
          label="Blood Type"
          name="bloodType"
          defaultValue={data?.bloodType}
          register={register}
          error={errors?.bloodType}
        />
        <InputField
          label="Birthday"
          name="birthday"
          defaultValue={data?.birthday}
          register={register}
          error={errors?.birthday}
          type="date"
        />
        <div className="flex flex-col gap-2 w-full md:w-1/4">
          <label
            htmlFor="Sex"
            className="text-xs text-gray-500"
          >
            Sex
          </label>
          <select
            {...register('sex')}
            defaultValue={data?.sex}
            className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          {errors.sex?.message && (
            <p className="text-xs text-red-400">
              {errors.sex?.message.toString()}
            </p>
          )}
        </div>
        {/* IMAGE UPLOAD */}
        <div className="flex flex-col gap-2 w-full md:w-1/4 justify-center">
          <label
            htmlFor="img"
            className="text-xs text-gray-500 flex items-center gap-2 cursor-pointer"
          >
            <Image
              src="/upload.png"
              alt=""
              width={28}
              height={28}
            />
            <span>Upload a photo</span>
          </label>
          <input
            id="img"
            type="file"
            {...register('img')}
            className="hidden"
          />
          {errors.img?.message && (
            <p className="text-xs text-red-400">
              {errors.img?.message.toString()}
            </p>
          )}
        </div>
      </div>
      <button className="bg-blue-400 text-white p-2 rounded-md">
        {type === 'create' ? 'Create' : 'Update'}
      </button>
    </form>
  )
}

export default TeacherForm
