import React from 'react'
import GOOGLEIMAGE from '../../../public/Mask.png'
import { CiLocationOn } from "react-icons/ci";
import { CiClock2 } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { CiFacebook } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { MdOutlineLocalPhone } from "react-icons/md";

const Googlemap = () => {
  return (
    <div>
      <div className='container'>
        <div className='text-center'>
        <h3 className='font-bold text-3xl text-orange-600'>FIND US</h3>
        <h2 className='font-extrabold text-4xl text-black'>Access us easily</h2>
        </div>
        <div className='flex gap-6'>
            <div className='first-dev'>
                <img src={GOOGLEIMAGE} alt="" />
            </div>
            <div className='second-dev w-536 h-428 bg-gray-100'>
                <h4 className='font-bold text-xl mt-20 ml-20'>Contact with us</h4>
                <div className='about font-medium text-base ml-20 mt-9'>
                <h5 className='flex'><div className='mt-1 w-7 h-7'><CiLocationOn /></div>2277 Lorem Ave, San Diego, CA 22553</h5>
                <h5 className='flex'><div className='mt-1 w-7 h-7'><CiClock2 /></div>Monday - Friday: 10 am - 10pm
Sunday: 11 am - 9pm</h5>
<h5 className='flex'><div className='mt-1 w-7 h-7'><MdOutlineEmail /></div>info@quriarbox.com</h5>
<div className='second-part flex gap-6 mt-12'><div className='hover:bg-orange-500'><CiFacebook /></div>
                <div className='hover:bg-orange-500'><CiInstagram /></div>
                <div className='hover:bg-orange-500'><FaGithub /></div>
                </div>
                </div>
                
            </div>
        </div>
        <div className='flex py-6 px-28 text-white text-xl bg-orange-600 w-560 ml-96 mt-9 rounded'>
          <div className='mt-1'><MdOutlineLocalPhone /></div>
        
          <h3 className='font-bold'>Call us to delivery  123-456789</h3></div>
        
      </div>
    </div>
  )
}

export default Googlemap
