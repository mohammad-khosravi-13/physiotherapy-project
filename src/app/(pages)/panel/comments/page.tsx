import Crad from '@/app/components/dashbord/Crad'
import Navbar from '@/app/components/dashbord/Navbar'
import Filtercoment from '@/app/container/comment/Filtercoment';
import Tabelcomeent from '@/app/container/comment/Tabelcomeent';
import Filtercontiner from '@/app/container/todaypanel/Filtercontiner';
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
    </div>
  );
}

export default page