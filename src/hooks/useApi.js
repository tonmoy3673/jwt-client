import { useState } from "react"
import API from "../component/Services/api";



export const useApi =()=>{
    const [data,setData] = useState([]);
    const [error,setError] = useState(null);
    const [loading, setLoading] = useState(true);


    // =========== post function ======//
    const post = async(url,body)=>{
        setLoading(true)
        setError(null)
        const response = await API.post(url,body);
        
        try{
            if (!response) {
                setLoading(false)
                throw new Error("Data Not Loaded");
            }
            else{
                const data = response.data
                setLoading(false)
                return setData(data)
            }
        }

        catch (error){
            setLoading(false)
            setError(error)
        }
    }

    // =============== get function ========//

    const get = async(url)=>{
        setLoading(true)
        setError(null)
        const response = await API.get(url);
        try{
            if(!response){
                setLoading(false)
                throw new Error("Data Not Loaded!!")
            }
            else{
                const data = response.data;
                setLoading(false)
                return setData(data)
            }
        }
        catch (error){
            setLoading(false)
            setError(error)
        }
    }

    return {data,loading,error,get,post};


}