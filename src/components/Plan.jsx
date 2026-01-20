import React from 'react'

const Plan = (props) => {
    let person= props.current;
    return (
        <div>
            <div className="flex flex-col border-2 rounded-[5px] p-2 mb-2.5 min-h-72">
                <div className="font-bold text-3xl">Plan of Action</div>
                <div className="pl-1 pt-3">
                    {person.plan}
                </div>
            </div>
        </div>
    )
}

export default Plan
