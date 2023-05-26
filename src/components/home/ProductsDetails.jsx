import React, { useContext } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import FeaturesProduct from "./FeaturesProduct";
import NewsLetter from "./NewsLetter";
import { addProducts } from "../utility/LocalStorage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CartContext } from "../../App";

export default function ProductsDetails() {
  const { setCardItems } = useContext(CartContext);
  const { id } = useParams();
  //   console.log(id)
  const productsDetails = useLoaderData();

  const singleProduct = productsDetails.find((sp) => sp.id === parseInt(id));

  const { image, productDetails, title, price, brand } = singleProduct;

  const handleProduct = (id) => {
    () => toast("Product Added");
    alert("added product");
    addProducts(id);
    setCardItems((prev) => prev + 1);
  };

  // <!-- products section  -->
  return (
    <>
      <section className="mt-28 mb-16">
        <div className="w-[90%] mx-auto">
          <div>
            <div className="grid xl:grid-cols-5 lg:grid-cols-5 xl:gap-5 lg:gap-5 gap-3">
              <div className=" xl:col-span-2  lg:col-span-2">
                <div className="flex flex-col gap-2">
                  <div className="">
                    <figure>
                      <img id="bigImage" src={image} alt="" />
                    </figure>
                  </div>
                  <div className="">
                    <div className="flex gap-2 smallImage">
                      <figure>
                        <img src={image} alt="" />
                      </figure>
                      <figure>
                        <img src={image} alt="" />
                      </figure>
                      <figure>
                        <img src={image} alt="" />
                      </figure>
                      <figure>
                        <img src={image} alt="" />
                      </figure>
                    </div>
                  </div>
                </div>
              </div>

              <div className=" xl:col-span-3 lg:col-span-3 h-full ">
                <div className="  flex flex-col items-center h-full">
                  <div className="py-10   ">
                    <p className="text-slate-400 font-semibold mb-3">{brand}</p>
                    <h1 className="text-2xl font-bold mb-4">{title}</h1>
                    <h2 className="text-2xl font-bold mb-6 text-slate-400">
                      ${price}
                    </h2>
                    <select
                      className="outline-none border-violet-100 mb-5 px-2 py-2 w-44 text-slate-600"
                      name="from"
                      required
                    >
                      <option value="" hidden>
                        Please Select size
                      </option>
                      <option>S</option>
                      <option>M</option>
                      <option>L</option>
                      <option>XL</option>
                      <option>XXL</option>
                    </select>
                    <div className="flex gap-3 mb-5">
                      <input
                        className="  border-2 w-20 px-2 text-black   "
                        type="number"
                        // value="1"
                        defaultValue="1"
                        
                        
                      />
                      <button
                        onClick={() => {
                          handleProduct(id);
                        }}
                        className="py-2 px-5 bg-[#369E95] text-white font-semibold btn border-none rounded-sm "
                      >
                        Add to Cart
                      </button>
                    </div>
                    <h1 className="text-2xl font-semibold mb-5  ">
                      Products Details
                    </h1>
                    <p className="text-slate-400">{productDetails}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <NewsLetter />
    </>
  );
}
