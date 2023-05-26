import React from 'react'
import bgImage from '../../../assets/img/banner/b4.jpg'

function FootWear() {
  return (
    
    <div class="md:col-span-3 xl:col-span-3 lg:col-span-3 col-span-full const2 flex flex-col py-24 justify-center px-2" style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat',backgroundPosition:'center'}}>
            <h1 class="text-2xl font-bold text-white">New Footwear Collections</h1>
            <p class="text-white font-medium py-1">Winter Collections <span class="text-red-500 "> 50% off</span> </p>
          </div>
  )
}

export default FootWear