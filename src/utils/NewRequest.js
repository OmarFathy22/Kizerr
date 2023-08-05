import axios from "axios"

 const NewRequest = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true
})
export default NewRequest
