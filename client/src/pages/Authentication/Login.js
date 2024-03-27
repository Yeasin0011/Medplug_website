import React, {useState} from 'react';
import Layout from '../../components/Layout/Layout';
import axios from "axios";
import { toast } from "react-hot-toast";
import {useNavigate, useLocation} from 'react-router-dom';
import { useAuth } from '../../context/auth';
import { GoogleAuthProvider, signInWithPopup, getAuth} from 'firebase/auth';
import app from '../../firebase/FirebaseConfig';
 





const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [auth, setAuth] = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

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
        navigate(location.state || "/");
    }else{
        toast.error(res.data.message)
    }
    }catch(error){
        console.log(error)
        toast.error('something went wrong')
    }
}


// Google Authenticator

const  handleGoogle = async (e) => {
    const provider = await new GoogleAuthProvider(); 
    const auth = getAuth(app)
    return signInWithPopup(auth, provider)
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
            </div>                
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} className="form-control" id="exampleInputPassword1" required/>
            </div>
            <div className='mb-3'>
            <button type="submit" className="btn btn-primary">Login</button>
            </div>
            <button type="submit" className="btn btn-primary" onClick={() => {navigate('/forgot-password')}}>Forgot Password</button>
            <div/>
            <div className='pt-34 w-full flex'>
                <button onClick={handleGoogle} className='btn btn-success'>
                    Login with Google 
                </button>
            </div>
            </div>
        </form>
    </div>
</Layout>
  )
}

export default Login