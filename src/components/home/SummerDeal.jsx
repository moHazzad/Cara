import React from 'react'
import bgImage from '../../assets/img/banner/b10.jpg'

function SummerDeal() {
  return (
    <div class="rel2 p-4 flex  items-center py-20" style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat',backgroundPosition:'center'}}>
          {/* <!-- <figure><img src="./img/banner/b10.jpg" alt=""></figure> --> */}
          <div class=" ">
            <p class="text-white">Spring/Summer</p>
            <h1 class="py-2 font-bold text-xl text-white">Upcoming Season</h1>
            <p class=" text-white">The best classic dress is on sole at cara</p>
            <button class="mt-2   btn outline-yellow-50  py-2 px-6  font-semibold bg-[#369E95] text-white">Collection</button>
        </div>
    </div>
  )
}

export default SummerDeal