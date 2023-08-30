import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function SetUpPassword(){
    const [formData, setFormData] = useState({
        password : "",
        confirmPassword : ""
    });
    const [error, setError] = useState(null)

    // TODO: use loading state when user sends request to set up password
    // const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value })); 
    };

    const handleOnCheck = () => {
        let pswd = document.getElementById("password");
        let conPswd = document.getElementById("confirmPassword");

        if (pswd.type === "password") {
            pswd.type = "text";
            conPswd.type = "text";
        } else {
            pswd.type = "password";
            conPswd.type = "password";
        }
            
    }

    const handleOnSubmit = async (e) => {
        e.preventDefault()
    };
    
    useEffect(() => {
        (formData.password === formData.confirmPassword) ?
            setError(null) : setError("Passwords must match") 
    }, [formData])

    return(
       <main className="flex flex-col items-center justify-center h-screen">
            <div className="border-2 border-[#CACFD1] w-[40%] rounded p-14 mt-10">
                <div className="text-center mb-6">
                    <h1 className="font-medium text-[44px]">
                        Password Reset
                    </h1>
                </div>
                <form className='flex flex-col items-center justify-center gap-4 w-full font-bold' onSubmit={handleOnSubmit}>                                                                                            
                    <div className='flex flex-col items-center gap-3 w-full'>
                        <label htmlFor="password" className='font-bold self-start'>
                            New Password
                        </label>
                        <input
                            className='border-2 border-black rounded p-4 text-black w-full'
                            type="password"
                            id = "password"
                            name="password"
                            value={formData.password}
                            onChange={handleOnChange}
                            required                                      
                        />
                    </div>

                    <div className='flex flex-col items-center gap-3 w-full'>
                        <label htmlFor="confirmPassword" className='font-bold self-start'>
                            Confirm Password
                        </label>
                        <input
                            className='border-2 border-black rounded p-4 text-black w-full'
                            type="password"
                            id = "confirmPassword"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleOnChange}
                            required               
                        />
                    </div> 
                    {
                        error && <p className="text-red-400 self-start">{error}</p>
                    } 
                    <div className="flex justify-between items-center w-full">
                        <label htmlFor="showPassword">
                            <input id = "showPassword" name="showPassword" className='mr-2' type="checkbox" onChange={handleOnCheck}/>  
                            Show Password?
                        </label>                                  
                    </div>         
                    <button
                        className="bg-black py-4 rounded text-white w-full"
                        type="submit"                        
                    >
                        Confirm                         
                    </button>                                                    
                </form>  
            </div>
       </main>
    )
}