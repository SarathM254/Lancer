import React from 'react'
import logo from '../assets/Leo.png'

const Messages = (props) => {
    return (
        <div>
            {props.profile && <div className='text-2xl font-bold text-white mt-6'>
                Mails
            </div>}
            <div className='my-6'>
                <ul className='text-white bg-[rgba(128,128,128,0.25)] p-5 rounded-2xl space-y-3 mt-5'>
                    <li className="flex items-center justify-between p-4 text-white rounded-lg">
                        {/* Left Section: Avatar + Content */}
                        <div className="flex items-center gap-4 flex-1">
                            <img src={logo} className="w-12 h-12 rounded-full" alt="profile" />

                            {/* The Container that "shifts" */}
                            <div className="flex flex-col md:flex-row md:items-center md:gap-8">
                                <span className="font-bold text-lg">Cody Fisher</span>
                                <span className="text-gray-400 text-sm md:text-base">
                                    How can I return this?
                                </span>
                            </div>
                        </div>

                        {/* Right Section: Time + Icon */}
                        <div className="flex items-center gap-4">
                            <span className="text-sm text-gray-400">11:04</span>
                            <button className="p-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-2">
                                    <path fillRule="evenodd" d="M15.75 2.25H21a.75.75 0 0 1 .75.75v5.25a.75.75 0 0 1-1.5 0V4.81L8.03 17.03a.75.75 0 0 1-1.06-1.06L19.19 3.75h-3.44a.75.75 0 0 1 0-1.5Zm-10.5 4.5a1.5 1.5 0 0 0-1.5 1.5v10.5a1.5 1.5 0 0 0 1.5 1.5h10.5a1.5 1.5 0 0 0 1.5-1.5V10.5a.75.75 0 0 1 1.5 0v8.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V8.25a3 3 0 0 1 3-3h8.25a.75.75 0 0 1 0 1.5H5.25Z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </div>
                    </li>
                    <li className="flex items-center justify-between p-4 text-white rounded-lg">
                        {/* Left Section: Avatar + Content */}
                        <div className="flex items-center gap-4 flex-1">
                            <img src={logo} className="w-12 h-12 rounded-full" alt="profile" />

                            {/* The Container that "shifts" */}
                            <div className="flex flex-col md:flex-row md:items-center md:gap-8">
                                <span className="font-bold text-lg">Cody Fisher</span>
                                <span className="text-gray-400 text-sm md:text-base">
                                    How can I return this?
                                </span>
                            </div>
                        </div>

                        {/* Right Section: Time + Icon */}
                        <div className="flex items-center gap-4">
                            <span className="text-sm text-gray-400">11:04</span>
                            <button className="p-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-2">
                                    <path fillRule="evenodd" d="M15.75 2.25H21a.75.75 0 0 1 .75.75v5.25a.75.75 0 0 1-1.5 0V4.81L8.03 17.03a.75.75 0 0 1-1.06-1.06L19.19 3.75h-3.44a.75.75 0 0 1 0-1.5Zm-10.5 4.5a1.5 1.5 0 0 0-1.5 1.5v10.5a1.5 1.5 0 0 0 1.5 1.5h10.5a1.5 1.5 0 0 0 1.5-1.5V10.5a.75.75 0 0 1 1.5 0v8.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V8.25a3 3 0 0 1 3-3h8.25a.75.75 0 0 1 0 1.5H5.25Z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </div>
                    </li>
                    <li className="flex items-center justify-between p-4 text-white rounded-lg">
                        {/* Left Section: Avatar + Content */}
                        <div className="flex items-center gap-4 flex-1">
                            <img src={logo} className="w-12 h-12 rounded-full" alt="profile" />

                            {/* The Container that "shifts" */}
                            <div className="flex flex-col md:flex-row md:items-center md:gap-8">
                                <span className="font-bold text-lg">Cody Fisher</span>
                                <span className="text-gray-400 text-sm md:text-base">
                                    How can I return this?
                                </span>
                            </div>
                        </div>

                        {/* Right Section: Time + Icon */}
                        <div className="flex items-center gap-4">
                            <span className="text-sm text-gray-400">11:04</span>
                            <button className="p-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-2">
                                    <path fillRule="evenodd" d="M15.75 2.25H21a.75.75 0 0 1 .75.75v5.25a.75.75 0 0 1-1.5 0V4.81L8.03 17.03a.75.75 0 0 1-1.06-1.06L19.19 3.75h-3.44a.75.75 0 0 1 0-1.5Zm-10.5 4.5a1.5 1.5 0 0 0-1.5 1.5v10.5a1.5 1.5 0 0 0 1.5 1.5h10.5a1.5 1.5 0 0 0 1.5-1.5V10.5a.75.75 0 0 1 1.5 0v8.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V8.25a3 3 0 0 1 3-3h8.25a.75.75 0 0 1 0 1.5H5.25Z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </div>
                    </li>

                </ul>
            </div>
        </div>
    )
}

export default Messages
