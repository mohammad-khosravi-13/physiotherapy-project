import Filterpms from '@/app/container/panel-pms/Filterpms';
import Tabelpms from '@/app/container/panel-pms/Tabelpms';
import Filtercontiner from '@/app/container/todaypanel/Filtercontiner';
import Crad from '@/components/dashbord/Crad';
import Navbar from '@/components/dashbord/Navbar'
import React from 'react'

function page() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
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
    </div>
  );
}

export default page