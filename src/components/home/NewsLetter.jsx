import React from 'react'
import bgImage from '../../assets/img/banner/b1.jpg'

function NewsLetter() {
  return (
    <div class="w-[90%] mx-auto flex xl:flex-row lg:flex-row md:flex-row flex-col gap-5 text-center justify-between items-center px-2 py-20 "style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat',backgroundPosition:'center'}}>
        <div class="text-white"> 
          <h1 class="text-3xl font-bold my-1">Sign up for newsletr</h1>
          <p>Get E-mail update about our latest shop and <span class="text-yellow-400">Special Offer</span></p>
        </div>
        <div>
          <div class="flex">
            <input class="xl:py-2 lg:py-2 md:py-2 py-1  px-1 rounded-l-sm" type="text" placeholder="Enter Your Email"/>
            <button class="bg-[#369E95] xl:py-2 lg:py-2 md:py-2 py-1 px-5 rounded-r-sm text-white">Sign Up</button>
          </div>
        </div>
      </div>
  )
}

export default NewsLetter