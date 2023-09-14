import { Link, useLocation } from "react-router-dom"
import Logo from "../assets/svg/SoftDropLogo.svg"
import {BsBox, BsBriefcase, BsCreditCard, BsFillGridFill, BsGear, BsPeople, BsQuestionOctagon} from 'react-icons/bs'

export default function DashNav(){
    const location = useLocation()
    const navIconSize = 25

    return(
        <div className="absolute p-4 hidden md:block md:w-[20%] bg-white h-[100vh] overflow-y-scroll">
            <div className="flex justify-center h-[15vh]">
                <img src={Logo} alt="softdrop logo" />
            </div>
            <div className="py-12">
                <NavLink active={location.pathname === "/admin/dashboard"}>
                    <BsFillGridFill size={navIconSize} />
                    <Link to={"/admin/dashboard"} className="px-2">
                        Dashboard
                    </Link>
                </NavLink>
                <NavLink active={location.pathname === "/admin/senders"}>
                    <BsPeople size={navIconSize} />
                    <Link to={"/admin/senders"} className="px-2">
                        Senders
                    </Link>
                </NavLink>
                <NavLink active={location.pathname === "/admin/travellers"}>
                    <BsBriefcase size={navIconSize} />
                    <Link to={"/admin/travellers"} className="px-2">
                        Travellers
                    </Link>
                </NavLink>
                <NavLink active={location.pathname === "/admin/all-deliveries"}>
                    <BsBox size={navIconSize} />
                    <Link to={"/admin/all-deliveries"} className="px-2">
                        All Deliveries
                    </Link>
                </NavLink>
                <NavLink active={location.pathname === "/admin/payments"}>
                    <BsCreditCard size={navIconSize} />
                    <Link to={"/admin/payments"} className="px-2">
                        Payments
                    </Link>
                </NavLink>
                <NavLink active={location.pathname === "/admin/dispute"}>
                    <BsQuestionOctagon size={navIconSize} />
                    <Link to={"/admin/dispute"} className="px-2">
                        Dispute
                    </Link>
                </NavLink>
                <NavLink active={location.pathname === "/admin/settings"}>
                    <BsGear size={navIconSize} />
                    <Link to={"/admin/settings/profile-settings"} className="px-2">
                        Settings
                    </Link>
                </NavLink>
            </div>
        </div>
    )
}

function NavLink({children, active}){
    return(
        <div className={`flex px-2 py-4 ${active ? 'text-black bg-[#F6F6F6]' : 'text-[#AFAFAF]'} my-2  font-bold items-center`}>
            {children}
        </div>
    )
}