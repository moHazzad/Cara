import React from 'react'
import bgImage from '../../assets/img/about/banner.png'
import whoImg from '../../assets/img/about/a6.jpg'
import aboutVd from '../../assets/img/about/1.mp4'
import NewsLetter from '../home/NewsLetter'
import Banner from '../home/Banner'

function About() {
  return (
    <>  
    {/* <!-- banner section  --> */}

    <Banner bgImage={bgImage}/>
    
    <section class="my-20">
        <div class="w-[90%] mx-auto">
            <div>
                <div class="flex gap-4 xl:flex-row lg:flex-row md:flex-row flex-col">
                    <div class="">
                        
                        <figure><img class="" src={whoImg} alt="" /></figure>
                    </div>
                    <div class=" flex flex-col justify-center  ">
                        <h1 class="text-5xl font-bold  my-2">Who We Are </h1>
                        <p class="text-slate-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quo optio eos recusandae dicta, assumenda nam hic at facere asperiores quidem autem nulla repudiandae soluta error illum, repellat eaque possimus blanditiis vel delectus consequuntur quisquam. Soluta ducimus nostrum sequi fugiat quod quidem adipisci, doloremque fuga quasi sed itaque iusto animi?</p>
                        <marquee class="text-slate-400 font-semibold" behavior="" direction="" loop="-1" scrollamount="5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate obcaecati sequi beatae, expedita quam similique asperiores maiores eligendi impedit architecto quia perferendis</marquee>
                        
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section>
        <div class="w-[90%] mx-auto">
            <div class="text-center">
                <h1 class="text-5xl font-bold  mb-10">Download The <a class="text-[#369E95]" href="#">App</a></h1>
            </div>
            <div class="bg-slate-500 w-3/5 mx-auto rounded-xl xl:p-20 lg:p-20 md:p-14 p-10 mb-20">
                <video  autoPlay loop  src={aboutVd} type="video/mp4"></video>
            </div>
        </div>
    </section>
    <NewsLetter />
    
    
    
    </>
  )
}

export default About