import axios from "axios";

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL
});

// Attach token to every request
API.interceptors.request.use(
  (req) => {
    const token = localStorage.getItem("token");
    if (token) {
      req.headers.Authorization = `Bearer ${token}`;
    }
    return req;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default API;

