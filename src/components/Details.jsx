import React from 'react'

const Details = (props) => {
    let person= props.current;
    return (
        <div>
            <div className="flex flex-col border-2 rounded-[5px] p-2 mb-2.5 min-h-72">
                <div className="font-bold text-3xl">Details</div>
                <div className="pl-1 pt-3">
                    {person.details}
                </div>
            </div>
        </div>
    )
}

export default Details
