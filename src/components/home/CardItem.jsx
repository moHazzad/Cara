import React, { useContext } from "react";


function CardItem({ card,handleRemoveCard }) {
  const { id, image, price, quantity,title } = card;
   
  return (
    <div className="flex   h-36   divide-y">
      <div className=" bg-slate-700 ">
        <img
          className="flex-shrink-0 object-cover  w-36 h-36 bg-gray-500"
          src={image}
          alt=""
        />
      </div>
      <div className="w-full flex flex-col p-2">
        <div className=" flex justify-between mb-3">
          <h1 className="font-semibold text-xl">{title}</h1>
          <p className="text-gray-700 font-bold">{price}$</p>
        </div>
        <div className="flex justify-between ">
          <h2 className="text-gray-300 font-semibold">Quantity: {quantity}</h2>
          <p className="text-gray-500 font-bold">
            Total:{quantity * price}
          </p>
        </div>

        <div className="mt-auto w-8 text-start">
          <button onClick={()=>handleRemoveCard(id)} className="btn btn-ghost ">delete</button>
        </div>
      </div>
    </div>
  );
}

export default CardItem;
