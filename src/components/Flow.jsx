import React from 'react'
import Stage from './Stage.jsx'
import { progressData } from '../assets/Progress.js'

const Flow = () => {
    return (
        <div className="flex-[3] basis-0 flex flex-col justify-center items-center gap-10 pt-9 pb-9 relative mr-8 ">
            
            {progressData.map((item,index) => (
                <Stage
                    key={index} 
                    Heading={item.stage}
                    Description={item.description}
                />
            ))}
            <div className="absolute flow-light left-4 top-10 bottom-10 w-2 rounded-2xl"></div>

        </div>
    )
}

export default Flow
