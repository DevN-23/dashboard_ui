'use client'

import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import toast from 'react-hot-toast'
import * as CONSTANTS from '@/lib/constants'
import { useRouter } from 'next/navigation'

const Navbar = () => {
  const router = useRouter()
  const [openAvatarDropdown, setOpenAvatarDropdown] = useState(false)

  const toggleAvatarDropdown = () => {
    setOpenAvatarDropdown(!openAvatarDropdown)
  }

  const logout = async () => {
    try {
      await axios.get(CONSTANTS.API_ROUTES.LOGOUT)
      toast.success(CONSTANTS.RESPONSE_MESSAGES.LOGOUT_SUCCESS)
      router.push(CONSTANTS.WEB_ROUTES.LOGIN)
    } catch (error) {
      toast.error(CONSTANTS.RESPONSE_MESSAGES.LOGOUT_FAILED)
    }
  }

  return (
    <div className="flex items-center justify-between p-4">
      {/* SEARCH BAR */}
      <div className="hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2">
        <Image
          src="/search.png"
          alt="Search"
          width={14}
          height={14}
        />
        <input
          type="text"
          placeholder="Search..."
          className="w-[200px] p-2 bg-transparent outline-none"
        />
      </div>
      {/* ICONS AND USER */}
      <div className="flex items-center gap-6 justify-end w-full">
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
          <Image
            src="/message.png"
            alt="Message"
            width={20}
            height={20}
          />
        </div>
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative">
          <Image
            src="/announcement.png"
            alt="Message"
            width={20}
            height={20}
          />
          <div className="absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center bg-purple-500 text-white rounded-full text-xs">
            1
          </div>
        </div>
        <div
          onClick={toggleAvatarDropdown}
          className="relative flex items-center gap-2 transition-all duration-500 cursor-pointer"
        >
          <div className="flex flex-col">
            <span className="text-xs leading-3 font-medium">John Doe</span>
            <span className="text-[10px] text-gray-500 text-right">Admin</span>
          </div>
          <span>
            <Image
              src="/avatar.png"
              alt="Profile Pic"
              width={36}
              height={36}
              className="rounded-full"
            />
          </span>
          <div
            className={`absolute ${
              openAvatarDropdown ? 'block' : 'hidden'
            } bg-white rounded-lg right-0 top-full shadow-lg mt-2 space-y-2`}
          >
            <div className="flex flex-col ">
              <Link
                href="/admin/profile"
                className="px-8 py-3 rounded-lg bg-white transition-colors duration-300 ease-in-out hover:bg-devSkyLight"
              >
                Profile
              </Link>
              <span
                className="px-8 py-3 rounded-lg bg-white transition-colors duration-300 ease-in-out hover:bg-devSkyLight"
                onClick={logout}
              >
                Logout
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
