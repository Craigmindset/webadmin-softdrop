import { Link } from "react-router-dom";

export default function Login(){
    return(
       <div>
        <div>Login page</div>
        <Link to={"/admin/dashboard"}>go to dashboard</Link>
       </div>
    )
}