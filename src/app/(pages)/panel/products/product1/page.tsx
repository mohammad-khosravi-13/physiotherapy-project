import Crad from '@/app/components/dashbord/Crad';
import Navbar from '@/app/components/dashbord/Navbar'
import Tabelpro1 from '@/app/container/product/pruduct1/Tabelpro1';
import React from 'react'

function page() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
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
    </div>
  );
}

export default page