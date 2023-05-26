import React from 'react'
import bgImage from '../../assets/img/banner/b2.jpg'

function OfferBanner() {
  return (
    <section class=" py-10 md:mb-28 mb-20" style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat',backgroundPosition:'center'}}>

      <div class="w-[90%] mx-auto flex justify-center items-center h-full" >
        <div class="text-white text-center">
          <p class="font-semibold">Hottest Offer</p>
          <h1 class="xl:text-5xl lg:text-5xl md:text-3xl text-2xl font-semibold xl:py-5 lg:py-5 md:py-5 py-3">Up to <span class="text-red-500">70% off</span> All T-shirt & Accessories</h1>
          <button class="bg-slate-100 py-2 px-6 text-[#369E95] font-semibold btn btn-active hover:bg-[#369E95] hover:text-white">Explore More</button>
        </div>
      </div>
    </section>
  )
}

export default OfferBanner