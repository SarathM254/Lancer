import React from 'react'
import logo from '../assets/Leo.png'

const Sidebar = () => {
  return (
    <div>
      <div className="sidebar text-[rgb(251,251,254)] h-full w-59 flex flex-col">
            <div className="flex h-24 bg-[rgba(128,128,128,0.25)] items-center justify-center text-2xl font-bold">
                Hero-logo
            </div>
            <div className='profiles flex-1 pt-9 bg-[rgba(128,128,128,0.25)]'>
                <div className="relative pr-1">
                    <div className='bg-white h-full w-0.5 absolute left-0 border rounded-r-xl'></div>
                    <div className='flex h-[80] items-center justify-center rounded-2xl p-3.5 space-x-2.5 bg-[rgba(214,214,214,0.1)]'>
                        <img src={logo} className="h-7 w-7 rounded object-cover " alt="" />
                        <span className="flex-1 truncate ">Motupalli Sarath</span>
                    </div>
                </div>
                <div className="flex h-[80] items-center justify-center rounded-xl p-3.5 space-x-2.5">
                    <img src={logo} className="h-7 w-7 rounded object-cover " alt="" />
                    <span className="flex-1 truncate ">Motupalli Sarath</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sidebar
