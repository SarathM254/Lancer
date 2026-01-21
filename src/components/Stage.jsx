import React from 'react'

const Stage = (props) => {
    return (
        <div className="flex-1 w-full flex space-x-9 items-center">
            <div className="w-10 h-10 rounded-full flow-light flex justify-center items-center">
                <div className="w-8 h-8 rounded-full bg-gray-600 z-10 flex justify-center items-center">
                    <div className="w-4 h-4 rounded-full flow-light z-10"></div>
                </div>
            </div>
            <div className="state-card flex flex-col">
                
                <div className='leading-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, numquam.</div>
            </div>
        </div>
    )
}

export default Stage
