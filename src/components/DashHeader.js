import { BsBell, BsChevronDown, BsSearch } from "react-icons/bs";

export default function DashHeader({title}){
    return(
        <div className="flex justify-between items-center p-4">
            <div className="font-bold text-xl">
                {title || "Put header title"}
            </div>
            <div className="bg-[#EEEEEE] flex justify-between items-center h-8 w-[40%] p-2 rounded-lg">
                <input className="bg-[#EEEEEE] text-sm outline-none"  placeholder="search here ..." />
                <BsSearch size={15} />
            </div>
            <div className="flex items-center justify-between">
                <BsBell className="mr-4"/>
                <div className="flex justify-between items-center border-2 p-2 rounded-sm">
                    <div className="w-5 h-5 mr-2 bg-purple-500 rounded-full">

                    </div>
                    <div className="mr-4">
                        John Doe
                    </div>
                    <BsChevronDown />
                </div>
            </div>
        </div>
    )
}