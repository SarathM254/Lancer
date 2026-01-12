import './App.css'
import Sidebar from './components/Sidebar.jsx'
import Header from './components/Header.jsx'
import Cards from './components/Cards.jsx'
import Messages from './components/Messages.jsx'

function App() {

  return (
    <>
      <div className="View flex h-screen overflow-hidden bg-black">
        <Sidebar />
        <div class="rest flex-1 flex flex-col h-full">
          <Header></Header>
          <div className="content flex-1 flex flex-col p-10 overflow-auto">
            <Cards />
            <div className='text-2xl font-bold text-white mt-10'>
              Recent Mails
            </div>
            <Messages />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
