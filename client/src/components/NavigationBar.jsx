import React, { useState, useEffect } from 'react';
import axios from 'axios';
import add from './../assets/add.png';
import EditDashboard from './EditDashboard';


export default function NavigationBar({ onAddButtonClick, setSelectedProgram, setShowDashboard }) {
  const [selectedCategoryPredefined, setSelectedCategoryPredefined] = useState('All');
  const [selectedCategoryDatabase, setSelectedCategoryDatabase] = useState('All');
  const [programNames, setProgramNames] = useState([]);



  useEffect(() => {
    const fetchProgramNames = async () => {
      try {
        const response = await axios.get('http://localhost:3000/programs');
        // Check if 'data' exists and is an array before setting state
        if (Array.isArray(response.data)) {
          const programs = response.data;

          // logic for filtering based on the selected category
          let filteredPrograms = programs;

          if (selectedCategoryPredefined !== 'All') {
            filteredPrograms = programs.filter(program => {
              // logic for predefined categories
              if (selectedCategoryPredefined === 'Data') {
                return program.domain === 'Data';
              } else if (selectedCategoryPredefined === 'Finance') {
                return program.domain === 'Finance';
              } else if (selectedCategoryPredefined === 'Future Tech') {
                return program.domain === 'Tech';
              }

              return true; // If 'All' is selected, display all programs
            });
          }

          setProgramNames(filteredPrograms);
        } else {
          console.error('API response does not contain an array:', response.data);
        }
      } catch (error) {
        console.error('Error fetching program names:', error);
      }
    };
  
    fetchProgramNames();
  }, [selectedCategoryPredefined]);

  const handleButtonClickPredefined = (program) => {
    setSelectedCategoryPredefined(program);
  };

  const handleButtonClickDatabase = (program) => {
    // TODO:
    setSelectedCategoryDatabase(program.name);
    setShowDashboard(false);
    setSelectedProgram(program); 
  };


  return (
    <>
      <div className='px-10 py-12 flex flex-col border border-r-1 w-1/5 h-screen'>
      <div className='logo-div flex space-x-3 items-center relative'>
        <span className='text-3xl font-bold'>Programs</span>
        <button onClick={onAddButtonClick} className='absolute top-0 right-0'>
          <img src={add} alt="Add" className='object-cover h-10 w-10'/>
        </button>
      </div>

      {/* Search bar */}
      <div className="max-w-md mx-auto mt-4">
        <div className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white border border-black overflow-hidden">
          <div className="grid place-items-center h-full w-12 text-gray-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          </div>

          <input
            className="peer h-full w-full outline-none text-sm text-gray-700 pr-2 border-none"
            type="text"
            id="search"
            placeholder="Search something.."
          />
        </div>
      </div>

      {/* Buttons for predefined categories */}
      <div className="flex mt-4 space-x-2">
        {['All', 'Data', 'Finance', 'Future Tech'].map(category => (
          <button
            key={category}
            className={`transition-colors duration-300 ease-in-out 
                        ${selectedCategoryPredefined === category ? 'bg-blue-300' : 'bg-white'} 
                        text-black border border-black rounded-full px-3 py-1.5 text-xs font-bold focus:outline-none`}
            onClick={() => handleButtonClickPredefined(category)}
          >
            {category}
          </button>
        ))}
      </div>

        {/* Buttons for program names from the database */}
        <div className="flex flex-col mt-4 space-y-2">
          {programNames.map(program => (
            <button 
              key={program.id}
              className={`transition-colors duration-300 ease-in-out 
                          ${selectedCategoryDatabase === program.name ? 'bg-blue-300' : 'bg-white'} 
                          text-black border border-black rounded-full px-3 py-1.5 text-xs font-bold focus:outline-none`}
              onClick={() => handleButtonClickDatabase(program)}
            >
              {program.name}
            </button>
          ))}
        </div>

        {/* Logout Button */}
        <button className='border-2 border-black px-4 py-2 bg-red-500 hover:bg-red-700 text-black m-4 rounded-lg' 
        // onClick={handleLogout}
        >Logout</button>
    </div>
    </>
  );
};
