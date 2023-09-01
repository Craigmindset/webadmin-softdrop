import { BsBoxArrowUp, BsChevronDown, BsSearch } from "react-icons/bs";
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
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>User ID</th>
                                <th>Email</th>
                                <th>Phone number</th>
                                <th>Signup Date</th>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
        </div>
    )
}