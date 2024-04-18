import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../components/AdminCouponManagement.css';


const AdminCouponManagement = () => {
  const [coupons, setCoupons] = useState([]);

  useEffect(() => {
    fetchCoupons();
  }, []);

  const fetchCoupons = async () => {
    try {
      const response = await axios.get('/api/v1/coupon');
      setCoupons(response.data);
    } catch (error) {
      console.error('Error fetching coupons:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/v1/coupon/${id}`);
      // After deleting, fetch coupons again to update the list
      fetchCoupons();
      alert('Coupon deleted successfully');
    } catch (error) {
      console.error('Error deleting coupon:', error);
      alert('Failed to delete coupon');
    }
  };

  return (
    <div className="admin-coupon-management">
      <h1>Admin Coupon Management</h1>
      <table>
        <thead>
          <tr>
            <th>Code</th>
            <th>Discount</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {coupons.map((coupon) => (
            <tr key={coupon._id}>
              <td>{coupon.code}</td>
              <td>{coupon.discount}</td>
              <td>
                <button className="delete-btn" onClick={() => handleDelete(coupon._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminCouponManagement;
