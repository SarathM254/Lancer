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
            <div className="Profile-content flex-1 flex flex-col xl:space-x-24 xl:flex-row">
                <div className="flex-[4] basis-0 flex flex-col gap-4">

                    <Basic anim={props.anim} current={current}/>

                    <Details anim={props.anim} current={current}/>
                        
                    <Plan anim={props.anim} current={current}/>

                </div>
                <Flow anim={props.anim} />
            </div>
            <Messages profile={true}></Messages>
        </div>
    )
}

export default Profile
