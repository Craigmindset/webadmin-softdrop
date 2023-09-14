import { useEffect, useState } from "react";

export default function SecuritySettings(){
    const [formData, setFormData] = useState({
        oldPassword: "",
        password : "",
        confirmPassword : ""
    });
    const [error, setError] = useState(null)

    // TODO: use loading state when user sends request to set up password
    // const [loading, setLoading] = useState(false);

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value })); 
    };

    const handleOnSubmit = async (e) => {
        e.preventDefault()
    };
    
    useEffect(() => {
        (formData.password === formData.confirmPassword) ?
            setError(null) : setError("Passwords must match") 
    }, [formData])

    return(
       <section className='w-1/2'>
            <form className='flex flex-col items-center justify-center gap-4 w-full font-bold' onSubmit={handleOnSubmit}>   
                <div className='flex flex-col items-center gap-3 w-full'>
                    <label htmlFor="oldPassword" className='font-bold self-start'>
                        Old Password
                    </label>
                    <input
                        className='border-2 border-black rounded p-4 text-black w-full'
                        type="password"
                        id = "oldPassword"
                        name="oldPassword"
                        value={formData.oldPassword}
                        onChange={handleOnChange}
                        required                                      
                    />
                </div>                                                                                         
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
                        Confirm New Password
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
                <button
                    className="bg-black py-4 rounded text-white w-full"
                    type="submit"                        
                >
                    Reset Password                         
                </button>                                                    
            </form>  
       </section>
    )
}
