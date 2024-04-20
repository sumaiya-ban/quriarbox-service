import React, { useState } from 'react'
import LIME from '../../../public/Group 56.png'
import { MdError } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
const Callback = () => {
  let [email,setEmail]=useState("");
  let[password,setPassword]=useState("");
  let[check,setCheck]=useState(false);
  let[Emailerror,SetErrorEmail]=useState("");
  let[Passowrderror,SetErrorPassword]=useState("");
  let[PasswordShow,SetPasswordShow]=useState(false);

  function handleEmail(e){
    setEmail(e.target.value); 
    SetErrorEmail('');
  }
  
  function handlePassword(e){
    setPassword(e.target.value);
    SetErrorPassword('');

  }
  function handleCheckbox(e){
setCheck(e.target.checked);
  }
  let handleSubmit = (e) =>{
  e.preventDefault();
    if(!email){
      SetErrorEmail("Email is required");
    }
    if(!password){
      SetErrorPassword("Password is required");
    }
    
  }
  
  return (
    <div>
      <div className='container'>
        <div className='wholediv flex items-center ml-72'>
        <div className='first w-96'>
        <img src={LIME} alt="" />
        <h3 className='font-bold text-2xl text-orange-600'>REQUEST A CALLBACK</h3>
        <h2 className='text-black font-extrabold text-3xl'>We will contact in the shortest time.</h2>
        <h3 className='text-neutral-400 font-semibold text-2xl'>Monday to Friday, 9am-5pm.</h3>
        </div>
        
        <form className="">
  <div className="mb-5">
    
    <input
    onChange={handleEmail}
      type="email"
      id="email"
      className="bg-gray-50 border pl-4 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 h-12  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder="Email"
      required=""
    />
    {Emailerror&& <h2 className='text-red-700 flex'><div className='p-1'><MdError /></div>{Emailerror}</h2>}
    
  </div>
  <div className="mb-5 relative">
    <div >
    <input
    onChange={handlePassword}
      type={PasswordShow?("text") : ("password")}
      id="password"
      className="bg-gray-50 pl-4 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 h-12 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder='Password'
      required=""
    />
    {PasswordShow?(
      <div className='absolute top-4 right-3'><FaEye onClick={()=> SetPasswordShow(false)} /></div>):
    (<div className='absolute top-4 right-3 ' ><FaEyeSlash onClick={()=> SetPasswordShow(true)} /></div>
    )}
    
    
    </div>
    
    {Passowrderror && <h2 className='text-red-700 flex'><div className='p-1'><MdError /></div>{Passowrderror}</h2>}
    
    
  </div>
  <div className="flex items-start mb-5">
    <div className="flex items-center h-5">
      <input
      onChange={handleCheckbox}
        id="remember"
        type="checkbox"
        defaultValue=""
        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
        required=""
      />
    </div>
    <label
      htmlFor="remember"
      className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
    >
      Remember me
    </label>
  </div>
  <button
  onClick={handleSubmit}
    type="submit"
    className="text-white bg-orange-600 hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
  >
    Submit
  </button>
</form>


        
        </div>
        
        
      </div>
    </div>
  )
}

export default Callback
