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
                <div className="text-4xl font-bold tracking-tight tracking-wide font-medium ">
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


                        {/* Website Link */}
                        <a
                            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${links?.email}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[rgb(50,233,236)] hover:text-[rgb(175,155,246)] transition-colors duration-200"
                            title="Send Email"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                                <path d="M21.721 12.752a9.711 9.711 0 0 0-.945-5.003 12.754 12.754 0 0 1-4.339 2.708 18.991 18.991 0 0 1-.214 4.772 17.165 17.165 0 0 0 5.498-2.477ZM14.634 15.55a17.324 17.324 0 0 0 .332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 0 0 .332 4.647 17.385 17.385 0 0 0 5.268 0ZM9.772 17.119a18.963 18.963 0 0 0 4.456 0A17.182 17.182 0 0 1 12 21.724a17.18 17.18 0 0 1-2.228-4.605ZM7.777 15.23a18.87 18.87 0 0 1-.214-4.774 12.753 12.753 0 0 1-4.34-2.708 9.711 9.711 0 0 0-.944 5.004 17.165 17.165 0 0 0 5.498 2.477ZM21.356 14.752a9.765 9.765 0 0 1-7.478 6.817 18.64 18.64 0 0 0 1.988-4.718 18.627 18.627 0 0 0 5.49-2.098ZM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 0 0 1.988 4.718 9.765 9.765 0 0 1-7.478-6.816ZM13.878 2.43a9.755 9.755 0 0 1 6.116 3.986 11.267 11.267 0 0 1-3.746 2.504 18.63 18.63 0 0 0-2.37-6.49ZM12 2.276a17.152 17.152 0 0 1 2.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0 1 12 2.276ZM10.122 2.43a18.629 18.629 0 0 0-2.37 6.49 11.266 11.266 0 0 1-3.746-2.504 9.754 9.754 0 0 1 6.116-3.985Z" />
                            </svg>

                        </a>



                        {/* LinkedIn Link */}
                        <a
                            href={links?.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[rgb(50,233,236)] hover:text-[rgb(175,155,246)] transition-colors duration-200"
                            title="LinkedIn Profile"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3v9zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.75 1.75 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.22-.44-1.65-1.15-1.65-.9 0-1.55.67-1.55 1.75V19h-3v-9h3v1.2c.57-.76 1.4-1.2 2.5-1.2 2.65 0 3.2 1.8 3.2 4.15V19z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Basic