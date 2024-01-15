import { Link } from 'react-router-dom';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavigationBar from './components/NavigationBar'
import Dashboard from './components/Dashboard';
import  axios  from 'axios';
import EditDashboard from './components/EditDashboard';

axios.defaults.baseURL = import.meta.env.VITE_BASEURL;
axios.defaults.withCredentials = true;
function App() {
  const [count, setCount] = useState(0);

  const [showDashboard, setShowDashboard] = useState(false);

  const handleAddButtonClick = () => {
    setShowDashboard(true);
  };

  const handleDeleteButton = () => {
    setShowDashboard(false);
  }

  const handleProgClick = () => {
    setShowDashboard(false);
  }

  
  return (
    <>


      <div className='w-full flex'>
        {/* Navigation Bar */}

        <NavigationBar  onAddButtonClick={handleAddButtonClick} onProgramClick={handleProgClick}/>
        {showDashboard && <Dashboard onDeleteButtonClick={handleDeleteButton} />}
        {/*Main Component */}
        {/* <main className='flex grow'>
          <Dashboard/>
        </main> */}
      </div>


    {/* <a href="/signup">signup</a>
    <a href="/login">login</a>
    <a href="/">Home</a> */}
{/* 
    <Link to="/signup">signup</Link>a
    <Link to="/login">login</Link>
    <Link to="/">Home</Link> */}
    </>
  )
}

export default App
