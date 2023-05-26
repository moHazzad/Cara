import React, {   useContext, useEffect, useState } from "react";
// import { CartContext } from "../../App";
import CardItem from "./CardItem";
import { getData, removeProduct } from "../utility/LocalStorage";
import { Link, useLoaderData, useLocation } from "react-router-dom";
import { CartContext } from "../../App";
import { AuthContext } from "../AuthProviders/AuthProviders";
// import { CartContext } from "../../App";

function Cart() {
const {cards, storedCardById} = useLoaderData() 
const {setCardItems} = useContext(CartContext)
const location = useLocation()

const [addToCardItems, setAddToCardItems] = useState(storedCardById)
//  console.log(addToCardItems);

 let totalPrice = 0 
 for(const product of addToCardItems){
  totalPrice = totalPrice + product.price * product.quantity
 }
//  console.log(totalPrice);
 
 useEffect(()=>{
   setCardItems(addToCardItems.length)
 },[addToCardItems.length])

// this function for remove added items 
const handleRemoveCard = id =>{
  const remainingCart = addToCardItems.filter(remain=> remain.id !== id)
  removeProduct(id)
  setAddToCardItems(remainingCart)
  
}
  
  return (
    <>
      <div className="w-[90%] mx-auto  my-20 flex flex-col text-center ">
        <div className="w-[70%] mx-auto flex flex-col gap-2">
          <h4 className="text-start  font-semibold text-xl">
            Review Cart Items
          </h4>
          {addToCardItems.map((card) => (
            <CardItem key={card.id} card={card} handleRemoveCard={handleRemoveCard} />
          ))}
           
          <div className="text-right">
            <h1 className="font-semibold" >Total: $ <span>{totalPrice}</span></h1>
            <p>No text includes</p>
          <Link to={'/pay'} state={location} >
          <button className="btn btn-sm my-3 bg-[#15b0ab]">Pay Now</button>
          </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
