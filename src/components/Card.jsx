import React from 'react'

const Card = () => {
  return (
    <div>
      <div className="rounded-[10px] w-48 h-48  flex-1 flex flex-col justify-center 
            shadow-md bg-[#8080803F]">
        <div className="ml-3.5 mt-3.5 text-3xl text-[#9C9C9C] font-bold">
          Mails
        </div>
        <div className="Count flex-1 flex items-center justify-center text-5xl font-bold text-white">18</div>
      </div>
    </div>
  )
}

export default Card

