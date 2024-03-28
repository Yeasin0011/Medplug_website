import React from 'react'

import Layout from '../../components/Layout/Layout'

import UserMenu from '../../components/Layout/UserMenu'

import { useAuth } from '../../context/auth'

const Dashboard = () => {
  const [auth] = useAuth()
  return (
    <Layout title ={'Dashboard'}> 
            <h1>Admin Analytics Dashboard</h1>
        <div className='container-fluid m-3 p-3'>
            <div className='row'>
                <div className='col-md-3'>
                    <UserMenu/>
                </div>
                <div className='col-md-9 p-3'>Credentials
                <div className='card w-70 p-3'>
                    <h3>Hello, {auth?.user?.name}!</h3>
                    <h7>Mail: {auth?.user?.email}</h7>
                    <h7>Phone: {auth?.user?.phone}</h7>
                </div>
                </div>
            </div>
        </div>   
    </Layout>
  )
}

export default Dashboard