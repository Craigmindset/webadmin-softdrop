import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/svg/SoftDropLogo.svg"
import { useState } from "react";

export default function Login(){
    const [formData, setFormData] = useState({
        email : "",
        password : ""
    });
    // TODO: use loading state when user logs in
    // const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    }
    const handleOnSubmit = async (e) => {
        e.preventDefault()
        if(!formData.email || !formData.password){
            alert('Please fill all the fields')
        }else{
            console.log(formData)
            navigate("/admin/dashboard")
        }
    }

    return(
       <main className="flex flex-col items-center justify-center h-screen">
            <img src={Logo} alt="SoftDrop Logo" />
            <div className="border-2 border-[#CACFD1] w-[40%] rounded p-14 mt-10">
                <div className="text-center mb-6">
                    <h1 className="font-medium text-[44px]">
                        Admin Login
                    </h1>
                    <p>Welcome back</p>
                </div>
                <form className='flex flex-col items-center justify-center gap-4 w-full font-bold' onSubmit={handleOnSubmit}>                                                                                            
                    <div className='flex flex-col items-center gap-3 w-full'>
                        <label htmlFor="email" className='font-bold self-start'>
                            Email address
                        </label>
                        <input
                            className='border-2 border-black rounded p-4 text-black w-full'
                            type='email'
                            name="email"
                            id="email"
                            value={formData.email}
                            onChange={handleOnChange}                                
                            placeholder="Email address"
                            required                                      
                        />
                    </div>

                    <div className='flex flex-col items-center gap-3 w-full'>
                        <label htmlFor="password" className='font-bold self-start'>
                            Password
                        </label>
                        <input
                            className='border-2 border-black rounded p-4 text-black w-full'
                            type="password"
                            id = "password"
                            name="password"
                            value={formData.password}
                            onChange={handleOnChange}                                
                            placeholder="Password" 
                            required               
                        />
                    </div> 
                    <div className="flex justify-between items-center w-full">
                        <label htmlFor="remember">
                            <input id = "remember" name="remember" className='mr-2' type="checkbox"/>  
                            Remember Me
                        </label> 
                        <Link to={"/password-reset"}>Forgot Password?</Link>                                  
                    </div>                                             
                            
                    <button
                        className="bg-black py-4 rounded text-white w-full"
                        type="submit"                        
                    >
                        Login                         
                    </button>                                                    
                </form>  
            </div>
            
        {/* <Link to={"/admin/dashboard"}>Login</Link> */}
       </main>
    )
}