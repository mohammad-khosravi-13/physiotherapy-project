import Filterpms from '@/container/panel-pms/Filterpms';
import Tabelpms from '@/container/panel-pms/Tabelpms';
import Filtercontiner from '@/container/todaypanel/Filtercontiner';
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
        <div className='w-full'>
          <div>
            <Filtercontiner/>
          </div>
          <div>
            <Filterpms/>
          </div>
          <div>
            <Tabelpms/>
          </div>
        </div>
      </div>
    </>
  );
}

export default page