import Crad from '@/app/components/dashbord/Crad'
import Navbar from '@/app/components/dashbord/Navbar'
import Addadmin from '@/app/container/admin/Addadmin';
import Tabeladmin from '@/app/container/admin/Tabeladmin';
import React from 'react'

function page() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className=" w-[1248px] flex gap-9 h-[972px] m-auto ">
        <div>
          <Crad />
        </div>
        <div className='w-full'>
          <div >
            <Addadmin/>
          </div>
          <Tabeladmin/>
        </div>
      </div>
    </div>
  );
}

export default page