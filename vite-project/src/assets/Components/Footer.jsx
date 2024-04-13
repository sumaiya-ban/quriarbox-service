import React from 'react'

const Footer = () => {
  return (
    <div className='bg-blue'>
      <div className='container'> 
      <div className='flex pt-10 justify-between align-baseline pb-20'>
      <div className='first-part'>
        <h3 className='font-extrabold text-4xl text-white '>Get an update every week
</h3>
<p className='text-ghia w-501'>We ensure that your product is delivered in the safest possible manner, at the correct location, at the right time.</p>
        </div>
        
<div className='second'>

      <h5 className='text-orange-600 font-bold text-lg'>SUBSCRIBE TO NEWSLETTER</h5>
      <div className='flex gap-4'>
      <input
    
    type="email"
    id="email"
    className="bg-transparent border pl-4 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 h-12  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    placeholder="Enter your mail"
    required=""
  />
  <button

  type="submit"
  className="text-white bg-orange-600 hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
>
  Subscribe
</button>
 
      </div>
</div>
      </div>
       

        
   
     
      </div>
    </div>
  )
}

export default Footer
