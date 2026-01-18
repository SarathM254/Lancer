import React from 'react'

const Stage = (props) => {
    return (
        <div class="flex-1 w-full flex space-x-3 items-center">
            <div class="w-10 h-10 rounded-full flow-light flex justify-center items-center">
                <div class="w-8 h-8 rounded-full bg-white z-10 flex justify-center items-center">
                    <div class="w-4 h-4 rounded-full flow-light z-10"></div>
                </div>
            </div>
            <div class="state-card flex flex-col">
                <div class="font-bold text-2xl">{props.Heading}</div>
                <div>{props.Description}</div>
            </div>
        </div>
    )
}

export default Stage
