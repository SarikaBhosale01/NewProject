// import axios from 'axios';

// // Create axios instance with base URL
// const API = axios.create({
//   baseURL: 'http://localhost:5000/api', // Ensure this matches your backend port
//   headers: {
//     'Content-Type': 'application/json',
//   }
// });

// // Add error handling interceptor
// API.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error.response) {
//       console.error('Backend responded with:', error.response.status);
//       console.error('Response data:', error.response.data);
//     } else if (error.request) {
//       console.error('No response received:', error.request);
//     } else {
//       console.error('Request setup error:', error.message);
//     }
//     return Promise.reject(error);
//   }
// );

// // Project APIs
// export const createProject = (projectData) => API.post('/projects', projectData);
// export const getProjects = () => API.get('/projects');
// export const updateProject = (id, projectData) => API.put(`/projects/${id}`, projectData);
// export const deleteProject = (id) => API.delete(`/projects/${id}`);

// export default API;
import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api', // Verify backend port
  headers: {
    'Content-Type': 'application/json',
  }
});

// services/api.js
axios.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });
// Request interceptor
API.interceptors.request.use(config => {
  console.log('Sending request to:', config.url);
  return config;
});

// Response interceptor
API.interceptors.response.use(
  response => {
    console.log('Received response:', response);
    return response;
  },
  error => {
    console.error('API Error:', error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export const createProject = (projectData) => API.post('/projects', projectData);
export const getProjects = () => API.get('/projects');
export const updateProject = (id, projectData) => API.put(`/projects/${id}`, projectData);
export const deleteProject = (id) => API.delete(`/projects/${id}`);
// Add these API endpoints in your services/api.js
export const getProjectDetails = (id) => axios.get(`/api/projects/${id}`);
export const uploadProject = (data) => axios.post('/api/projects', data);