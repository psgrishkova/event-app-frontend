import axios from "axios";

const axiosInstance = axios.create({
    baseURL : "http://localhost:8080/",
    headers: {
        'Content-Type': 'application/json'
    }
})

axiosInstance.interceptors.request.use(
    (config) => {
        const authToken = localStorage.getItem('token');

<<<<<<< HEAD
        if(authToken){
            config.headers.authorization = 'Bearer ' + authToken;
=======
        if(authToken!=null){
            config.headers.Authorization = 'Bearer ' + authToken;
>>>>>>> version_1
        }

        return config;
    }, 
    (error) => Promise.reject(error)
);
export default axiosInstance;