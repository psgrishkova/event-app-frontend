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

        if(authToken!=null){
            config.headers.authorization = 'Bearer ' + authToken;
        }

        return config;
    }, 
    (error) => Promise.reject(error)
);
export default axiosInstance;