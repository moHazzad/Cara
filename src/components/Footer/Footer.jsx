import React from 'react'
import appImg from '../../assets/img/pay/app.jpg'
import payImg from '../../assets/img/pay/pay.png'
import playImg from '../../assets/img/pay/play.jpg'
import logoImg from '../../assets/img/banner/logo.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {faFacebook} from '@fortawesome/free-solid-svg-icons'


function Footer() {
  return (
    
    
    <footer className=" py-7">
      <div className="w-[90%] mx-auto">
        <div className=" ">
          <div className="grid grid-cols-6" >
            <div className="xl:col-span-2 lg:col-span-2  col-span-full ">
              <figure><img className="btn btn-ghost p-0 " src={logoImg} alt=""/></figure>
              <h5  className="font-bold my-2">Contact</h5>
              <div className="my-3">
                  <span className="font-semibold">Address:</span><p> 534 Wellington Read Street 32 San Fanco</p>
                  <span className="font-semibold">Phone:</span><p>+000-111-32323/ +000-3434-12111</p>                 
              </div>
            </div>
              {/* <div>
                <div className="my-2">
                  <h1 className="font-bold ">Follow US</h1>
                </div>
                <div className="cursor-pointer">
                  <i className="fa-brands fa-facebook-f pr-2"></i>
                  <i className="fa-brands fa-instagram px-2"></i>
                  <i className="fa-brands fa-twitter px-2"></i>
                  <i className="fa-brands fa-tiktok px-2"></i>
                </div>
              </div> */}
              {/* <!-- about part  --> */}
              <div className="xl:col-span-1 lg:col-span-1  col-span-3 xl:my-0 lg:my-0 my-10">
                <h1 className="font-bold">About</h1>
                <div className="my-3">
                  <p className="mb-1">About Us </p>
                  <p className="mb-1">Delivery Information</p>
                  <p className="mb-1">Privacy Policy</p>
                  <p className="mb-1">Term & Condition</p>
                  <p className="mb-1">Contact Us</p>

                </div>
              </div>
              {/* <!-- My account  part  --> */}
              <div className="xl:col-span-1 lg:col-span-1  col-span-3  xl:my-0 lg:my-0 my-10">
                <h1 className="font-bold">My Account</h1>
                <div className="my-3">
                  <p className="mb-1">Sign In </p>
                  <p className="mb-1">View Cart</p>
                  <p className="mb-1">My Wishlist</p>
                  <p className="mb-1">Track My Order</p>
                  <p className="mb-1">Help</p>

                </div>
              </div>
              {/* <!-- Install app  part  --> */}
              <div className="xl:col-span-2 lg:col-span-2  col-span-full ">
                <h1 className="font-bold">Install App</h1>
                <div className="my-3">
                  <p className="mb-1">From App Store or Google Play</p>
                  <div className="flex gap-1 my-2">
                    <figure><img className="btn btn-outline hover:bg-transparent" src={playImg} alt=""/></figure>
                    <figure><img className="btn btn-outline hover:bg-transparent" src={appImg} alt=""/></figure>
                  </div>
                  <p className="mb-1">Secure Payment Getaway</p>
                  <figure><img className="py-4" src={payImg} alt=""/></figure>
                  

                </div>
              </div>
              
            {/* </div> */}
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer