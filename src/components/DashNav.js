import { Link, useLocation } from "react-router-dom"
import Logo from "../assets/svg/SoftDropLogo.svg"
import {BsFillGridFill} from 'react-icons/bs'

export default function DashNav(){
    const location = useLocation()
    const navIconSize = 25

    return(
        <div className="absolute p-4 hidden md:block md:w-[20%] bg-white h-[100vh]">
            <div className="flex justify-center">
                <img src={Logo} alt="softdrop logo" />
            </div>
            <div className="py-12">
                <NavLink active={location.pathname === "/admin/dashboard"}>
                    <BsFillGridFill size={navIconSize} />
                    <Link to={"/admin/dashboard"} className="px-2">
                        Dashboard
                    </Link>
                </NavLink>
                <NavLink>
                    
                </NavLink>
                
            </div>
        </div>
    )
}

function NavLink({children, active}){
    return(
        <div className={`flex p-2 ${active ? 'text-black bg-[#F6F6F6]' : 'text-[#AFAFAF]'}   font-bold items-center`}>
            {children}
        </div>
    )
}