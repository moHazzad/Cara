import React from 'react'
import { Link } from 'react-router-dom'

function PayNow() {
  return (
    <div  >
      <div className="hero min-h-screen bg-base-200">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold my-5">Order On process</h1>

      <Link to={'/'}><button  className="btn bg-[#15b0ab]">Go Back Home</button></Link>

    </div>
  </div>
</div>
    </div>
  )
}

export default PayNow