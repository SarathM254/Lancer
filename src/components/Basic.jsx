import React from 'react';

const Basic = (props) => {
    // Destructuring for cleaner access and fallback to prevent crashes if data is missing
    const person = props.current || {};
    const { name, links } = person;

    return (
        <div key={props.anim} className="w-88 animate-pulse [animation-iteration-count:1]">
            {/* Main Card Container */}
            <div className="bg-black text-white rounded-lg p-6 flex items-center justify-between ">

                {/* Left Side: Name */}
                <div className="text-4xl font-bold tracking-tight tracking-wide font-medium mb-2">
                    {name}
                </div>





                {/* Right Side: Divider and Icons */}
                <div className="flex items-center gap-5">

                    {/* Vertical Divider Line */}
                    <div className="h-18 w-[2px] bg-gray-600 rounded-full"></div>

                    {/* Icons Container (Stacked Vertically) */}
                    <div className="flex flex-col justify-center gap-3">

                        {/* Email Link */}
                        <a
                            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${links?.email}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[rgb(50,233,236)] hover:text-[rgb(175,155,246)] transition-colors duration-200"
                            title="Send Email"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                            </svg>
                        </a>


                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Basic