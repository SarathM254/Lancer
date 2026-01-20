import React from 'react'
import Basic from './Basic.jsx'
import Details from './Details.jsx'
import Plan from './Plan.jsx'
import Flow from './Flow.jsx'
import Messages from './Messages.jsx'

const Profile = () => {
    return (
        <div>
            <div className="Profile-content flex-1 flex flex-col space-x-9 xl:flex-row">
                <div className="flex-[4] basis-0 flex flex-col gap-4 justify-center">

                    <Basic/>

                    <Details/>

                    <Plan/>

                </div>
                <Flow/>
            </div>
            <Messages></Messages>
        </div>
    )
}

export default Profile
