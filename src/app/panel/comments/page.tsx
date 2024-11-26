import Crad from '@/components/dashbord/Crad'
import Navbar from '@/components/dashbord/Navbar'
import Filtercoment from '@/container/comment/Filtercoment';
import Tabelcomeent from '@/container/comment/Tabelcomeent';
import Filtercontiner from '@/container/todaypanel/Filtercontiner';
import React from 'react'

function page() {
  return (
    <>
      <Navbar />
      <div className=" w-[1248px] flex gap-9 h-[972px] m-auto ">
        <div>
          <Crad />
        </div>
        <div className='w-full'>
          <div>
            <Filtercontiner/>
          </div>
          <div>
            <Filtercoment/>
          </div>
          <div>
            <Tabelcomeent/>
          </div>
        </div>
      </div>
    </>
  );
}

export default page