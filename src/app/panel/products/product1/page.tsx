import Crad from '@/components/dashbord/Crad';
import Navbar from '@/components/dashbord/Navbar'
import Tabelpro1 from '@/container/product/pruduct1/Tabelpro1';
import React from 'react'

function page() {
  return (
    <>
      <Navbar />
      <div className="w-[1248px] flex gap-9 h-[972px] m-auto">
        <div>
          <Crad/>
        </div>
        <div className=' w-full'>
         <div>
          <Tabelpro1/>
         </div>
        </div>
      </div>
    </>
  );
}

export default page