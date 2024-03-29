import React, { useEffect, useState } from 'react';

import Layout from '../../components/Layout/Layout';

import UserMenu from '../../components/Layout/UserMenu';

import { useAuth } from '../../context/auth';
import toast from 'react-hot-toast';
import axios from "axios";

const Profile = () => {
  //context
  const [auth, setAuth] = useAuth()
  //state
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')


//get user data
  useEffect(() => {
    const {email, name, phone, address} = auth.user
    setName(name)
    setPhone(phone)
    setEmail(email)
    setAddress(address)
  },[auth?.user])

    // Form function 
    const handleSubmit = async (e)=>{
      e.preventDefault()
      try{ 
          const {data} = await axios.put("/api/v1/auth/profile", 
          {name, email, password, phone, address,
          });
          if (data?.error){
            toast.error(data?.error)
          }else{
            setAuth({...auth, user:data?.updatedUser})   
            let ls = localStorage.getItem("auth")
            ls = JSON.parse(ls)
            ls.user= data.updatedUser;
            localStorage.setItem("auth", JSON.stringify(ls));
            toast.success("Profile Updated Sucessfully");
          }
      } catch(error){
          console.log(error)
          toast.error('something went wrong')
      }
    }
  return (
    <Layout title={'Profile'}>
    <div className='container-fluid m-3 p-3'>
        <div className='row'>
            <div className='col-md-3'>
                <UserMenu/>
            </div>
            <div className='col -md-9'>
            <div className='register'>
            <h1>USER PROFILE</h1>
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
                    disabled
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
              
                <button type="submit" className="btn btn-primary">Update</button>
    
                </div>
            </form>
        </div>      
            </div>
        </div>
    </div>
  </Layout>
  )
}

export default Profile