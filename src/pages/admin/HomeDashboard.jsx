import React from 'react'
import TopBox from '../../components/admin/TopBox'

const HomeDashboard = () => {
  return (
    <div className='home grid gap-5 grid-cols-4 auto-rows-[minmax(180px,_auto)]'>
      <div className='box1 p-5 rounded-xl border-solid border-[1px] border-slate-800 col-span-1 row-span-3'>
        <TopBox />
      </div>
      <div className='box2 p-5 rounded-xl border-solid border-[1px] border-slate-800'></div>
      <div className='box3 p-5 rounded-xl border-solid border-[1px] border-slate-800'></div>
      <div className='box4 p-5 rounded-xl border-solid border-[1px] border-slate-800 col-span-1 row-span-3'></div>
      <div className='box5 p-5 rounded-xl border-solid border-[1px] border-slate-800'></div>
      <div className='box6 p-5 rounded-xl border-solid border-[1px] border-slate-800'></div>
      <div className='box7 p-5 rounded-xl border-solid border-[1px] border-slate-800 col-span-2 row-span-2'></div>
      <div className='box8 p-5 rounded-xl border-solid border-[1px] border-slate-800'></div>
      <div className='box9 p-5 rounded-xl border-solid border-[1px] border-slate-800'></div>
    </div>
  )
}

export default HomeDashboard