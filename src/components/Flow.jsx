import React from 'react'
import Stage from './Stage.jsx'
import { progressData } from '../assets/Progress.js'
import { useState } from 'react'

const Flow = () => {
    const [percent, setpercent] = useState(82)
    return (
        <div className="flex-[3] basis-0 flex flex-col justify-center items-center gap-10 pt-9 pb-9 relative mr-8 ">

            {progressData.map((item, index) => (
                <Stage
                    key={index}
                    number={index}
                    Heading={item.stage}
                    Description={item.description}
                    percent={percent}
                    setpercent={setpercent}
                />
            ))}
            <div
                className={`absolute flow-light left-4 top-[4%] w-2 z-5 rounded-2xl transition-all duration-1000 ease-in-out bottom-[${percent}%]`}
                
            ></div> 
            {/* this might actually go wrong */}

            <div className="absolute bg-[#585858] left-4 top-[4%] bottom-[4%] w-2 z-0 rounded-2xl"></div>

        </div>
    )
}

export default Flow
