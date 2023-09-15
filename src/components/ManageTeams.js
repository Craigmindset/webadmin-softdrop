import { useState } from 'react'
import ManageTeamCard from './ManageTeamCard';
import RequestCard from './RequestCard';


export default function ManageTeams() {
  const [formData, setFormData] = useState({
    email:"",
    userRole : "analytics",
  });

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
      <h1 className='font-bold text-lg'>Add new staff</h1>
      <p className='text-sm text-[#757575] my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam commodi officiis quae ex qui ullam odio in iusto explicabo veniam, asperiores tempore laudantium mollitia iure sapiente! Quas facere nam cupiditate!</p>
      <form className='flex gap-3 mb-20' onSubmit={handleOnSubmit} >
        <div className='flex items-center text-[#979797] w-3/5'>
            <input
                className='border-2 border-[#979797] h-14 pl-4 focus:outline-none w-[80%]'
                type='email'
                name="email"
                id="email"
                value={formData.email}
                onChange={handleOnChange}                                
                placeholder="Email address"
                required                                      
            />
            <select name="userRole" id="userRole" value={formData.userRole} onChange={handleOnChange} className='border-2 border-l-0 border-[#979797] h-14 text-black px-4 focus:outline-none'>
              <option value="analytics">Analytics</option>
              <option value="moderator">Moderator</option>
            </select>
        </div>
        <button
            className="bg-black px-4 rounded font-bold text-white w-[20%]"
            type="submit"                        
        >
          Send invite                         
        </button> 
      </form>
      <div className='flex flex-col gap-5'>
        <ManageTeamCard email="JaneDoe@gmail.com" name="John Doe" role="admin"/>
        <ManageTeamCard email="JaneDoe@gmail.com" name="John Doe" role="analytics"/>
        <ManageTeamCard email="JaneDoe@gmail.com" name="John Doe" role="moderator"/>
        <ManageTeamCard email="JaneDoe@gmail.com" name="John Doe" role="moderator"/>
      </div>
      <hr className='w-full h-1 bg-[#979797] my-20'/>
      <h1 className='font-bold text-lg'>Pending request</h1>
      <p className='text-sm text-[#757575] my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam commodi officiis quae ex qui ullam odio in iusto explicabo veniam, asperiores tempore laudantium mollitia iure sapiente! Quas facere nam cupiditate!</p>
      <div className='flex flex-col gap-5'>
        <RequestCard email="JaneDoe@gmail.com" name="John Doe" role="admin"/>
        <RequestCard email="JaneDoe@gmail.com" name="John Doe" role="analytics"/>
      </div>
    </section>
  )
}
