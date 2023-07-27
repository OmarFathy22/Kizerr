import axios from "axios"

 const NewRequest = axios.create({
  baseURL: 'https://kizerrpi.onrender.com',
  withCredentials: true
})
export default NewRequest
