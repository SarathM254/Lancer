import React from 'react'

const Stage = (props) => {
    let percent = props.percent;
    let setpercent = props.setpercent;
    let maxstage = props.maxstage;
    let setmaxstage = props.setmaxstage;

    const handleFlow = (i) => {
        setmaxstage(i);
        if (i === 0) {
            setpercent(82);
        }
        if (i === 1) {
            setpercent(66);
        }
        if (i === 2) {
            setpercent(50);
        }
        if (i === 3) {
            setpercent(34);
        }
        if (i === 4) {
            setpercent(18);
        }
        if (i === 5) {
            setpercent(4);
        }
    }

    return (
        <div className="flex-1 w-full flex space-x-9 items-center z-30">
            <div className={`w-10 h-10 rounded-full ${(props.number <= maxstage) ? 'bg-[rgb(50,233,236)]' : 'bg-[#4bb4b5]'} flex justify-center items-center transition duration-300 hover:bg-[rgb(50,233,236)]`} onClick={() => handleFlow(props.number)}>
                {(props.number > maxstage) ?


                    <div className="w-6.5 h-6.5 rounded-full bg-[#585858] flex justify-center items-center" onClick={() => handleFlow(props.number)}></div> :

                    <svg onClick={() => handleFlow(props.number)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 ">
                        <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" stroke="currentColor"
                            strokeWidth="1" />
                    </svg>

                }

            </div>
            <div className={`text-xl font-semibold ${(props.number <= maxstage) ? 'text-[rgb(215,215,215)]' : 'text-[#4bb4b5]'}`}>
                {props.Description}
            </div>
        </div>
    )
}

export default Stage
