import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function DeliveryNav() {
    const location = useLocation()

    return (
        <nav className='flex font-medium gap-10 bg-white rounded-md mb-16'>
            <NavLink active={location.pathname === "/admin/all-deliveries/all"} link = "/admin/all-deliveries/all" text="All"/>
            <NavLink active={location.pathname === "/admin/all-deliveries/in-transit"} link = "/admin/all-deliveries/in-transit" text="In transit"/>
            <NavLink active={location.pathname === "/admin/all-deliveries/completed"} link = "/admin/all-deliveries/completed" text="Completed"/>
            <NavLink active={location.pathname === "/admin/all-deliveries/canceled"} link = "/admin/all-deliveries/canceled" text="Canceled"/>
            <NavLink active={location.pathname === "/admin/all-deliveries/awaiting-pickup"} link = "/admin/all-deliveries/awaiting-pickup" text="Awaiting Pickup"/>
        </nav>
    )
}

function NavLink({active, text, link}){
    return(
        <Link to={link} className={`${active ? 'text-black' : 'text-[#AFAFAF]'} mt-4`}>
            <p  className="px-5">
                {text}
            </p>
            <div className={`${active ? 'h-[5px]' : "hidden"} rounded-sm w-full bg-black mt-2`}></div>
        </Link>
    )
}
