import React from 'react'
import bgImage from '../../../assets/img/banner/b7.jpg'

function SeasonalSele() {
  return (
    <div class="xl:col-span-2 lg:col-span-2 md:col-span-2 col-span-full flex flex-col py-24 justify-center px-2" style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat',backgroundPosition:'center'}}>
            <h1 class="text-2xl font-bold text-white">Seasonal Sale</h1>
            <p class="text-white font-medium py-1">Winter Collections <span class="text-red-500 "> 50% off</span> </p>
    </div>
  )
}

export default SeasonalSele