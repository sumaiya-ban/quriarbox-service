import React from 'react'
import LOGO from '../../../public/Group 1.png'

const Footersecond = () => {
  return (
    <div className='bg-footer-c' >
        <div className='container'>
        <div className='footer-2 flex justify-between pt-12  '>
            <div>
                <div className='logoclass flex '>
                <img src={LOGO} alt="" />
            <h2 className='text-white font-medium text-2xl m-auto'>Quriarbox</h2>
                </div>
                
    <p className='text-ash w-48'>The most trusted Courier
company in your area.</p>
            </div>
    <div>
    <h3 className='font-bold text-white text-xl pb-5'>Other links</h3>
<ul className='text-ash'>
    <li>Blogs</li>
    <li>Movers website</li>
    <li>Traffic Update</li>
</ul>
    </div>
<div>
<h3 className='font-bold text-white text-xl pb-5'>Services</h3>
<ul className='text-ash'>
    <li>Corporate goods</li>
    <li>Artworks</li>
    <li>Documents</li>
</ul>
</div>
<div>
<h3 className='font-bold text-white text-xl pb-5'>Customer Care</h3>
<ul className='text-ash'>
    <li>About Us</li>
    <li>Contact US</li>
    <li>Get Update</li>
</ul>
</div>

</div>
        </div>
      
    </div>
  )
}

export default Footersecond
