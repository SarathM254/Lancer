import './App.css'
import Sidebar from './components/Sidebar.jsx'
import Header from './components/Header.jsx'
import Cards from './components/Cards.jsx'
import Messages from './components/Messages.jsx'
import Profile from './components/Profile.jsx'
import { useState, useEffect, useRef } from 'react'




function App() {

  const [clients, setClients] = useState([]);
  const [activeClient, setActiveClient] = useState(null);
  const contentRef = useRef(null);



  useEffect(() => {
    fetch("http://localhost:3000/")
      .then(res => res.json())
      .then(data => setClients(data));
  }, []);

  return (
    <>
      <div className="View flex h-screen overflow-hidden bg-black">
        <Sidebar ref={contentRef} clients={clients} activeClient={activeClient} setActiveClient={setActiveClient} />
        <div className="rest flex-1 flex flex-col h-full">
          <Header></Header>
          <div className="content flex-1 flex flex-col p-10 overflow-auto no-scrollbar" ref={contentRef}>

            {activeClient === null ?
              <>
              <Cards />
              <div className='text-2xl font-bold text-white mt-10'>
                Recent Mails
              </div>
              <Messages />
              </> : <Profile clients={clients} activeClient={activeClient}></Profile>
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default App
