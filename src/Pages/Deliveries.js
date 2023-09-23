import { Outlet } from "react-router-dom";
import DashHeader from "../components/DashHeader";
import DeliveryNav from "../components/DeliveryNav";

export default function Deliveries(){
    return(
        <div>
            <DashHeader title={'All Deliveries'} />
            <DeliveryNav/>
            <Outlet/>
        </div>
    )
}