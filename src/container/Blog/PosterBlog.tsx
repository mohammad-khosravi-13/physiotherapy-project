import React from 'react'
import Image from 'next/image'
import postreblog from "@/svg/axsafhe3.svg"

export default function PosterBlog() {
  return (

    <>
    

    <Image
              className="w-[1248px] h-[256px]  rounded-md mt-20 mr-24 "
              src={postreblog}
              alt=""
            />
  

    <div className='absolute -mt-[180px] left-[552px]  '>
      <h3 className='text-[28px]'>نوبت فیـــــزیوتـراپـــــــی </h3>
      <span className='text-[22px]'>خود را بدون دردسر رزرو کنید</span> <br />
      <button className='btn  w-[193px] h-[44px] bg-[#0974A2] text-white mt-2 mr-5 text-[20px]'>رزرو آنلاین نوبت</button>
    </div>

    </>
  )
}
