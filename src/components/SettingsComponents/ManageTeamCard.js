import React, { useState } from 'react'
import Avatar from "../../assets/svg/Avatar.svg"
import { BsTrashFill } from 'react-icons/bs'

export default function ManageTeamCard({email, name, role}) {
    const [userRole, setUserRole] =  useState(role)

    const handleOnChange = (e) => {
        setUserRole(e.target.value)
    }

    return (
        <div className='flex justify-between items-center'>
            <div className='flex gap-3 items-center'>
                <img src={Avatar} alt="Profile" className='h-14'/>
                <div>
                    <h1 className='font-bold text-lg'>{name}</h1>
                    <p>{email}</p>
                </div>
            </div>
            <div className='flex gap-4 items-center'>
                <select disabled={role==="admin"} name="userRole" id="userRole" value={userRole} onChange={handleOnChange} className='border-2 border-[#979797] text-black p-3 rounded-md focus:outline-none'>
                    <option value="analytics">Analytics</option>
                    <option value="admin">Admin</option>
                    <option value="moderator">Moderator</option>
                </select>
                {
                    role !== "admin" ? <BsTrashFill/> : <div className='w-4'></div>
                }
            </div>
        </div>
    )
}
