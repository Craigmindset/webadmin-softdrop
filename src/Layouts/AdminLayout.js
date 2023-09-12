import { Outlet } from "react-router-dom";
import DashNav from "../components/DashNav";

export default function AdminLayout(){
    return(
        <div className="w-full justify-between">
            <DashNav />
            <div className="md:w-[80%] md:ml-auto h-[100vh] bg-[#F6F6F6] overflow-y-scroll">
                <Outlet />
            </div>
            
        </div>
    )
}