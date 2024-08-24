'use client'

import Image from 'next/image'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

const data = [
  {
    name: 'Mon',
    present: 40,
    absent: 20,
  },
  {
    name: 'Tue',
    present: 60,
    absent: 42,
  },
  {
    name: 'Wed',
    present: 55,
    absent: 70,
  },
  {
    name: 'Thur',
    present: 67,
    absent: 45,
  },
  {
    name: 'Fri',
    present: 50,
    absent: 60,
  },
]

const AttendanceChart = () => {
  return (
    <div className="bg-white rounded-lg h-full p-4">
      {/* TITLE */}
      <div className="flex justify-between">
        <h1 className="text-lg font-semibold">Attendance</h1>
        <Image
          src="/moreDark.png"
          alt="More"
          width={20}
          height={20}
        />
      </div>
      {/* CHART */}
      <ResponsiveContainer
        width="100%"
        height="90%"
      >
        <BarChart
          width={500}
          height={300}
          data={data}
          barSize={20}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke="#ddd"
          />
          <XAxis
            dataKey="name"
            axisLine={false}
            tick={{ fill: '#d1d5db' }}
            tickLine={false}
          />
          <YAxis
            axisLine={false}
            tick={{ fill: '#d1d5db' }}
            tickLine={false}
          />
          <Tooltip
            contentStyle={{ borderRadius: '10px', borderColor: 'lightgray' }}
          />
          <Legend
            align="left"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: '20px', paddingBottom: '40px' }}
          />
          <Bar
            dataKey="present"
            fill="#abebc6"
            legendType="circle"
            radius={[10, 10, 0, 0]}
          />
          <Bar
            dataKey="absent"
            fill="#d2b4de"
            legendType="circle"
            radius={[10, 10, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default AttendanceChart
