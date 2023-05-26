import React, { useEffect, useState } from 'react'
import bgImage from '../../assets/img/banner/b1.jpg'
import FeaturesProduct from '../home/FeaturesProduct'
import NewsLetter from '../home/NewsLetter'

function Shop() {
    const [featuresProductsLoad, setFeaturesProductsLoad] = useState([])

    useEffect(()=>{
        fetch('FeaturesProducts.json')
        .then(res => res.json())
        .then(data =>setFeaturesProductsLoad(data))
       
    },[])
  return (
    <>
    
    <section class="h-72  mt-[66px] flex justify-center items-center" style={{ backgroundImage: `url(${bgImage})`}}>
        <main class="w-[90%] mx-auto">
            <div class="text-slate-300 text-center ">
                <h1 class="text-6xl font-bold mb-3">#stayhome</h1>
                <p class="text-xl  text-slate-300">Save more with coupon & up to 70% off </p>
            </div>
        </main>
    </section>
    {/* <!-- shop product section  --> */}
    <section>
        <div class="w-[90%] mx-auto">
            <div class="grid my-10 xl:grid-cols-4 xl:gap-5  md:grid-cols-3 md:gap-5 grid-cols-2 gap-3">
                {
                    featuresProductsLoad.map(fp=> <FeaturesProduct key={fp.id} featuresProduct={fp} />)
                }
            </div>
        </div>
    </section>

    {/* <!-- pagination section  --> */}
    {/* <section class="h-1/3 flex justify-center items-center text-center mb-16">
        <div>
            <button class="bg-[#369E95] py-2 px-4 rounded-sm text-white font-semibold">1</button>
            <button class="bg-[#369E95] py-2 px-4 rounded-sm text-white font-semibold">2</button>
            <button class="bg-[#369E95] py-2 px-4 rounded-sm text-white font-semibold">3</button>
            <button class="bg-[#369E95] py-2 px-4 rounded-sm text-white font-semibold"><i class="fa-solid fa-arrow-right"></i></button>
        </div>
    </section> */}
    <NewsLetter />
    
    
    
    </>
  )
}

export default Shop