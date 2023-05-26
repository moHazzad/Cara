import React from 'react'



function Featurse(props) {
  const {image,text} = props.featuresDataLoad

  return ( 
        <div className="border-solid border border-gray-200 flex flex-col gap-2 py-5 drop-shadow-sm">
          <figure><img className="w-full p-3" src={image} alt=""/></figure>
          <button className="bg-[#FEE0E6] py-1 mx-4 text-[#369E95] font-medium"><a href="">{text}</a></button>
        </div>
  )
}

export default Featurse