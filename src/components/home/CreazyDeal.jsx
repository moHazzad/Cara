import React from 'react'
import bgImage from '../../assets/img/banner/b17.jpg'

function CreazyDeal() {
  return (
    <div class=" p-4 flex  items-center py-20" style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat',backgroundPosition:'center'}}>
          {/* <!-- <figure><img class="" src="./img/banner/b17.jpg" alt=""></figure> --> */}
        <div class=" ">
            <p class="text-white">Crazy Deals</p>
            <h1 class="py-2 font-bold text-xl text-white">Buy 1 Get 1 Free</h1>
            <p class=" text-white">The best classic dress is on sole at cara</p>
            <button class="mt-2  btn-outline btn outline-yellow-50   text-[#369E95] font-semibold  hover:bg-[#369E95] hover:text-white">Learn More</button>
        </div>
    </div>
  )
}

export default CreazyDeal