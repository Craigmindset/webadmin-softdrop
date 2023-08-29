import { Link } from "react-router-dom";

export default function Dashboard(){
    return(
        <div>
            this is the dashboard
            <Link to={"/admin/senders"}>go to senders</Link>
        </div>
    )
}