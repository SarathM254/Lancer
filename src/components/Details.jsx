import React from 'react'

const Details = (props) => {
    let person= props.current;
    return (
        <div key={props.anim} className='bg-linear-90 from-[rgba(50,233,236,0.7)] to-[rgba(82,82,82,0.73)] p-[1.5px] mb-2.5 rounded-[10px] key={props.anim} animate-pulse [animation-iteration-count:1]'>
            <div className="flex flex-col rounded-[10px] p-5 min-h-88 bg-black">
                <div className="font-bold text-3xl text-[rgba(255,255,255,0.75)] font-medium">Project details</div>
                <div className="pt-3 text-[rgba(232,232,232,0.8)] text-[20px] leading-6 font-light">
                    {person.details} Lorem, ipsum dolor sit amet consectetur Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea doloremque optio fuga quas molestias voluptatum similique eligendi ipsam dolor, reprehenderit culpa, consequuntur eaque commodi? Praesentium quidem totam dolorem quos cupiditate magni hic architecto impedit debitis tempora! Modi nihil facere exercitationem. adipisicing elit. Reiciendis, eum voluptas quos doloremque veritatis aperiam minus blanditiis possimus praesentium eligendi repellat. Quos ratione sequi dicta quaerat inventore architecto eius recusandae!   
                </div>
            </div>
        </div>
    )
}

export default Details
