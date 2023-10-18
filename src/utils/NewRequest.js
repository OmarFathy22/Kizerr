import axios from "axios"

 const NewRequest = axios.create({
  baseURL: 'https://kizerrpi.onrender.com',
  //baseURL:'https://kizerr.up.railway.app',
  // baseURL: 'http://localhost:3000', 
  withCredentials: true
})

export default NewRequest
