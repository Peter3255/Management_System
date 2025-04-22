import axios from 'axios';
// import { response } from 'express';

const baseURL = "http://localhost:4000/api";

// register request
const register = (newUser) => {
    // POST request on http://localhost:5173/register
    return axios.post(`${baseURL}/register`, newUser)
    .then(response => {
        if (response.data) {
            return Promise.resolve(response.data)
        }
    })
    .catch(error => {
        return Promise.reject(error.response.data)
    })
}

// login request
const login = (userCredential) => {
    return axios.post(`${baseURL}/login`, userCredential)
    .then(response => {
        if (response.data.token) {
            localStorage.setItem("x-access-token", response.data.token)
        }
        return Promise.resolve(response.data)
    })
    .catch(error => {
        return Promise.reject(error.response.data)
    })
}

export {
    register,
    login
};