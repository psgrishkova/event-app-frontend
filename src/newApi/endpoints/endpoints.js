import axios from "../axios"

const endpoints = {
    businessRegistration : (data) => axios.post("users/register/business", data),
    defaultRegistration : (data) => axios.post("users/register/default", data),
    login: (data) => axios.post("users/login", data),
    getProfile: () => axios.get("users/profile/business")
};

export default endpoints;