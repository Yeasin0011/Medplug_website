import React, {useState} from 'react';

import Layout from '../../components/Layout/Layout';

import axios from "axios";

import { toast } from "react-hot-toast";

import {useNavigate} from 'react-router-dom';

import { useAuth } from '../../context/auth';


const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [auth, setAuth] = useAuth();
    const navigate = useNavigate();


// Form function 
const handleSubmit = async (e)=>{
    e.preventDefault()
    try{ 
        const res = await axios.post("/api/v1/auth/login", 
        {email, password, })
    if(res && res.data.success){
        toast.success(res.data && res.data.message);
        setAuth({
            ...auth,
            user: res.data.user,
            token: res.data.token,
        });
        localStorage.setItem('auth', JSON.stringify(res.data));
        navigate("/");
    }else{
        toast.error(res.data.message)
    }
    }catch(error){
        console.log(error)
        toast.error('something went wrong')
    }
}

  return (
    <Layout title={"Login"}>
    <div className='register'>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
            <div>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                <div id="emailHelp" className="form-text">Please use an valid email</div>
            </div>                
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} className="form-control" id="exampleInputPassword1" required/>
                <div id="emailHelp" className="form-text">Use a strong password for privacy</div>
            </div>
            <button type="submit" className="btn btn-primary">Login</button>

            </div>
        </form>
    </div>
</Layout>
  )
}

export default Login