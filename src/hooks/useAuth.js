import { useNavigate } from "react-router";
import { useApi } from "./useApi"
import { useState } from "react";


export const useAuth = () => {
    const api = useApi();
    const {loading,error} = api;
    const navigate = useNavigate();
    const [user,setUser] = useState(null);

    const register = async (userData)=>{
        try {
            const data = await api.post('/auth/register',userData);
            setUser(data);
            navigate('/');
            return data;

        } catch (err) {
           console.log(err);
        
    }
}

    const login = async (userData)=>{

        try{
            const data = await api.post('/auth/login', userData);
            setUser(data);
            navigate('/');
            return data;
        }
        catch (err){
            console.log(err);
        }
    }

    const logout = async()=>{
        try{
            await api.post('/auth/logout');
            setUser(null);
            navigate('/');
        }
        catch (err){
            console.log(err);
        }
    }

    const getMe = async ()=>{
        try {
            const data = await api.get('/auth/me');
            setUser(data);
            return data;
        } catch (error) {
                console.log(error);
        }
    }

    return {register,login,logout,getMe,loading,error,user};


}
