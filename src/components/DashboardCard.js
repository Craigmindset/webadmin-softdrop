import React from 'react'

export default function DashboardCard({title, amount, percentage, naira}) {
  return (
    <div className='bg-white rounded-lg p-6'>
      <h2>{title}</h2>
      <p className='font-semibold text-xl lg:text-3xl my-4'>{naira}{amount}</p>
      <p className={percentage > 0 ? "text-[#22BC92] font-bold" : "text-[#FF5B5B] font-bold"}>{percentage}%</p>
    </div>
  )
}
