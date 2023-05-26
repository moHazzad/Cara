import React from 'react'
import bgImage from '../../../assets/img/banner/b18.jpg'

function WomenCloths() {
  return (
    <div class="lg:col-span-2 md:col-span-2 xl:col-span-2 col-span-full order-2 const3 flex flex-col justify-center py-24 px-2" style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat',backgroundPosition:'center'}}>
            <h1 class="text-2xl font-bold text-white">Women Clothing</h1>
            <p class="text-white font-medium py-1">Winter Collections <span class="text-red-500 "> 50% off</span> </p>
          </div>
  )
}

export default WomenCloths