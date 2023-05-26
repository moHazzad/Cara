import React from "react";

function SingleProduct() {
  return (
    <section>
      <div className="w-[90%] mx-auto">
        <div>
          <div className="grid xl:grid-cols-5 lg:grid-cols-5 xl:gap-5 lg:gap-5 gap-3">
            <div className=" xl:col-span-2  lg:col-span-2">
              <div className="flex flex-col gap-2">
                <div className="">
                  <figure>
                    <img id="bigImage" src="./img//products/f3.jpg" alt="" />
                  </figure>
                </div>
                <div className="">
                  <div className="flex gap-2 smallImage">
                    <figure>
                      <img src="./img//products/f4.jpg" alt="" />
                    </figure>
                    <figure>
                      <img src="./img//products/f5.jpg" alt="" />
                    </figure>
                    <figure>
                      <img src="./img//products/f5.jpg" alt="" />
                    </figure>
                    <figure>
                      <img src="./img//products/f2.jpg" alt="" />
                    </figure>
                  </div>
                </div>
              </div>
            </div>

            <div className=" xl:col-span-3 lg:col-span-3 h-full">
              <div className="  flex flex-col items-center h-full">
                <div className="py-10   ">
                  <p className="text-slate-400 font-semibold mb-3">
                    Home/T-shirt
                  </p>
                  <h1 className="text-2xl font-bold mb-4">
                    Men's Fashion T-shirt
                  </h1>
                  <h2 className="text-2xl font-bold mb-6 text-slate-400">
                    $139.30
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
                      className="  border-2 w-20 px-2 text-slate-300   "
                      type="number"
                      value="1"
                    />
                    <input type="number" />
                    <button className="py-2 px-5 bg-[#369E95] text-white font-semibold btn border-none rounded-sm ">
                      Add to Cart
                    </button>
                  </div>
                  <h1 className="text-2xl font-semibold mb-5  ">
                    Products Details
                  </h1>
                  <p className="text-slate-400">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Facere quasi aut vero voluptates neque dolorum voluptate
                    veritatis incidunt iste, necessitatibus unde quidem
                    laboriosam inventore error assumenda aliquid ea, quod
                    voluptatum repellendus illo? Corrupti itaque dolor
                    asperiores et, rerum optio enim?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SingleProduct;
