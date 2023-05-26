import React, { useContext, useState } from 'react';
import './FeaturesProduct.css';
import { ShoppingCartIcon } from '@heroicons/react/24/solid';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { addProducts } from '../utility/LocalStorage';
import { Link } from 'react-router-dom';

function FeaturesProduct({ featuresProduct,handleProduct }) {

  const [toggleBookMark, setToggleBookMark] = useState(false)
  
  const { id, image, Brand, title, price } = featuresProduct;

  

  return (
    <div className="">
            <div className="card w-full glass overflow-hidden geeks my-4">
              <figure><img className='anima hover:onhover relative transform scale-100 hover:scale-125' src={image} alt="car!"/></figure>
            <FontAwesomeIcon onClick={()=>setToggleBookMark(!toggleBookMark)} className={`absolute right-3 top-4 text-2xl ${toggleBookMark? 'text-red-500': ''}`} icon={faHeart} />
              <div className="py-8 px-3 ">
                <h2 className="text-gray-300">{Brand}</h2>
                <h2 className="card-title">{title}</h2>
                <ul className=" flex pt-2">
                  <li className="text-yellow-400"> <i className="fa-solid fa-star"></i></li>
                  <li className="text-yellow-400"> <i className="fa-solid fa-star"></i></li>
                  <li className="text-yellow-400"> <i className="fa-solid fa-star"></i></li>
                  <li className="text-yellow-400"> <i className="fa-solid fa-star"></i></li>
                  <li className="text-gray-400"> <i className="fa-solid fa-star"></i></li>
                </ul>               
                <div className="card-actions justify-between mt-2">
                  <p className="text-[#369E95] font-semibold">${price}</p>
                  
                <Link to={`/productDetails/${id}`}>
                <button  className="py-1 px-2 text-[#369E95]  hover:text-white rounded-full btn btn-ghost btn-circle"><ShoppingCartIcon className="h-6 w-6  text-[#369E95]" /></button>
                </Link>

                {/* </Link>
                <Link to={`/productDetails/${id}`}>
                <button >click me </button>
                </Link> */}
                
                </div>
              </div>
            </div>
          </div>
  )
}

export default FeaturesProduct;
