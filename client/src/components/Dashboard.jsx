import React, { useState, useEffect } from 'react';
import EditDashboard from './EditDashboard.jsx';

const Dashboard = ({ selectedProgram }) => {

  const [showEditDashboard, setShowEditDashboard] = useState(false)
  console.log('selectedProgram', selectedProgram);

  return (
    <>
    {!showEditDashboard && <div className="px-10 py-12 w-full max-w-screen-lg mx-auto bg-gray-100">
      <h1 className="text-3xl font-bold mb-2 text-black">Program Name</h1>
      <p className="text-sm text-black mb-4"><span className="text-red-500">*</span> Details of the Program</p>

      <h2 className="text-2xl font-bold mb-2 text-black">Confirm Program</h2>

      {/* Horizontal Alignment of Domain, Price, and Placement Assurance */}
      <div className="flex items-center mb-4 space-x-40">

        {/* Price Text-field */}
        <div className="flex flex-col">
          <label htmlFor="price" className="text-black mb-2 font-bold">
            <span className="text-red-500">*</span> Price
          </label>
          <div className="relative w-48">
            <span className="absolute inset-y-0 left-2 flex items-center text-gray-600">INR</span>
            <input
              disabled
              value={selectedProgram.price}
              type="Number"
              id="price"
              name="price"
              className="block w-full border border-gray-400 rounded-md py-1.5 pl-8 pr-2 focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Enter price"
            />
          </div>
        </div>

        {/* Domain Drop-down */}
        <div className="flex flex-col">
          <label htmlFor="domain" className="text-black mb-2 font-bold">
            Domain <br/> {selectedProgram.domain}
          </label>
        </div>

        {/* Placement Assurance Checkbox */}
        <div className="flex items-center">
          <input
            disabled
            value={selectedProgram.placement_assurance}
            type="checkbox"
            id="placement_assurance"
            name="placement_assurance"
            className="mr-2"
          />
          <label htmlFor="placement_assurance" className="text-black font-bold">Placement Assurance</label>
        </div>
      </div>

      {/* Information Line */}
      <div className="mb-4">
        <p className="text-xs text-gray-500">You are licensed to sell on this price.</p>
      </div>

      {/* Information Sub-heading */}
      <h2 className="text-lg font-bold mb-2 text-black">Information</h2>

      {/* Name, Program Type, Registration Open in a single horizontal line */}
      <div className="flex items-center mb-4 space-x-8">

        {/* Name Text-box */}
        <div className="flex flex-col">
          <label htmlFor="name" className="text-black mb-2 font-bold">
            <span className="text-red-500">*</span> Name
          </label>
          <input
            disabled
            value={selectedProgram.name}
            type="text"
            id="name"
            name="name"
            className="block border border-gray-400 rounded-md py-1.5 pl-2 focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter name"
          />
        </div>

        {/* Program Type Radio Buttons */}
        <div className="flex flex-col">
          <label className="text-black mb-2 font-bold">
            <span className="text-red-500">*</span>Program Type
          </label>
          <div className="flex items-center space-x-4">
            <label id="program_type" name="" htmlFor="program_type">
              {selectedProgram.program_type}
            </label>
          </div>
        </div>

        {/* Registration Open Radio Buttons */}
        <div className="flex flex-col">
          <label className="text-black mb-2 font-bold">
            <span className="text-red-500">*</span> Registration Open
          </label>
          <div className="flex items-center space-x-4">
            <label htmlFor="yes" name="registrations_status">
              {selectedProgram.registrations_status}
            </label>
          </div>
        </div>
      </div>

      {/* University Name, Certificate/Diploma, Faculty Profile in a single horizontal line */}
      <div className="flex items-center mb-4 space-x-8">

        {/* University Name Text-box */}
        <div className="flex flex-col">
          <label htmlFor="universityName" className="text-black mb-2 font-bold">
            <span className="text-red-500">*</span> University Name/Partner
          </label>
          <input
            disabled
            value={selectedProgram.university_name}
            type="text"
            id="universityName"
            name="universityName"
            className="block border border-gray-400 rounded-md py-1.5 pl-2 focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter university name/partner"
          />
        </div>

        {/* Certificate/Diploma Drop-down */}
        <div className="flex flex-col">
          <label htmlFor="certificateDiploma" className="text-black mb-2 font-bold">
            Certificate/Diploma <br/>  {selectedProgram.certificate_diploma}
          </label>
          
        </div>

        {/* Faculty Profile Text-box */}
        <div className="flex flex-col">
          <label htmlFor="facultyProfile" className="text-black mb-2 font-bold">
            <span className="text-red-500">*</span> Faculty Profile
          </label>
          <input
            disabled
            value={selectedProgram.faculty_profile}
            type="text"
            id="facultyProfile"
            name="facultyProfile"
            className="block border border-gray-400 rounded-md py-1.5 pl-2 focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter Linkedin Url"
          />
        </div>
      </div>

      {/* Learning Hours/Duration, Eligibility Criteria, Image Url in a single horizontal line */}
      <div className="flex items-center mb-4 space-x-8">

        {/* Learning Hours/Duration Text-box */}
        <div className="flex flex-col">
          <label htmlFor="learningHours" className="text-black mb-2 font-bold">
            <span className="text-red-500">*</span> Learning Hours/Duration
          </label>
          <input
            value={selectedProgram.learning_hours}
            disabled
            type="number"
            id="learningHours"
            name="learningHours"
            className="block border border-gray-400 rounded-md py-1.5 pl-2 focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter learning hours/duration"
          />
        </div>

        {/* Eligibility Criteria Text-box */}
        <div className="flex flex-col">
          <label htmlFor="eligibilityCriteria" className="text-black mb-2 font-bold">
            Eligibility Criteria
          </label>
          <input
            disabled
            value={selectedProgram.eligibility_criteria}
            type="text"
            id="eligibilityCriteria"
            name="eligibilityCriteria"
            className="block border border-gray-400 rounded-md py-1.5 pl-2 focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter eligibility criteria"
          />
        </div>

        {/* Image Url Text-box */}
        <div className="flex flex-col">
          <label htmlFor="imageUrl" className="text-black mb-2 font-bold">
            <span className="text-red-500">*</span> Image Url
          </label>
          <input
            disabled
            value={selectedProgram.image_url}
            type="text"
            id="imageUrl"
            name="imageUrl"
            className="block border border-gray-400 rounded-md py-1.5 pl-2 focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter image url"
          />
        </div>
      </div>

      {/* Description Text-box */}
      <div className="flex flex-col mb-4">
        <label htmlFor="description" className="text-black mb-2 font-bold">
          <span className="text-red-500">*</span> Description
        </label>
        <input
          disabled
          value={selectedProgram.description}
          type="text"
          id="description"
          name="description"
          className="block border border-gray-400 rounded-md py-1.5 pl-2 focus:outline-none focus:ring focus:border-blue-300"
          placeholder="Program Information / Header"
        />
      </div>
      <div className="flex justify-between mb-8">
        {/* Edit Button */}
        <button onClick={() => setShowEditDashboard(true)}  className="bg-red-500 text-white px-4 py-2 flex items-center space-x-2">
          <span>Edit</span> 
          {/* Add Delete icon here if you have one */}
        </button>
      </div>
    </div>}
    {showEditDashboard && <EditDashboard setShowEditDashboard={setShowEditDashboard} selectedProgram={selectedProgram} />}
    </>
  );
};

export default Dashboard;
