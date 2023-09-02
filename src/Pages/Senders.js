import { BsBoxArrowUp, BsChevronDown, BsChevronLeft, BsChevronRight, BsSearch } from "react-icons/bs";
import Naira from "../assets/Naira";
import DashHeader from "../components/DashHeader";
import OverviewCard from "../components/OverviewCard";

export default function Senders(){
    return(
        <div>
            <DashHeader title={"Senders"} />
            <div className="flex justify-between p-6">
                <OverviewCard>
                    <p>Created orders</p>
                    <h2 className="text-xl font-semibold">8,918</h2>
                </OverviewCard>    
                <OverviewCard>
                    <p>Orders canceled</p>
                    <h2 className="text-xl font-semibold">32</h2>
                </OverviewCard>
                <OverviewCard>
                    <p>Total spent</p>
                    <h2 className="text-xl font-semibold"><Naira /> 321,499</h2>
                </OverviewCard>
            </div>
            <div className="p-6">
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
                <div>
                    <table className="bg-white md:w-full table-auto border-collapse border border-slate-400">
                        <thead>
                            <tr>
                                <th className=" border-slate-300 border-collapse p-3">Name</th>
                                <th className=" border-slate-300 border-collapse p-3">User ID</th>
                                <th className=" border-slate-300 border-collapse p-3">Email</th>
                                <th className=" border-slate-300 border-collapse p-3">Phone number</th>
                                <th className=" border-slate-300 border-collapse p-3">Signup Date</th>
                                <th className=" border-slate-300 border-collapse p-3">Delivery Sent</th>
                                <th className=" border-slate-300 border-collapse p-3">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border border-slate-300 border-collapse p-3">
                                <td className="border-slate-300 border-collapse p-3">Frank Richard</td>
                                <td className="border-slate-300 border-collapse p-3">7098465</td>
                                <td className="border-slate-300 border-collapse p-3">frankrich@gmail.com</td>
                                <td className="border-slate-300 border-collapse p-3">+2345877689059</td>
                                <td className="border-slate-300 border-collapse p-3">Jan 7, 2021</td>
                                <td className="border-slate-300 border-collapse p-3">7</td>
                                <td className="border-slate-300 border-collapse p-3"> <div className="bg-[#22BC92] text-white text-center">Active</div> </td>
                            </tr>
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
            </div>
        </div>
    )
}