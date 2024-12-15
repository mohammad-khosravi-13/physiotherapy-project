import Buttonpanel from '@/container/Panel-Dashboard.securite/Buttonpanel'
import Checkbox from '@/container/Panel-Dashboard.yadavari/Checkbox'
import Crod from '@/container/Panel-Dashboard/Crod'
import HeaderPanel from '@/container/Panel-Dashboard/HeaderPanel'
import React from 'react'

export default function PanelDashboard() {
  return (

    <>
    
    <HeaderPanel/>
      <div className=" w-full  gap-7 mt-20">
        <div className="flex   w-full  gap-7 ">
          <Crod/>
    <Checkbox/>
        
<div className='relative '>
          <div className=' absolute right-[685px] '>
            <Buttonpanel/>
          </div>

</div>
        </div>
      </div>
    </>
  )}
