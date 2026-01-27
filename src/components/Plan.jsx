import React from 'react'

const Plan = (props) => {
    let person= props.current;
    return (
        <div key={props.anim} className='bg-linear-90 from-[rgba(50,233,236,0.7)] to-[rgba(82,82,82,0.73)] p-[1.5px] mb-2.5 rounded-[10px] key={props.anim}'>
            <div className="flex flex-col rounded-[10px] p-5 min-h-88 bg-black">
                <div className="font-bold text-3xl text-[rgba(255,255,255,0.75)] font-medium">Plan of action</div>
                <div className="pt-3 text-[rgba(232,232,232,0.8)] text-[20px] leading-6 font-light">
                    {person.plan} Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat rem facere itaque quos possimus deleniti, totam ipsum amet iusto, dicta fugiat architecto dolor Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptate perferendis consequuntur eligendi sunt quo, non, reprehenderit quos consectetur sapiente illum quis corporis repellat molestias beatae exercitationem inventore ea rerum! light colo hau corrupti light colo hau, explic light colo hauabo iure tenetur labore. Inventore, suscipit.
                </div>
            </div>
        </div>
    )
}

export default Plan
