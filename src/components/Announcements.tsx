const Announcements = () => {
  return (
    <div className="bg-white p-4 rounded-md">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Announcements</h1>
        <span className="text-xs text-gray-400">View All</span>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <div className="bg-devSkyLight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold text-gray-600">Lorem ipsum</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              2024-09-10
            </span>
          </div>
          <p className="mt-2 text-gray-400 text-sm">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit!
          </p>
        </div>
        <div className="bg-devPurpleLight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold text-gray-600">Lorem ipsum</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              2024-09-10
            </span>
          </div>
          <p className="mt-2 text-gray-400 text-sm">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit!
          </p>
        </div>
        <div className="bg-devYellowLight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold text-gray-600">Lorem ipsum</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              2024-09-10
            </span>
          </div>
          <p className="mt-2 text-gray-400 text-sm">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit!
          </p>
        </div>
      </div>
    </div>
  )
}

export default Announcements
