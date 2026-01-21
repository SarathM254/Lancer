import React from 'react'
import Basic from './Basic.jsx'
import Details from './Details.jsx'
import Plan from './Plan.jsx'
import Flow from './Flow.jsx'
import Messages from './Messages.jsx'

const Profile = (props) => {
    let clients=props.clients;
    let activeClient=props.activeClient;
    let current;
    clients.forEach(elm => {
        if(elm.name==activeClient){
            current=elm;
        }
    });
    return (
        <div>
            <div className="Profile-content flex-1 flex flex-col space-x-32 md:flex-row">
                <div className="flex-[4] basis-0 flex flex-col gap-4">

                    <Basic current={current}/>

                    <Details current={current}/>
                        
                    <Plan current={current}/>

                </div>
                <Flow/>
            </div>
            <Messages></Messages>
        </div>
    )
}

export default Profile
