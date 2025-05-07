import axios from "axios";
const API = axios.create({
    baseURL:'http://localhost:5000/api',
    withCredentials:true
});

// ======== handle token refresh =======//

API.interceptors.response.use(
    response => response,
    async error =>{
        const originalRequest = error.config;
        if (error.response.status === 401 && !originalRequest._retry) {
           originalRequest._retry =true; 

        try{
            await axios.post('http://localhost:5000/api/auth/refresh', {},{
                withCredentials: true
            });
            return API(originalRequest)
        }
        catch(refreshError){
            window.location.href ='/login'
            return Promise.reject(refreshError)
        }
        }
        return Promise.reject(error)
    }
)

export default API;