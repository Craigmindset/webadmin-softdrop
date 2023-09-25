import { BsAirplane, BsTruck, BsLightning } from 'react-icons/bs'
import Naira from '../../assets/Naira'
import Avatar from "../../assets/svg/Avatar.svg"
import Star from "../../assets/svg/Star.svg"

export default function DeliveryDetailsCard({item, itemId, deliveryMethod, travelMethod, deliveryCost, to, fro, estimateShippingCost, status, agentName, agentLocation}) {
  return (
    <div className='bg-white p-4 flex flex-col gap-6'>
        <div className='flex justify-between items-center'>
            <h1 className='font-bold text-lg'>{item}</h1>
            <p className='text-[#22BC92] text-sm'>PACKAGE ID: {itemId}</p>
        </div>
        <div>
            <div className='flex gap-3 items-center text-[#757575] text-sm'>
                {
                    deliveryMethod === "Air" ? <BsAirplane/> : <BsTruck/>
                }
                <p className='-ml-2'>{deliveryMethod} delivery</p>
                <p>{travelMethod} travel</p>
                <p><Naira/>{deliveryCost}</p>
            </div>
            <div className='flex gap-3 items-center text-[#757575] text-sm'>
                <BsLightning/>
                <p>
                    Express
                </p>
            </div>
            <div className='flex gap-3 items-center text-[#757575] text-sm'>
                <div className='flex items-center gap-2'>
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="4" cy="4" r="4" fill="#22BC92"/>
                </svg>
                    <p>{fro}</p>
                </div>
                <svg width="40" height="2" viewBox="0 0 40 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 1C32 1 40 1 40 1" stroke="#22BC92"/>
                </svg>
                <div className='flex items-center gap-2'>
                <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 14C6 14 11.25 9.0245 11.25 5.25C11.25 2.35051 8.8995 0 6 0C3.10051 0 0.75 2.35051 0.75 5.25C0.75 9.0245 6 14 6 14ZM6 7.875C4.55025 7.875 3.375 6.69975 3.375 5.25C3.375 3.80025 4.55025 2.625 6 2.625C7.44975 2.625 8.625 3.80025 8.625 5.25C8.625 6.69975 7.44975 7.875 6 7.875Z" fill="#22BC92"/>
                </svg>
                    <p>{to}</p>
                </div>
            </div>
        </div>
        <div className='flex justify-between items-center'>
            <div>
                <p className='text-[#757575] text-sm'>Estimated Shipping Cost</p>
                <p className='font-bold text-lg'><Naira/>{estimateShippingCost}</p>
            </div>
            <p className={`px-8 py-3 rounded-md ${status === "Trip Ended" ? "bg-[#22BC92]" : status === "In Transit" ? "bg-[#757575]" : status === "Trip Canceled" ? "bg-[#D44333]" :"bg-[#FFC043]"}  text-white`}>
                {status}
            </p>
        </div>
        <div className='flex justify-between items-center'>
            <div className='flex gap-3 items-center'>
                <img src={Avatar} alt="Profile" className='h-14'/>
                <div>
                    <h1 className='font-bold'>{agentName}</h1>
                    <p>{agentLocation}</p>
                </div>
            </div>
            <div className='flex'>
                <img src={Star} alt="Star reviews" className='h-4'/>
                <img src={Star} alt="Star reviews" className='h-4'/>
                <img src={Star} alt="Star reviews" className='h-4'/>
                <img src={Star} alt="Star reviews" className='h-4'/>
                <img src={Star} alt="Star reviews" className='h-4'/>
            </div>
        </div>
    </div>
  )
}
