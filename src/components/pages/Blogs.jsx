import React, { useEffect, useState } from 'react'
import bgImage from '../../assets/img/banner/b19.jpg'
import SingleBlog from '../home/SingleBlog'
import Banner from '../home/Banner'

function Blogs() {
    const [blogsData, setBlogsData] = useState([])

    useEffect(()=>{
        fetch('BlogsApi.json')
        .then(res => res.json())
        .then(data => setBlogsData(data))

    },[])
  return (
    <>
    <Banner bgImage={bgImage} />
   

    {/* <!-- all blogs section  --> */}
        <section class="mb-20">
            <div class="w-[90%] mx-auto">
                <div class="flex flex-col gap-10">
                    {
                        blogsData.map(blog=> <SingleBlog key={blog.id} blog={blog} />)
                    }
                </div>
            </div>
        </section>        
            
    
    </>
  )
}

export default Blogs;