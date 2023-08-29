import { Link } from "react-router-dom";

export default function Dashboard(){
    return(
        <div className="text-green-500">
            <div>This is the dashboard</div>
            <Link to={"/admin/senders"}>go to senders</Link>
        </div>
    )
}