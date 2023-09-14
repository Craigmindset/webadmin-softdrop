import { useState } from 'react'
import Avatar from "../assets/svg/Avatar.svg"

export default function ProfileSetting() {
    const [formData, setFormData] = useState({
        firstName:"",
        lastName:"",
        email : "",
        userRole : "",
    });

    const [file, setFile] = useState();

    const handleFileChange = (e) => {
        if (e.target.files) {
        setFile(e.target.files[0]);
        }
    };
    
    // Dummy file upload function for profile picture
    // TODO: Replace with api from backend
    const handleUpload = () => {
        if (!file) {
        return;
        }

        // 👇 Uploading the file using the fetch API to the server
        fetch('https://httpbin.org/post', {
        method: 'POST',
        body: file,
        // 👇 Set headers manually for single file upload
        headers: {
            'content-type': file.type,
            'content-length': `${file.size}`, // 👈 Headers need to be a string
        },
        })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => console.error(err));
    };

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    }

    const handleOnSubmit = async (e) => {
        e.preventDefault()
        console.log(formData)
        
    }

    return (
        <section className='w-1/2'>
            <div className='mb-10 flex gap-5 items-center'>
                <img src={Avatar} alt="Profile" />
                <div>
                    <div>
                        <button className="bg-black py-1 px-4 mr-3 rounded text-white" onClick={handleUpload}>Upload image</button>
                        <input type="file" onChange={handleFileChange} />
                    </div>
                    <p className='mt-2'>Recommended size: 300 x 300 pixels</p> 
                </div> 
            </div>
            
            <form className='flex flex-col items-center justify-center gap-4 w-full font-bold' onSubmit={handleOnSubmit}>  
                <div className='flex items-center gap-3 w-full'>
                    <div className='flex flex-col items-center gap-3 w-full'>
                        <label htmlFor="firstName" className='font-bold self-start'>
                            First Name
                        </label>
                        <input
                            className='border-2 border-black rounded p-4 text-black w-full'
                            type='text'
                            name="firstName"
                            id="firstName"
                            value={formData.firstName}
                            onChange={handleOnChange}                                
                            placeholder="John"
                            required                                      
                        />
                    </div>

                    <div className='flex flex-col items-center gap-3 w-full'>
                        <label htmlFor="userRole" className='font-bold self-start'>
                            Last Name
                        </label>
                        <input
                            className='border-2 border-black rounded p-4 text-black w-full'
                            type="text"
                            id = "lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleOnChange}                                
                            placeholder="Doe" 
                            required               
                        />
                    </div>
                </div>                                                                                          
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
                    <label htmlFor="userRole" className='font-bold self-start'>
                        User role
                    </label>
                    <input
                        className='border-2 border-black rounded p-4 text-black w-full'
                        type="text"
                        id = "userRole"
                        name="userRole"
                        value={formData.userRole}
                        onChange={handleOnChange}                                
                        placeholder="Admin" 
                        required               
                    />
                </div> 
                <div className='flex gap-3 self-start'>
                    <button
                        className="bg-black py-4 px-12 rounded text-white"
                        type="submit"                        
                    >
                        Login                         
                    </button>    
                    <button
                        className="bg-[#EEEEEE] py-4 px-12 rounded"                       
                    >
                        Cancel                         
                    </button>   
                </div>                                                                                            
            </form>  
        </section>
    )
}
