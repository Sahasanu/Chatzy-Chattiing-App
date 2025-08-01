import axios from 'axios';

const isLocalhost = window.location.hostname === 'localhost';

export const axiosInstance = axios.create({
  baseURL: isLocalhost 
    ? 'http://localhost:5000' 
    : 'https://chat-backend-w071.onrender.com',
  withCredentials: true
});
