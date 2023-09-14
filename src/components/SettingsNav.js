import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function SettingsNav() {
    const location = useLocation()

    return (
        <nav className='flex font-medium gap-10 bg-white rounded-md mb-16'>
            <NavLink active={location.pathname === "/admin/settings/profile-settings"} link = "/admin/settings/profile-settings" text="Profile settings"/>
            <NavLink active={location.pathname === "/admin/settings/manage-team"} link = "/admin/settings/manage-team" text="Manage Team"/>
            <NavLink active={location.pathname === "/admin/settings/security-settings"} link = "/admin/settings/security-settings" text="Security Setttings"/>
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
