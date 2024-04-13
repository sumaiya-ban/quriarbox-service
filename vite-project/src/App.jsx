import React from 'react'
import './App.css'
import './index.css'

const App = () => {
  return (
    <div>
       <nav>
      <div className='container'>
        <div className='nav-wrapper flex justify-between'>
        
          
        <h2 className='logo text-xl font-semibold'>Quriarbox</h2>
        
        <ul className=' nav-w flex gap-3'>
          
          <li>Home</li>
          <li>Our services</li>
          <li>About Us</li>
          <li>What’s new?</li>
        </ul>
        
        <a href="#" className=' nv-btn font-bold text-xl text-amber-500 py-3 px-5 border bg-orange-100 after:[] after:w-4 after:h-1 after:bg-black 
        after:absolute after:left-0  after:top-0  relative ' >Contact us</a>
        
        
        
        </div>
        </div>
      
    </nav>
    <div className='container'>
    <div class="grid gap-4 grid-cols-2">
  <div className='div-1 font-normal text-5xl w-3/4'><h1>A trusted provider of <span className='font-extrabold text-5xl'>courier services.</span></h1>
  <p className='font-normal text-xl w-3/4'>We deliver your products safely to your home in a reasonable time.</p>
  <a href="#" className='text-xl  py-3 px-5 border bg-orange-600 text-white font-medium'>Get started</a></div>
  <div className='div-2'><img src="./public/illustration.png" alt="" /></div>
  
</div>
    </div>
    
    <div className='container'>
      <h2 className='service font-bold text-3xl text-amber-500'>SERVICES</h2>
      <h3 className=' serve font-extrabold text-4xl'>Our services for you</h3>
      <div class="grid gap-3 grid-cols-3 h-1/2 mt-20">
  
    <div className='first-serve h-100 bg-slate-100 '>
    <div className=' logo relative ml-40 mt-16'>
      <img src="./public/Circle Yellow.png" alt="" />
  <div className='absolute left-1.5 top-9 '><img src="./public/Vector.png" alt="" />
    </div>
    </div>
    
  <h3 className='service-title font-extrabold text-2xl ml-24 mt-7'>Business Services</h3>
  <p className='font-normal text-base w-72 ml-16 mt-8'>We give you complete reliable delivery for your company.  We will take full responsibility of the deliveries.</p>
  <div className='card-list ml-16 mt-9'>
  <li>Corporate goods</li>
    <li>Shipment</li>
    <li className='mb-16'>Accesories</li>
  </div>
    
    <div className='l-btn ml-16 pb-12'>
    <a href="#" className='py-3 px-24 border border-amber-400 transition duration-500 hover:bg-orange-600 hover:text-white'>Learn more</a>
    </div>
    
    </div>
    <div className='first-serve h-100 bg-slate-100 '>
    <div className=' logo relative ml-40 mt-16'>
      <img src="./public/Circle Yellow.png" alt="" />
  <div className='absolute left-1.5 top-9 '><img src="./public/Vector 2.png" alt="" />
    </div>
    </div>
    
  <h3 className='service-title font-extrabold text-2xl ml-24 mt-7'>Business Services</h3>
  <p className='font-normal text-base w-72 ml-16 mt-8'>We give you complete reliable delivery for your company.  We will take full responsibility of the deliveries.</p>
  <div className='card-list ml-16 mt-9'>
  <li>Corporate goods</li>
    <li>Shipment</li>
    <li className='mb-16'>Accesories</li>
  </div>
    
    <div className='l-btn ml-16 pb-12'>
    <a href="#" className='py-3 px-24 border border-amber-400 transition duration-500 hover:bg-orange-600 hover:text-white'>Learn more</a>
    </div>
    
    </div>
    <div className='first-serve h-100 bg-slate-100 '>
    <div className=' logo relative ml-40 mt-16'>
      <img src="./public/Circle Yellow.png" alt="" />
  <div className='absolute left-1.5 top-9 '><img src="./public/Vector 3.png" alt="" />
    </div>
    </div>
    
  <h3 className='service-title font-extrabold text-2xl ml-24 mt-7'>Business Services</h3>
  <p className='font-normal text-base w-72 ml-16 mt-8'>We give you complete reliable delivery for your company.  We will take full responsibility of the deliveries.</p>
  <div className='card-list ml-16 mt-9'>
  <li>Corporate goods</li>
    <li>Shipment</li>
    <li className='mb-16'>Accesories</li>
  </div>
    
    <div className='l-btn ml-16 pb-12'>
    <a href="#" className='py-3 px-24 border border-amber-400 transition duration-500 hover:bg-orange-600 hover:text-white'>Learn more</a>
    </div>
    
    </div>
  </div>
  
</div>
<div className='container'>
<div class="flex mt-44">
  <div class="flex-initial w-32 h-40 ml-10">
    <div className='ml-5 h-16 w-16 '>
    <img src="./public/LINE---COLOR.png" alt="" />
    </div>
    
    <h2 className='font-extrabold text-4xl text-orange-600 mt-5 ml-5'>26+</h2>
    <h3 className='font-bold text-xl leading-6 mt-1.5'>Awards  won</h3>
  </div>
  <div class="flex-initial w-32 h-40 ml-36">
    <div className='ml-5 h-16 w-16 '>
    <img src="./public/iconspace_Cement Truck_25px.png" alt="" />
    </div>
    
    <h2 className='font-extrabold text-4xl text-orange-600 mt-5 ml-5'>65+</h2>
    <h3 className='font-bold text-xl leading-6 mt-1.5'>Awards  won</h3>
  </div>
  <div class="flex-initial w-32 h-40 ml-36">
    <div className='ml-5 h-16 w-16'>
    <img src="./public/IconSpace_Map_24Px.png" alt="" />
    </div>
    
    <h2 className='font-extrabold text-4xl text-orange-600 mt-5 '>689K+</h2>
    <h3 className='font-bold text-xl leading-6 mt-1.5'>Awards  won</h3>
  </div>
  <div class="flex-initial w-32 h-40 ml-36">
    <div className='ml-5  h-16 w-16'>
    <img src="./public/LINE---COLOR (1).png" alt="" />
    </div>
    
    <h2 className='font-extrabold text-4xl text-orange-600 mt-5 '>130M+</h2>
    <h3 className='font-bold text-xl leading-6 mt-1.5'>Awards  won</h3>
  </div>
  <div class="flex-initial w-32 h-40 ml-36">
    <div className='ml-5 h-16 w-16 '>
    <img src="./public/iconspace_Business Bag_25px.png" alt="" />
    </div>
    
    <h2 className='font-extrabold text-4xl text-orange-600 mt-5 '>130M+</h2>
    <h3 className='font-bold text-xl leading-6 mt-1.5'>Awards  won</h3>
  </div>
  
  
  
  
</div>
</div>
<div className='container'>
  <div className='mt-40 relative'>
  <img src="./public/Rectangle 12.png" alt="" />
  <div className='whole absolute top-top-try left-left-try'>
  <div className='round-b relative'>
    <img src="./public/Ellipse 3.png" alt="" />
  <div className='eclipe absolute top-7 left-8'><img src="./public/Polygon 1.png" alt="" /></div>
  </div>
  
  </div>
  <div className='write absolute top-64 left-left-2'>
  <h3 className='text-orange-600 font-bold text-3xl '>FASTEST DELIVERY</h3>
  
  </div>
  <div className='write-3 absolute font-normal text-2xl text-white  w-w-2 top-top261 left-left311 text-center'>
  <p> You can get your valuable item in the fastest period of
 time with safety. Because your emergency
 <div>is our first priority.</div></p>
  </div>
  
  </div>
  
</div>

    </div>
  );
};

export default App
