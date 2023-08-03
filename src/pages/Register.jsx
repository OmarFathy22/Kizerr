import React from "react";
import { useState } from "react";
import axios from "axios";
import NewRequest from "../utils/NewRequest";
import { useNavigate } from "react-router-dom";
import upload from "../utils/Upload";
const Register = () => {
  const [file , setFile] = useState(null)
  const { checked, setChecked } = useState(false);
  const [user , setUser] = useState({
    username:"",
    email:"",
    password:"",
    title : "",
    country:"",
    phone:"",
    description:"",
    isSeller:false
  })
  console.log(user)
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = await upload(file)
    const newUser = {...user,img:url}
    await NewRequest.post("/register" , newUser);
    navigate('/')
  };
  const handleChange = (e) => {
     setUser({...user,[e.target.name]:e.target.value})
  }
  const handleCheck = (e) => {
    setUser({...user,[e.target.name]:e.target.checked})
  }
  return (
    <div className="my-[100px]  max-w-[80%] mx-auto">
      <form
        autoComplete='off'
        onSubmit={handleSubmit}
        action="POST"
        className="flex flex-wrap justify-between gap-[100px] register_form "
      >
        <div className="flex flex-col gap-3 justify-center divv flex-1 min-w-[300px] max-w-[400px] mx-auto ">
          <h1 className="font-bold text-[#666] text-[25px] mb-[20px]">
            Create a new account
          </h1>
          <label className="w-full text-[#888] text-[15px]" >
            Username
          </label>
          < input required onChange = {handleChange}
            className="w-full rounded-sm p-3 border border-[#777] outline-[--primaryColor] "
            type="text"
            name="username"
            id="username"
          />
          <label className="w-full text-[#888] text-[15px]" >
            Email
          </label>
          < input required onChange = {handleChange}
            className="w-full rounded-sm p-3 border border-[#777] outline-[--primaryColor]"
            type="email"
            name="email"
            id="email"
          />
          <label className="w-full text-[#888] text-[15px]" >
            Password
          </label>
          < input required onChange = {handleChange}
            className="w-full rounded-sm p-3 border border-[#777] outline-[--primaryColor]"
            type="password"
            name="password"
            id="password"
          />
          
          <label className="w-full text-[#888] text-[15px]" >
            Phone Number
          </label>
          < input required onChange = {handleChange}
            className="w-full rounded-sm p-3 border border-[#777] outline-[--primaryColor]"
            type="text"
            name="phone"
            id="phone"
          />
          <label className="w-full text-[#888] text-[15px]" >
            Title
          </label>
          < input required onChange = {handleChange}
            className="w-full rounded-sm p-3 border border-[#777] outline-[--primaryColor]"
            type="text"
            name="title"
            id="title"
          />
        <button
            className="min-900:block hidden clickable bg-[--primaryColor] text-white p-3 w-full max-w-[400px] mx-auto rounded-sm font-bold  "
            type="submit"
          >
            Create
          </button>
        </div>
        <div className="flex flex-col gap-3 flex-1 min-w-[300px] max-w-[400px] mx-auto  !max-h-[700px]">
          <h1 className="font-bold text-[#666] text-[25px] mb-[20px]">
            I want to become a seller
          </h1>
        <div className="flex mb-5">
            <label className="w-full text-[#888] text-[15px]" >
              Activate the seller account
            </label>
            <label className="relative inline-flex items-center cursor-pointer">
              < input  
                type="checkbox"
                name="isSeller"
                value=""
                className="sr-only peer outline-none "
                checked={checked}
                onChange={ handleCheck}
              />
              <div className="w-11 h-6 bg-gray-200 rounded-full peer    dark:bg-gray-200 peer-checked:after:translate-x-full peer-checked:after:mt-[1px] after:mt-[1px] peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[--primaryColor]"></div>
            </label>
        </div>
        <label className="w-full text-[#888] text-[15px]" >
            Country
          </label>
          < input required onChange = {handleChange}
            className="w-full rounded-sm p-3 border border-[#777] outline-[--primaryColor]"
            type="text"
            name="country"
            id="Country"
          />
          <label className="w-full text-[#888] text-[15px]" >
            Profile Picture
          </label>
          < input required 
            className="w-full rounded-sm p-3 border border-[#777] outline-[--primaryColor]"
            type="file"
            name="profilePicture"
            id="file"
            onChange = {(e) => setFile(e.target.files[0])}
          />
          
          <label className="w-full text-[#888] text-[15px]" >
            Description
          </label>
          <textarea
            className="w-full rounded-sm p-3 border border-[#777] outline-[--primaryColor] resize-none flex-grow"
            type="text"
            name="description"
            id="description"
          />
        <button
            className="hidden max-900:block clickable bg-[--primaryColor] text-white p-3 w-full max-w-[400px] mx-auto rounded-sm font-bold  "
            type="submit"
          >
            Create
          </button>
        </div>
      </form>


    </div>
  );
};

export default Register;
