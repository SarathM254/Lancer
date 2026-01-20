import './App.css'
import Sidebar from './components/Sidebar.jsx'
import Header from './components/Header.jsx'
import Cards from './components/Cards.jsx'
import Messages from './components/Messages.jsx'
import Profile from './components/Profile.jsx'
import { useState, useEffect } from 'react'



function App() {
  const [clients, setClients] = useState([])
useEffect(() => {
    fetch("http://localhost:3000/")
      .then(res => res.json())
      .then(data => setClients(data));
  }, []);

  return (
    <>
      <div className="View flex h-screen overflow-hidden bg-black">
        <Sidebar clients={clients} />
        <div className="rest flex-1 flex flex-col h-full">
          <Header></Header>
          <div className="content flex-1 flex flex-col p-6 overflow-auto no-scrollbar">
            <Profile></Profile>            
          </div>
        </div>
      </div>
    </>
  )
}

export default App
