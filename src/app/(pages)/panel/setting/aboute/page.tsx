
import Abutepanel from '@/app/container/setting/abutee/Abutepanel';
import Crad from '@/components/dashbord/Crad';
import Navbar from '@/components/dashbord/Navbar'
import React from 'react'

function page() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className=" w-[1248px] flex  gap-9 h-[972px] m-auto  ">
        <div>
            <Crad/>
        </div>
        <div className=' max-[1248] '>
         <Abutepanel/>
        </div>
      </div>
    </>
  );
}

export default page