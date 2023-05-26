import React from 'react'

function SingleBlog(props) {
    const {image,text,date,title} =props.blog
    console.log(props);
  return (
    <div class="flex gap-4 xl:flex-row lg:flex-row md:flex-row flex-col">
            <div class="h-80 overflow-hidden">
                <h1 class="font-bold text-3xl text-slate-300 " >{date}</h1>
                <figure><img class="" src={image} alt="" /></figure>
            </div>
            <div class=" flex flex-col justify-center  ">
                <h1 class="text-xl font-semibold  my-2">{title} </h1>
                <p class="text-slate-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt placeat hic cupiditate recusandae optio velit exercitationem? Beatae esse exercitationem dolorem?</p>
                <div class="mt-3 text-lg ">
                    <button class="pointer">continue Reading...</button>
                </div>
            </div>
        </div>
  )
}

export default SingleBlog