import React from 'react'

const Card = ({ isLoading }) => {
  if (isLoading) {
    return (
      <div>
        <div className="rounded-[10px] w-48 h-48 flex-1 flex flex-col justify-center shadow-md bg-[#8080803F] animate-pulse">
           <div className="ml-3.5 mt-3.5 h-8 bg-gray-600 rounded w-1/2"></div>
           <div className="flex-1 flex items-center justify-center">
               <div className="h-12 w-16 bg-gray-600 rounded"></div>
           </div>
        </div>
      </div>
    );
  }

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

