import axios from 'axios'; 

const API_URL = 'https://frontend-take-home-service.fetch.com';

const apiClient = axios.create({
    baseURL: API_URL,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
      },
})

export default apiClient;