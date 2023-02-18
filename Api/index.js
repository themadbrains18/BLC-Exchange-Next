import axios from "axios";

const baseurl = 'http://localhost:5000/api';

const API = axios.create(
  {
    baseURL: baseurl,
    headers: { 'Content-type': 'application/json' }
  })

export const loginRequestApi = (formData) => API.post('/users/login', formData)
export const registerRequest = (formData) => API.post('/users/register', formData)

export const sendOtp = (formData) => API.post('/otp', formData)

export const otpMatchRequestApi =(formData) => API.post('/otp/match', formData);