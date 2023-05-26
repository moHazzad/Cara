import React from 'react'
// import bgImage from '../../assets/img/about/banner.png'

function Banner({bgImage}) {
  return (
    <section class="h-96 mt-[66px] flex justify-center items-center" style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat',backgroundPosition:'center'}}>
        <main class="w-[90%] mx-auto">
            <div class="text-slate-300 text-center ">
                <h1 class="text-6xl font-bold mb-3">#know us</h1>
                <p class="text-xl  text-slate-300">Save more with coupon & up to 70% off </p>
            </div>
        </main>
    </section>
  )
}

export default Banner