import React from 'react'
import bgImage from '../../assets/img/banner/hero4.png'

function HeroSection() {
  return (
    <section className="h-[calc(100vh-66px)] mt-[66px]"  style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat',backgroundPosition:'center'}}> 
        <div className="">
        <div className="contain w-[90%] mx-auto h-[calc(100vh-66px)]  flex items-center ">
                    <div className="">
                    <h4 className="font-bold md:text-2xl xl:text-2xl lg:text-2xl text-xl mb-2 text-slate-600">Trade-in-offer</h4>
                    <h1 className="font-bold xl:text-5xl md:text-5xl lg:text-5xl text-3xl">Supper value deal</h1>
                    <h1 className="font-bold xl:text-5xl md:text-5xl lg:text-5xl text-3xl xl:py-2 md:lg:py-2 py-1 text-[#369E95] ">On all products</h1>
                    <p className="text-slate-600 font-medium my-2">Save more with coupons & up to 70% off!</p>
                    <div className="mt-4">
                        <button className="btnimg"><span className="py-2 text-lg font-semibold text-[#369E95]">Shop Now</span></button>
                        </div>
                    </div>
            </div>
        </div>   
  </section>
  )
}

export default HeroSection