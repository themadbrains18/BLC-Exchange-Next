import axios from "axios";

// const baseurl = 'http://localhost:5000/api-blc';
// const baseurl = 'http://demo.blcexchange.net/api-blc';

const API = axios.create(
  {
    baseURL: baseurl,
    headers: { 'Content-type': 'application/json' }
  })

export const loginRequestApi = (formData) => API.post('/users/login', formData)
export const registerRequest = (formData) => API.post('/users/create', formData)
export const checkUserRequest = (formData) => API.post('/users', formData);

export const sendOtp = (formData) => API.post('/otp', formData)

export const otpMatchRequestApi = (formData) => API.post('/otp/match', formData);