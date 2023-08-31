import { Link } from "react-router-dom";
import Logo from "../assets/svg/SoftDropLogo.svg";
import NotFoundImage from "../assets/svg/404.svg";

export default function NotFound(){

    return(
       <main className="flex flex-col items-center justify-center py-10">
            <img src={Logo} alt="SoftDrop Logo" />
            <div className="border-2 border-[#CACFD1] w-[40%] rounded p-14 my-10">
                <div className="text-center mb-6">
                    <img className="w-[70%] mx-auto" src={NotFoundImage} alt="404 illustration" />
                    <p className="font-bold text-4xl mt-10">
                        Ooops!!!!!! 
                    </p>
                    <p className="text-xl my-4">
                        Page not found
                    </p>
                    <Link to="/">
                        <button
                            className="bg-black py-4 px-10 rounded text-white"
                            type="submit"                        
                        >
                            Go to home                         
                        </button> 
                    </Link>
                </div> 
            </div>
       </main>
    )
}