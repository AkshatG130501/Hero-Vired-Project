import React , {useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import { backend_url } from '../variables.js';

const EditDashboard = ({selectedProgram, setShowEditDashboard}) => {

    const [programs,setPrograms] = useState({
      name : "",
      price:0,
      domain:"",
      program_type:"",
      registrations_status:"",
      description:"",
      placement_assurance:false,
      image_url:"",
      university_name:"",
      faculty_profile:"",
      learning_hours:0,
      certificate_diploma:"",
      eligibility_criteria:"",
    })

  const navigate = useNavigate()

  // const programid = selectedProgram.programid;

  const handleDelete = async()=>{
    try {
      const response = await axios.delete(`https://hero-vired-n8qo.onrender.com/programs/${selectedProgram.programid}`);
      alert('Program Deleted Successfully')
    } catch (error) {
      console.log(error);
    }
  }
  

  const handleEditChange = (newProgram) => {
    console.log(newProgram);
  }


  const handleChange = (e) => {
    const {name,value} = e.target;
    console.log(name,value);
    setPrograms((prev)=>({...prev,[e.target.name]:e.target.value}));
  };
  const handleChangeInCheckBox = (e) => {
    const { name, value } = e.target;
    let modifiedValue = value === "on" ? true : false;
    console.log(name, modifiedValue);
    setPrograms((prev) => ({ ...prev, [name]: modifiedValue }));
  };
  
 
  const handleClick = async e=>{
    e.preventDefault()
    try {
      await axios.post(`${backend_url}/programs`, programs)
      navigate("/")
    } catch (error) {
      console.log(error);
    }
  }


  // if(selectedProgram.program_type=='FT'){
  //   document.getElementById('ft').checked = true
  // }else{
  //   document.getElementById('pt').checked = false
  // }

  // if(selectedProgram.registrations_status=='open'){
  //   document.getElementById('yes').checked = true
  // }else{
  //   document.getElementById('no').checked = true;
  // }

  // if(selectedProgram.placement_assurance==true){
  //   document.getElementById('placement_assurance').checked=true;
  // }

  return (
    <div className="px-10 py-12 w-full max-w-screen-lg mx-auto bg-gray-100">
      <h1 className="text-3xl font-bold mb-2 text-black">Edit Program</h1>
      <p className="text-sm text-black mb-4"><span className="text-red-500">*</span> Edit Details of Program</p>

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
              onChange={handleChange}
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
            <span className="text-red-500">*</span> Domain
          </label>
          <select
            onChange={handleChange}
            value={selectedProgram.domain}
            id="domain"
            name="domain"
            className="block border border-gray-400 rounded-md py-1.5 pl-2 pr-6 focus:outline-none focus:ring focus:border-blue-300"
          >
            <option value="" disabled selected>Choose Domain</option>
            <option value="tech">Tech</option>
            <option value="data">Data</option>
            <option value="finance">Finance</option>
          </select>
        </div>

        {/* Placement Assurance Checkbox */}
        <div className="flex items-center">
          <input
            onChange={handleChangeInCheckBox}
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
            onChange={handleChange}
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
            <label htmlFor="ft">
              <input onChange={handleChange} type="radio" id="ft" name="programType" value="FT" className="mr-1" />
              FT
            </label>
            <label htmlFor="pt">
              <input onChange={handleChange} type="radio" id="pt" name="programType" value="PT" className="mr-1" />
              PT
            </label>
          </div>
        </div>

        {/* Registration Open Radio Buttons */}
        <div className="flex flex-col">
          <label className="text-black mb-2 font-bold">
            <span className="text-red-500">*</span> Registration Open
          </label>
          <div className="flex items-center space-x-4">
            <label htmlFor="yes">
              <input onChange={handleChange} type="radio" id="yes" name="registrationOpen" value="Yes" className="mr-1" />
              Yes
            </label>
            <label htmlFor="no">
              <input onChange={handleChange} type="radio" id="no" name="registrationOpen" value="No" className="mr-1" />
              No
            </label>
          </div>
        </div>
      </div>

      {/* University Name, Certificate/Diploma, Faculty Profile in a single horizontal line */}
      <div className="flex items-center mb-4 space-x-8">

        {/* University Name Text-box */}
        <div className="flex flex-col">
          <label htmlFor="university_name" className="text-black mb-2 font-bold">
            <span className="text-red-500">*</span> University Name/Partner
          </label>
          <input
            onChange={handleChange}
            value={selectedProgram.university_name}
            type="text"
            id="university_name"
            name="university_name"
            className="block border border-gray-400 rounded-md py-1.5 pl-2 focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter university name/partner"
          />
        </div>

        {/* Certificate/Diploma Drop-down */}
        <div className="flex flex-col">
          <label htmlFor="certificate_diploma" className="text-black mb-2 font-bold">
            <span className="text-red-500">*</span> Certificate or Diploma
          </label>
          <select
            onChange={handleChange}
            value={selectedProgram.certificate_diploma}
            id="certificate_diploma"
            name="certificate_diploma"
            className="block border border-gray-400 rounded-md py-1.5 pl-2 pr-6 focus:outline-none focus:ring focus:border-blue-300"
          >
            <option value="" disabled selected>Select</option>
            <option value="certificate">Certificate</option>
            <option value="diploma">Diploma</option>
          </select>
        </div>

        {/* Faculty Profile Text-box */}
        <div className="flex flex-col">
          <label htmlFor="facultyProfile" className="text-black mb-2 font-bold">
            <span className="text-red-500">*</span> Faculty Profile
          </label>
          <input
            onChange={handleChange}
            value={selectedProgram.faculty_profile}
            type="text"
            id="faculty_profile"
            name="faculty_profile"
            className="block border border-gray-400 rounded-md py-1.5 pl-2 focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter Linkedin Url"
          />
        </div>
      </div>

      {/* Learning Hours/Duration, Eligibility Criteria, Image Url in a single horizontal line */}
      <div className="flex items-center mb-4 space-x-8">

        {/* Learning Hours/Duration Text-box */}
        <div className="flex flex-col">
          <label htmlFor="learning_hours" className="text-black mb-2 font-bold">
            <span className="text-red-500">*</span> Learning Hours/Duration
          </label>
          <input
            onChange={handleChange}
            value={selectedProgram.learning_hours}
            type="number"
            id="learning_hours"
            name="learning_hours"
            className="block border border-gray-400 rounded-md py-1.5 pl-2 focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter learning hours/duration"
          />
        </div>

        {/* Eligibility Criteria Text-box */}
        <div className="flex flex-col">
          <label htmlFor="eligibility_criteria" className="text-black mb-2 font-bold">
            Eligibility Criteria
          </label>
          <input
            onChange={handleChange}
            value={selectedProgram.eligibility_criteria}
            type="text"
            id="eligibility_criteria"
            name="eligibility_criteria"
            className="block border border-gray-400 rounded-md py-1.5 pl-2 focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter eligibility criteria"
          />
        </div>

        {/* Image Url Text-box */}
        <div className="flex flex-col">
          <label htmlFor="image_url" className="text-black mb-2 font-bold">
            <span className="text-red-500">*</span> Image Url
          </label>
          <input
            onChange={handleChange}
            value={selectedProgram.image_url}
            type="text"
            id="image_url"
            name="image_url"
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
          onChange={handleChange}
          value={selectedProgram.description}
          type="text"
          id="description"
          name="description"
          className="block border border-gray-400 rounded-md py-1.5 pl-2 focus:outline-none focus:ring focus:border-blue-300"
          placeholder="Program Information / Header"
        />
      </div>

      {/* Delete, Update Program Buttons */}
      <div className="flex justify-between mb-8">
        {/* Delete Button */}
        <button onClick={handleDelete(selectedProgram)} className="bg-red-500 text-white px-4 py-2 flex items-center space-x-2">
          <span>Delete</span>
        </button>

        {/* Update Program Button */}
        <button onClick={handleClick} className="bg-blue-500 text-white px-4 py-2">Update Program</button>
      </div>
    </div>
  );
};

export default EditDashboard;
