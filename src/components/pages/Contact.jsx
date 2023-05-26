import React from 'react'
import bgImage from '../../assets/img/banner/b19.jpg'
import NewsLetter from '../home/NewsLetter'

function Contact() {
  return (
    <>
    <section className="h-96 mt-[66px] flex justify-center items-center mb-20" style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat',backgroundPosition:'center'}}>
    <main className="w-[90%] mx-auto">
        <div className="text-slate-300 text-center ">
            <h1 className="text-6xl font-bold mb-3">#let's_talk</h1>
            <p className="text-xl  text-slate-300">Leave a Massage We love to hear from you  </p>
        </div>
    </main>
</section>

    <section className="mb-20">
    <div className="w-[90%] mx-auto px-2 overflow-hidden">
        <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 grid-cols">
            <div className="flex flex-col justify-center">
                <p className="font-semibold text-slate-300"> GET IN TOUCH</p>
                <h1 className="text-3xl my-4 font-bold">Visit Us Today</h1>
                <p className="text-slate-400 font-semibold mb-5">Head Office</p>
                <ul>
                    <li><i className="fa-solid fa-location-dot pr-2 mb-3"></i><span className="font-medium text-slate-300 ">25 GLassover Street NewYork</span></li>
                    <li><i className="fa-solid fa-envelope pr-2 mb-3"></i><span className="font-medium text-slate-300 ">example@gmail.com</span> </li>
                    <li><i className="fa-solid fa-phone pr-2 mb-3"></i><span className="font-medium text-slate-300 ">example@gmail.com</span></li>
                    <li><i className="fa-solid fa-timer pr-2 mb-3"></i>mon - thu 9.00-5.00</li>
                </ul>
            </div>
            <div>
               
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29666.962633008552!2d39.12099205955101!3d21.64944686173997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3d01fb1137e59%3A0xe059579737b118db!2sJeddah!5e0!3m2!1sen!2ssa!4v1678362238447!5m2!1sen!2ssa" width="600" height="450" style={{border:'0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    </div>
    </section>
    
    {/* <!-- form section  --> */}
    <section className="mb-20">
      <div className="w-[90%] mx-auto">
        <div>
          <p className="font-semibold text-slate-300">Leave a Message</p>
          <h1 className="text-3xl font-bold my-5">We Love To Hear From You</h1>
          <div className="border-2 p-8">
            <form className="flex flex-col p-4 mb-4">
              <input className="border py-2 px-2" type="text" name="name" id="name" placeholder="Your Name" />
              <input className="border my-4 py-2 px-2" type="email" name="email" id="email" placeholder="Enter Your Email" />
              <textarea className="border py-2 px-2" name="message" id="message" cols="30" rows="10" placeholder="Leave Message Here"></textarea>
              <button type="submit" className="ml-3 mb-3 btn-outline btn text-[#369E95] hover:bg-[#369E95] hover:text-white">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </section>
    <NewsLetter />
    
    </>
  )
}

export default Contact