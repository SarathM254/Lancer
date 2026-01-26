import React from 'react'
import logo from '../assets/Leo.png'

const Sidebar = (props) => {

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

    return (
        <div>
            <div className="sidebar text-[rgb(251,251,254)] h-full w-59 flex flex-col">
                <div className="flex h-24 bg-[rgba(128,128,128,0.25)] items-center justify-center gap-10 z-10 shadow-[0_10px_10px_-5px_rgba(0,0,0,0.15)] hover:cursor-pointer">
                    <div onClick={() => handleclick(null)} className='text-2xl font-bold text-[rgba(50,233,236)]'>Lancer</div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 pt-1">
                        <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75H12a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                    </svg>
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
