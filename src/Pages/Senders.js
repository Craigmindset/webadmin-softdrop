import { BsBoxArrowUp, BsChevronDown, BsChevronLeft, BsChevronRight, BsSearch } from "react-icons/bs";
import Naira from "../assets/Naira";
import DashHeader from "../components/DashHeader";
import OverviewCard from "../components/OverviewCard";

export default function Senders(){
   // Dummy data for table
   const columns = [
    {headerName: ''},
    {headerName: 'Name'},
    {headerName: 'User ID'},
    {headerName: 'Email'},
    {headerName: 'Phone Number'},
    {headerName: 'Sign Up Date'},
    {headerName: 'Order Completed'},
    {headerName: 'Status'}
  ];
  const rows = [
    { name: "Joy Hector", id: "2748173", email: 'joy@anymail.com',  phoneNumber : "+243908754232", signUpDate : "Nov 11, 2022", orderCompleted : 7, status : "Active"},
    { name: "Enyonam Ade", id: "1037629", email: 'ade@anymail.com',  phoneNumber : "+243908754232", signUpDate : "Feb 15, 2022", orderCompleted : 20, status : "Suspended"},
    { name: "Etim Okon", id: "7352092", email: 'etim@anymail.com',  phoneNumber : "+243908754232", signUpDate : "Jun 23, 2022", orderCompleted : 24, status : "Blocked"},
    { name: "Bola Ahmed", id: "0946248", email: 'ahmed@anymail.com',  phoneNumber : "+243908754232", signUpDate : "Sept 19, 2022", orderCompleted : 30, status : "Active"},
    { name: "Franka Igurma", id: "8973623", email: 'igurma@anymail.com',  phoneNumber : "+243908754232", signUpDate : "Jan 30, 2022", orderCompleted : 15, status : "Suspended"}
  ];

    return(
        <main className="p-6">
            <DashHeader title={"Senders"} />
            <section className="grid grid-cols-3 gap-6 mb-10">
                <OverviewCard title="Created orders" amount="8,918"/>
                <OverviewCard title="Orders canceled" amount="32"/>
                <OverviewCard title="Total spent" naira={<Naira/>} amount="321,499"/>
            </section>
            <section>
                <div className="flex items-center justify-between">
                    <div className="flex items-center ">
                        <p className="font-semibold">Sort by</p>
                        <div className="flex w-32 justify-between items-center border-2 m-2 p-2 ">
                            <input placeholder="Region" className="bg-inherit w-[80%]" />
                            <BsChevronDown />
                        </div>
                        <div className="flex w-32 justify-between items-center border-2 m-2 p-2 ">
                            <input placeholder="User state" className="bg-inherit w-[80%]" />
                            <BsChevronDown />
                        </div>
                        <div className="flex w-32 justify-between items-center border-2 m-2 p-2 ">
                            <input placeholder="Last 7 days" className="bg-inherit w-[80%]" />
                            <BsChevronDown />
                        </div>
                        <div className="flex w-32 justify-between items-center border-2 m-2 p-2 ">
                            <input placeholder="Search" className="bg-inherit w-[80%]" />
                            <BsSearch />
                        </div>
                    </div>

                    <div className="flex items-center bg-black text-white p-2">
                        <BsBoxArrowUp />
                        <p className="ml-2">Export</p>
                    </div>
                </div>
                <div className="rounded-md">
                    <table className="bg-white rounded-md md:w-full table-auto border-collapse border border-slate-400">
                        <thead>
                            <tr>
                                {
                                    columns.map((item) => (
                                        <th key={item.headerName} className=" border-slate-300 border-collapse p-3">{item.headerName}</th>
                                    ))
                                }  
                            </tr>
                        </thead>
                        <tbody>
                            {
                                rows.map((item) => (
                                    <tr key={item.id} className="relative border border-slate-300 border-collapse p-3 text-center">
                                        <input className="absolute top-5 left-6" type="checkbox" name="" id="" />
                                        <td key={item.name} className="border-slate-300 border-collapse p-3">{item.name}</td>
                                        <td key={item.id} className="border-slate-300 border-collapse p-3">{item.id}</td>
                                        <td key={item.email} className="border-slate-300 border-collapse p-3">{item.email}</td>
                                        <td key={item.phoneNumber} className="border-slate-300 border-collapse p-3">{item.phoneNumber}</td>
                                        <td key={item.signUpDate} className="border-slate-300 border-collapse p-3">{item.signUpDate}</td>
                                        <td key={item.orderCompleted} className="border-slate-300 border-collapse p-3">{item.orderCompleted}</td>
                                        <td key={item.status} className="border-slate-300 border-collapse p-3"> 
                                            <p className={`${item.status === "Active" ? "bg-[#22BC92]" : item.status === "Blocked" ? "bg-red-400" : item.status === "Suspended" ? "bg-yellow-400" : ""} text-white text-center p-1`}>{item.status}</p> 
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>

                <div className="flex md:w-[35%] mx-auto my-4 justify-evenly items-center">
                    <button className="flex items-center">
                        <BsChevronLeft />
                        Prev
                    </button>
                    <div className="flex">
                        <select className="mx-2">
                            <option>1</option>
                        </select>
                        <div>
                            of 99
                        </div>
                    </div>
                    
                    <button className="flex items-center">
                        Next
                        <BsChevronRight />
                    </button>
                </div>
            </section>
        </main>
    )
}