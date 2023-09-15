import Avatar from "../assets/svg/Avatar.svg"
import { BsTrashFill } from 'react-icons/bs'

export default function RequestCard({email, name, status}) {
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
                <p className="bg-black p-4 rounded-sm font-bold text-white">Pending approval</p> 
                <BsTrashFill/>
            </div>
        </div>
    )
}
