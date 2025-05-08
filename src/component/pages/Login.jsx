import React, { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { Link, useNavigate } from 'react-router';

const Login = () => {
    const [formData,setFormData] = useState(
        {
            email:'',
            password:''
        }
    );

    const {login,loading,error} = useAuth();
    const {email,password} = formData;
    const navigate = useNavigate()

    const onChange =(e)=>{
        setFormData({...formData,[e.target.name]: e.target.value})
    }

    const handleLogin=async(e)=>{
        e.preventDefault();
        try{
            await login({email,password});
            navigate('/');

        }

        catch (err){
            console.log('Login failed', err);
        }

    }


    return (
        <div>
                 {/* ========== error ========= */}
            {
                error && (<div><p>{error}</p></div>)
            }


           {/* ======= login title ====== */}
            <div className='py-5'>
                <h3 className='text-center text-xl font-semibold mb-2'>Login Here</h3>
            </div>

            {/* ========== Login Form ======= */}
            <form onSubmit={handleLogin} className='flex items-center justify-center'>
                <div className='bg-gray-300 px-10 py-12 rounded-md'>
                    <div className='mb-3'>
                        <label htmlFor='email'>Email : </label>
                        <input className='bg-blue-200 px-2 ms-2 placeholder:text-xs py-[2px] border border-blue-500 rounded-md focus:border focus:border-blue-500' id='email' type='email' name='email' value={email} onChange={onChange} required/>
                    </div>
                    <div>
                        <label htmlFor='password'>Password : </label>
                        <input  className='bg-blue-200 px-2 ms-2 placeholder:text-xs py-[2px] border border-blue-500 rounded-md focus:border focus:border-blue-500' id='password' type='password' name='password' value={password} onChange={onChange} required/>
                    </div>


                    {/* ======= submit button ===== */}
                    <div className='pt-5 text-center'>
                    <button  type='submit' className='text-white font-semibold rounded-lg cursor-pointer px-4 py-2 bg-blue-600 border border-blue-600 
               hover:bg-amber-500 hover:border-amber-500 shadow-md 
               transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-amber-400 text-sm ' disabled={loading}>{loading ? 'Login....':'Login'}</button>
                    </div>

                {/* ============ Registration Text ====== */}
                <div className="mt-8">
        <span className=''>Don't have an account?</span> <Link className='ms-2 text-blue-500 text-sm font-semibold rounded-lg cursor-pointer px-4 py-2 border border-blue-600 
               hover:bg-amber-500 hover:border-amber-500 shadow-md 
               transition-all duration-300 ease-in-out hover:text-white focus:outline-none focus:ring-2 focus:ring-amber-400' to="/register">Register</Link>
      </div>
            
                </div>
            </form>
        </div>
    );
};

export default Login;