import axios from "axios"

 const NewRequest = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: true
})
export default NewRequest
