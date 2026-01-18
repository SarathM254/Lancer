import React from 'react'

import logo from '../assets/Leo.png'
const Header = () => {
  return (
    <header className=" bg-[rgba(128,128,128,0.15)] h-24 flex items-center justify-end pl-1.5
        overflow-hidden ">
      <div className='rounded-full h-16.5 w-16.5'>
        <img src={logo} className="h-full w-full rounded-full object-cover " alt="" />
      </div>
      <ul className='w-60 ml-6'>
        <li>Sarath_18</li>
        <li className='truncate text-[12px] text-[rgba(255,255,255,0.75)]'>motupallisarathchandra@gmail.com</li>
      </ul>
    </header>
  )
}

export default Header
