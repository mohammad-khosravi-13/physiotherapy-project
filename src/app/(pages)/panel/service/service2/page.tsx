import Tableservice2 from '@/app/container/servicecontiner/service2/Tableservice2';
import Crad from '@/components/dashbord/Crad';
import Navbar from '@/components/dashbord/Navbar'
import React from 'react'

function page() {
  return (
    <>
      <Navbar />
      <div className=" w-[1248px] flex gap-9 h-[972px] m-auto  ">
        <div>
            <Crad/>
        </div>
        <div className='w-[80%]'>
            <Tableservice2/>
        </div>
      </div>
    </>
  );
}

export default page