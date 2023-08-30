import { Link } from "react-router-dom";
import DashHeader from "../components/DashHeader";

export default function Dashboard(){
    return(
        <div>
            <DashHeader title={'Dashboard'} />
            <div>This is the dashboard</div>
            <Link to={"/admin/senders"}>go to senders</Link>
        </div>
    )
}