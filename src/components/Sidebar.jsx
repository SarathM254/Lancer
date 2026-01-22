import React from 'react'
import logo from '../assets/Leo.png'

const Sidebar = (props) => {

    let activeClient = props.activeClient;
    let setActiveClient = props.setActiveClient;

    let clients = props.clients;
    let contentRef = props.ref;

    const handleclick = (name) => {
        setActiveClient(name);
        contentRef.current.scrollTo({ top: 0, behavior: 'smooth' });

    }

    return (
        <div>
            <div className="sidebar text-[rgb(251,251,254)] h-full w-59 flex flex-col">
                <div onClick={() => handleclick(null)} className="flex h-24 bg-[rgba(128,128,128,0.25)] items-center justify-center text-2xl font-bold z-10 shadow-[0_10px_10px_-5px_rgba(0,0,0,0.15)] text-[rgb(125,60,239)] hover:cursor-pointer">
                    Lancer
                </div>
                <div className='profiles flex-1 pt-6 pb-4 bg-[rgba(128,128,128,0.25)] overflow-auto no-scrollbar'>
                    {clients.map((client, index) => (
                        <div key={index} id={index} className={`relative ${activeClient === client.name ? "pr-1" : ''}`} onClick={() => handleclick(client.name)}>
                            {/*selected effect*/}
                            {activeClient === client.name && <div className='bg-white h-full w-0.5 absolute left-0 border rounded-r-xl'></div>}


                            <div className={`flex items-center justify-center ${activeClient === client.name ? 'bg-[rgba(255,255,255,0.1)] rounded-2xl' : ''} px-4 py-3 space-x-4 hover:bg-[rgba(255,255,255,0.1)] cursor-pointer`}>
                                <img src={client.profileUrl} className="h-10 w-10 rounded-full object-cover " alt="" />
                                <span className="flex-1 truncate ">{client.name}</span>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default Sidebar
