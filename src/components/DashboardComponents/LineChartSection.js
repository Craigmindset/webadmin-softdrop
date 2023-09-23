import React from 'react'
import { Line, LineChart, Tooltip, XAxis, YAxis, CartesianGrid } from 'recharts'
import MenuSelect from '../MenuSelect'

export default function LineChartSection() {
    const data = [
        {
          "name": "14:10",
          "travellers": 40,
          "senders": 24,
        },
        {
          "name": "14:20",
          "travellers": 30,
          "senders": 13,
        },
        {
          "name": "14:30",
          "travellers": 20,
          "senders": 98,
        },
        {
          "name": "14:40",
          "travellers": 27,
          "senders": 39,
        },
        {
          "name": "14:50",
          "travellers":18,
          "senders": 48,
        },
        {
          "name": "15:00",
          "travellers": 23,
          "senders": 38,
        },
        {
          "name": "15:10",
          "travellers": 34,
          "senders": 43,
        }
      ]
    return (
        <section className=" bg-white py-8 px-5 rounded-md my-8">
            <div className='flex justify-between items-center mb-5 px-8'>
                <h1 className='text-[18px]'>New users</h1>
                <div className='flex gap-10 items-center'>
                    <div className='flex gap-4'>
                        <div>
                            <div className="flex items-center gap-3">
                                <div className="h-[14px] w-[14px] bg-[#22BC92] rounded-md"></div>
                                <h1>Travellers</h1>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center gap-3">
                                <div className="h-[14px] w-[14px] bg-[#FFC043] rounded-md"></div>
                                <h1>Senders</h1>
                            </div>
                        </div>
                    </div>
                    <MenuSelect optionArray={["Today", "Last 7 Days", "Last Week"]}/>
                </div>
            </div>
            <LineChart width={1100} height={350} data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                     <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" strokeWidth={4} dataKey="senders" stroke="#FFC043" />
                <Line type="monotone" strokeWidth={4} dataKey="travellers" stroke="#22BC92" />
            </LineChart>
        </section>
    )
}
