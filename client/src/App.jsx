import { Link } from 'react-router-dom';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavigationBar from './components/NavigationBar'
import Dashboard from './components/Dashboard';
import AddDashboard from './components/AddDashboard';
import  axios  from 'axios';
import EditDashboard from './components/EditDashboard';

axios.defaults.baseURL = import.meta.env.VITE_BASEURL;
axios.defaults.withCredentials = true;
function App() {

  const [showAddDashboard, setShowDashboard] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [programs,setPrograms] = useState({
    name : "",
    price:0,
    domain:"",
    program_type:"",
    registrations_status:"",
    description:"",
    placement_assurance: false,
    image_url:"",
    university_name:"",
    faculty_profile:"",
    learning_hours:0,
    certificate_diploma:"",
    eligibility_criteria:"",
  })

  const handleAddButtonClick = () => {
    setSelectedProgram(null);
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

        <NavigationBar  onAddButtonClick={handleAddButtonClick} onProgramClick={handleProgClick} selectedProgram={selectedProgram} setSelectedProgram={setSelectedProgram} setShowDashboard={setShowDashboard} />
        {showAddDashboard && <AddDashboard onDeleteButtonClick={handleDeleteButton} />}
        {selectedProgram && !showAddDashboard && <Dashboard selectedProgram={selectedProgram} />}
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
