import React, { useEffect, useState } from "react";
import Featurse from "../home/Featurse";
import FeaturesProduct from "../home/FeaturesProduct";
import OfferBanner from "../home/OfferBanner";
import CreazyDeal from "../home/CreazyDeal";
import SummerDeal from "../home/SummerDeal";
import SeasonalSele from "../home/Collections/SeasonalSele";
import FootWear from "../home/Collections/FootWear";
import WomenCloths from "../home/Collections/WomenCloths";
import NewsLetter from "../home/NewsLetter";
import HeroSection from "../home/HeroSection";
import { addProducts, getData } from "../utility/LocalStorage";

function Home() {
  const [featuresDataLoad, setFeaturesDataLoad] = useState([]);
  const [featuresProductsLoad, setFeaturesProductsLoad] = useState([]);
  const [foldProducts, setFoldProducts] = useState(true);

  // const [getProductId, setGetProductId] = useState()

  // const handleProducts = (id)=>{
  //   console.log(id);
  // }

  useEffect(() => {
    fetch("FeaturesProducts.json")
      .then((res) => res.json())
      .then((data) => setFeaturesProductsLoad(data));
  }, []);

  const handleProduct = (id) => {
    addProducts(id);
  };

  return (
    <>
      <HeroSection />
      <section>
        
        <div className="w-[90%] mx-auto my-20 grid md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-6 xl:grid-cols-6 gap-4   py-3">
          {featuresDataLoad.map((sf) => (
            <Featurse key={sf.id} featuresDataLoad={sf} />
          ))}
        </div>
      </section>

      {/* <!-- feature products  --> */}
      <section class=" md:mb-28 mb-20">
        <div class="contain w-[90%] mx-auto">
          <div class="text-center">
            <h1 class="text-5xl font-bold">Featured Products</h1>
            <p class="text-slate-300 font-normal py-4">
              Summer Collection New Modern Design{" "}
            </p>
          </div>
          {/* <!-- prodicts card  --> */}
          <div class="grid my-10 xl:grid-cols-4 xl:gap-5  md:grid-cols-3 md:gap-5 grid-cols-2 gap-3">
            {foldProducts
              ? featuresProductsLoad
                  .slice(0, 8)
                  .map((fp) => (
                    <FeaturesProduct
                      key={fp.id}
                      featuresProduct={fp}
                      handleProduct={handleProduct}
                    />
                  ))
              : featuresProductsLoad.map((fp) => (
                  <FeaturesProduct
                    key={fp.id}
                    featuresProduct={fp}
                    handleProduct={handleProduct}
                  />
                ))}
          </div>
          <div align="right" className="font-semibold ">
            {foldProducts ? (
              <span
                className="cursor-pointer"
                onClick={() => setFoldProducts(!foldProducts)}
              >
                See More
              </span>
            ) : (
              <span
                className="cursor-pointer"
                onClick={() => setFoldProducts(!foldProducts)}
              >
                See Less
              </span>
            )}
          </div>
        </div>
      </section>
      {/* <!-- offer banner  --> */}
      <OfferBanner />

      {/* <!-- new products arrival  --> */}
      <section>
        <div class="contain w-[90%] mx-auto">
          <div class="text-center">
            <h1 class="text-5xl font-bold">New Arrivals</h1>
            <p class="text-slate-300 font-normal py-4">
              Summer Collection New Modern Design{" "}
            </p>
          </div>
          {/* <!-- prodicts card  --> */}

          <div class="grid  mb-10 xl:grid-cols-4 xl:gap-5  md:grid-cols-3 md:gap-5 grid-cols-2 gap-3">
            {featuresProductsLoad.slice(8, 16).map((fp) => (
              <FeaturesProduct key={fp.id} featuresProduct={fp} />
            ))}
          </div>
        </div>
      </section>
      {/* <!-- buy one get one free  --> */}
      <section class="md:mb-28 mb-20">
        <div class="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 w-[90%] mx-auto gap-5 ">
          <CreazyDeal />
          <SummerDeal />
        </div>
      </section>
      {/* <!-- All seasons  --> */}
      <section class=" md:mb-28 mb-20">
        <div class="w-[90%] mx-auto ">
          <div class="grid grid-cols-7 gap-5 ">
            <SeasonalSele />
            <FootWear />
            <WomenCloths />
          </div>
        </div>
      </section>
      {/* <!-- newsletr banner  --> */}
      <section class="  md:mb-28 mb-20">
        <NewsLetter />
      </section>
    </>
  );
}

export default Home;
