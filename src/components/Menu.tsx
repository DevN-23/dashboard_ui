'use client'

import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'
import * as CONSTANTS from '@/lib/constants'
import { role } from '@/lib/data'

const Menu = () => {
  const router = useRouter()

  const logout = async () => {
    try {
      await axios.get(CONSTANTS.API_ROUTES.LOGOUT)
      toast.success(CONSTANTS.RESPONSE_MESSAGES.LOGOUT_SUCCESS)
      router.push(CONSTANTS.WEB_ROUTES.LOGIN)
    } catch (error) {
      toast.error(CONSTANTS.RESPONSE_MESSAGES.LOGOUT_FAILED)
    }
  }

  const logoutBtn = (item: any) => (
    <span
      key={item.label}
      className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2 md:px-2 rounded-md hover:bg-devSkyLight cursor-pointer"
      onClick={logout}
    >
      <Image
        src={item.icon}
        alt={item.label}
        width={20}
        height={20}
      />
      <span className="hidden lg:block">{item.label}</span>
    </span>
  )
  return (
    <div className="mt-4 text-sm">
      {CONSTANTS.menuItems.map((i) => (
        <div
          className="flex flex-col gap-2"
          key={i.title}
        >
          <span className="hidden lg:block text-gray-400 font-light my-4">
            {i.title}
          </span>
          {i.items.map((item) => {
            if (item.visible.includes(role)) {
              return item.label !== 'Logout' ? (
                <Link
                  href={item.href}
                  key={item.label}
                  className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2 md:px-2 rounded-md hover:bg-devSkyLight cursor-pointer"
                >
                  <Image
                    src={item.icon}
                    alt={item.label}
                    width={20}
                    height={20}
                  />
                  <span className="hidden lg:block">{item.label}</span>
                </Link>
              ) : (
                logoutBtn(item)
              )
            }
          })}
        </div>
      ))}
    </div>
  )
}

export default Menu
