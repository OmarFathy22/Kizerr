import axios from "axios"

 const NewRequest = axios.create({
  baseURL:'https://kizerr-backend.onrender.com',
  withCredentials: true
})

export default NewRequest
