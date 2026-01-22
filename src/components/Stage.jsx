import React from 'react'

const Stage = (props) => {
    let percent=props.percent;
    let setpercent=props.setpercent;

    const handleFlow= (i) => {
        if(i===0){
            setpercent(82);
        }
        if(i===1){
            setpercent(66);
        }
        if(i===2){
            setpercent(50);
        }
        if(i===3){
            setpercent(34);
        }
        if(i===4){
            setpercent(18);
        }
        if(i===5){
            setpercent(4);
        }
    }

    return (
        <div className="flex-1 w-full flex space-x-9 items-center">
            <div className="w-10 h-10 rounded-full flow-light flex justify-center items-center" onClick={()=> handleFlow(props.number)}>
                <div className="w-8 h-8 rounded-full bg-gray-600 z-10 flex justify-center items-center">
                    <div className="w-4 h-4 rounded-full flow-light z-10"></div>
                </div>
            </div>
            <div className="state-card flex flex-col leading-5">
                {props.Description}
            </div>
        </div>
    )
}

export default Stage
