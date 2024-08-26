import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="h-screen flex">
      {/* LEFT */}
      {/* <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-4">
        <Link
          href="/"
          className="flex items-center justify-center lg:justify-start gap-2"
        >
          <Image
            src="/logo.png"
            alt="logo"
            width={32}
            height={32}
          />
          <span className="hidden lg:block font-bold">SchoolDevN</span>
        </Link>
        <Menu />
      </div> */}

      <Sidebar />
      {/* RIGHT */}
      {/* <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-4"> */}
      <div className="bg-[#f7f8fa] overflow-scroll flex flex-col">
        <Navbar />
        {children}
      </div>
    </div>
  )
}
