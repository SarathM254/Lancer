import React from 'react'
import logo from '../assets/Leo.png'
import { useState } from 'react';
import Panel from '../assets/Panel';

const Sidebar = (props) => {

    const [isKicked, setkick] = useState(true);

    let activeClient = props.activeClient;
    let setActiveClient = props.setActiveClient;

    let clients = props.clients;
    let contentRef = props.ref;

    let anim = props.anim;
    let setanim = props.setanim;

    const handleclick = (name) => {
        setActiveClient(name);
        contentRef.current.scrollTo({ top: 0, behavior: 'smooth' });
        setanim(anim + 1);
    }

    const handlekick = (current) => {
        setkick(!current);
    }

    return ( 
        <div>
            <div className="sidebar text-[rgb(251,251,254)] h-full w-59 flex flex-col z-50 transition-all duration-300 ease-in-out bg-black fixed md:relative"
                style={{width: `${isKicked ? '80px': '236px'}` }}>
                <div className="flex h-24 bg-[rgba(128,128,128,0.25)] items-center justify-baseline space-x-4 px-4 shadow-[0_10px_10px_-5px_rgba(0,0,0,0.15)] hover:cursor-pointer">
                    <div onClick={() => handlekick(isKicked)} className='transition-colors duration-100 hover:bg-[rgba(114,114,114,0.33)] p-2.5 rounded-full'>
                        <Panel></Panel>
                    </div>
                    {!isKicked && <div onClick={() => handleclick(null)} className='text-2xl font-bold text-[rgba(50,233,236)] flex-1'>Lancer</div>}
                </div>
                <div className='profiles flex-1 pt-6 pb-4 bg-[rgba(128,128,128,0.25)] overflow-auto no-scrollbar'>
                    {props.isLoading ? (
                        [...Array(6)].map((_, index) => (
                            <div key={index} className="flex items-center px-4 py-3 space-x-4 animate-pulse">
                                <div className="h-10 w-10 bg-gray-600 rounded-full shrink-0"></div>
                                {!isKicked && <div className="flex-1 h-4 bg-gray-600 rounded"></div>}
                            </div>
                        ))
                    ) : (
                        clients.map((client, index) => (
                            <div key={index} id={index} className={`relative ${activeClient === client.name ? "pr-1" : ''}`} onClick={() => handleclick(client.name)}>
                                {/*selected effect*/}
                                {activeClient === client.name && <div className='bg-[rgb(50,233,236)] h-full w-0.5 absolute left-0 rounded-r-xl'></div>}
                                <div className={`flex items-center justify-baseline ${activeClient === client.name ? 'bg-[rgba(255,255,255,0.1)] rounded-2xl' : ''} px-4 py-3 space-x-4 hover:bg-[rgba(255,255,255,0.1)] cursor-pointer`}>
                                    <img src={client.links.profileUrl} className="h-10 w-10 rounded-full object-cover " alt="" />
                                    {!isKicked && <span style={{ opacity: `${isKicked ? '0' : '1'}` }} className="flex-1 truncate ">{client.name}</span>}
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    )
}

export default Sidebar
