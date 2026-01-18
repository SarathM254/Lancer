import React from 'react'
import Stage from './Stage.jsx'
import { progressData } from '../assets/Progress.js'

const Flow = () => {
    return (
        <div class="flex-[3] basis-0 flex flex-col justify-center items-center gap-4 pt-9 pb-9 relative">
            
            {progressData.map((item,index) => (
                <Stage
                    key={index} 
                    Heading={item.stage}
                    Description={item.description}
                />
            ))}
            <div class="absolute flow-light left-4 top-24 bottom-24 w-2"></div>

        </div>
    )
}

export default Flow
