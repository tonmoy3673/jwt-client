import React, { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { Link } from 'react-router';

const Register =()=>{

    const [formData,setFormData] = useState({
        username:'',
        email:'',
        password:'',
        confirmPassword:''
    });

    const {register,loading,error} = useAuth();
    const {username,email,password,confirmPassword} = formData;

    const onChange =(e)=>{
        
        setFormData({...formData,[e.target.name] : e.target.value})
    };

    const onSubmit = async (e)=>{

        e.preventDefault();
        if (password !== confirmPassword){
            alert("Password don't match!");
            return;
        }
        try{
            await register({username,email,password});
            setFormData({
                username: '',
                email: '',
                password: '',
                confirmPassword: ''
              });
            console.log(username,email,password);
        }
        catch(err){
            console.error('Registration failed',err)
        }
        
    };


    return(
        <div className='py-5 mx-auto'>
            <div className=''>
            <h2 className='text-center text-xl py-3 font-semibold mb-4'>Register Here</h2>
            </div>
            {/* =========== Error ======== */}
            {
                error && (<div><p>{error}</p></div>)
            }
            {/* ========== Loading =========== */}
            {/* {
                loading && (<div><p>Loading .....</p></div>)
            } */}

            {/* ======= form container ======= */}
            <form onSubmit={onSubmit} className='flex items-center justify-center'>
            <div className='bg-gray-300 p-10 rounded-md'>
                {/* ======= user name = */}
                <div className='mb-2'>
                <label htmlFor='username'>Username : </label>
                <input className='bg-blue-200 px-2 ms-2 placeholder:text-xs py-[2px] border border-blue-500 rounded-md focus:border focus:border-blue-500' id='username' type='text' name='username' value={username} onChange={onChange} required/>
                </div>

                {/* ========== email ======= */}
                <div className='mb-2'>
                <label htmlFor='email'>Email : </label>
                <input className='bg-blue-200 px-2 ms-2 placeholder:text-xs py-[2px] border border-blue-500 rounded-md focus:border focus:border-blue-500' id='email' type='email' name='email' value={email} onChange={onChange} required/>
                </div>

                {/* =========== password ======== */}
                <div className='mb-2'>
                <label htmlFor='password'>Password : </label>
                <input className='bg-blue-200 px-2 ms-2 placeholder:text-xs py-[2px] border border-blue-500 rounded-md focus:border focus:border-blue-500' id='password' type='password' name='password' value={password} onChange={onChange} required/>
                </div>

                {/* ========== confirm password ====== */}
                <div className='mb-2'>
                <label htmlFor='confirmPassword'>Confirm Password : </label>
                <input className='bg-blue-200 px-2 ms-2 placeholder:text-xs py-[2px] border border-blue-500 rounded-md focus:border focus:border-blue-500' id='confirmPassword' type='password' name='confirmPassword' value={confirmPassword} onChange={onChange} required/>
                </div>

                {/* ======== submit button ======= */}
                <div className='py-5'>
                    <button type='submit' className='text-white font-semibold rounded-lg cursor-pointer px-4 py-2 bg-blue-600 border border-blue-600 
               hover:bg-amber-500 hover:border-amber-500 shadow-md 
               transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-amber-400 text-sm ' disabled={loading}>{loading ? 'Registering...':'Register'}</button>
                </div>
                <div className="mt-3">
        <span className=''>Already have an account?</span> <Link className='ms-2 text-blue-500 text-sm font-semibold rounded-lg cursor-pointer px-4 py-2 border border-blue-600 
               hover:bg-amber-500 hover:border-amber-500 shadow-md 
               transition-all duration-300 ease-in-out hover:text-white focus:outline-none focus:ring-2 focus:ring-amber-400' to="/login">Login</Link>
      </div>
                
            </div>
            
            </form>
            
        </div>
    )
};

export default Register;