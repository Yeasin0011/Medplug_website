import React, {useState} from 'react';

import Layout from '../../components/Layout/Layout';

import axios from "axios";

import { toast } from "react-hot-toast";

import { useNavigate } from 'react-router-dom';



const ForgotPassword = () => {
    const [email, setEmail] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [answer, setAnswer] = useState('')
    const navigate = useNavigate();


// Form function 
const handleSubmit = async (e)=>{
    e.preventDefault()
    try{ 
        const res = await axios.post("/api/v1/auth/forgot-password", 
        {email, answer, newPassword});
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
    <Layout title='Forgot Password'>
        <div className='Forgot Password'>
            <h1>Reset Password</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                            <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                            <div id="emailHelp" className="form-text">Please use a valid email</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Recovery Keyword.</label>
                            <input type="text" value={answer} onChange={(e)=> setAnswer(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                            <div id="emailHelp" className="form-text">Insert a private key for resetting password if needed </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">New Password</label>
                            <input type="password" value={newPassword} onChange={(e)=> setNewPassword(e.target.value)} className="form-control" id="exampleInputPassword1" required/>
                            <div id="emailHelp" className="form-text">Use a strong password for privacy</div>
                        </div>               


                        <button type="submit" className="btn btn-primary">Reset Password</button>
                    </div>

                </form>
        </div>
    </Layout>
  );
};

export default ForgotPassword