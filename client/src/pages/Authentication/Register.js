import React, {useState} from 'react';

import Layout from '../../components/Layout/Layout';

import axios from "axios";

import { toast } from "react-hot-toast";

import {useNavigate} from 'react-router-dom';

const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [answer, setAnswer] = useState('')
    const navigate = useNavigate()

// Form function 
const handleSubmit = async (e)=>{
    e.preventDefault()
    try{ 
        const res = await axios.post("/api/v1/auth/register", 
        {name, email, password, phone, address, answer})
    if(res && res.data.success){
        toast.success(res.data && res.data.message);
        navigate("/login");
    }else{
        toast.error(res.data.message)
    }
    }catch(error){
        console.log(error)
        toast.error('something went wrong')
    }
}



  return (
    <Layout title={"User Registration Page"}>
        <div className='register'>
            <h1>Registration</h1>
            <form onSubmit={handleSubmit}>
                <div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
                    <input type="text" value={name} onChange={(e)=> setName(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                    <div id="emailHelp" className="form-text">Your data is confidential and safe with us</div>
                    
                </div>
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
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Phone</label>
                    <input type="number" value={phone} onChange={(e)=> setPhone(e.target.value)}className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
                </div>  
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Address</label>
                    <input type="text" value={address} onChange={(e)=> setAddress(e.target.value)}className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Answer</label>
                    <input type="text" value={answer} onChange={(e)=> setAnswer(e.target.value)}className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
                    <div id="emailHelp" className="form-text">Insert a private key for resetting password if needed</div>
                </div>   
                
                <button type="submit" className="btn btn-primary">Submit</button>
    
                </div>
            </form>
        </div>
    </Layout>
  )
}

export default Register