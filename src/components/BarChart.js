import { Bar, BarChart, XAxis, Tooltip } from "recharts"
import Naira from "../assets/Naira";


export default function BarChartSection() {
  const data = [
    {name: 'Mon', amount: 400},
    {name: 'Tues', amount: 300},
    {name: 'Wed', amount: 200},
    {name: 'Thurs', amount: 550},
    {name: 'Fri', amount: 300},
    {name: 'Sat', amount: 400},
    {name: 'Sun', amount: 600}
  ];
  return (
    <section className="bg-white py-8 px-12 rounded-md">
      <h1 className="text-2xl font-medium">Revenue</h1>
      <p className="font-medium text-5xl my-4">
        <Naira/>
        {
          data.reduce(function(total, currentValue) {
              return total + currentValue.amount;
            }, 0)
        }
      </p>
      <BarChart width={450} height={300} data={data}>
        <XAxis dataKey="name" stroke="#A3A3A3" />
        <Tooltip />
        <Bar dataKey="amount" barSize={40}/>
      </BarChart>
    </section>
  )
}
