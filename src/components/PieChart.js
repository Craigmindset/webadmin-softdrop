import React from 'react'
import MenuSelect from './MenuSelect'
import { VictoryPie } from 'victory'
import Line1 from "../assets/svg/line (1).svg"
import Line2 from "../assets/svg/line.svg"

export default function PieChart() {
    const sampleData = [
        { x: "Travellers", y: 30 },
        { x: "Senders", y: 70 }
    ];
  return (
    <section className=" bg-white py-8 px-12 rounded-md">
    <div className="flex items-center justify-between">
      <h1>Packages</h1>
      <MenuSelect optionArray={["Today", "Last 7 Days", "Last Week"]}/>
    </div>
    <div className='relative flex justify-center'>
        <div className="absolute top-20 left-20">
            <p className="-ml-4">+2.5%</p>
            <img src={Line2} alt="Line"/>
        </div>
        <div className="absolute top-24 right-36">
            <p className="pl-6">-0.5%</p>
            <img src={Line1} alt="Line"/>
        </div>
        <svg  width={350} height={350}>
            <VictoryPie
                standalone={false}
                width={300} height={300}
                innerRadius={65}
                data={sampleData}
            />
        </svg>
    </div>
    <div className="flex justify-center gap-5 text-center">
        <div>
            <div className="flex items-center gap-3">
                <div className="h-[14px] w-[14px] bg-black rounded-md"></div>
                 <h1>International Deliveries</h1>
            </div>
           <p className="text-4xl font-medium">942</p>
        </div>
        <div>
            <div className="flex items-center gap-3">
                <div className="h-[14px] w-[14px] bg-gray-300 rounded-md"></div>
                 <h1>Local Deliveries</h1>
            </div>
           <p className="text-4xl font-medium">25</p>
        </div>
    </div>
</section>
  )
}
