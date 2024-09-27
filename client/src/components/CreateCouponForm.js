import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './CreateCouponForm.css'; // Import CSS file for styling

const CreateCouponForm = () => {
  const [code, setCode] = useState('');
  const [discount, setDiscount] = useState('');
  const codeInputRef = useRef(null); // Reference to the code input field

  useEffect(() => {
    // Focus the code input field when the component mounts
    codeInputRef.current.focus();
  }, []); // Run this effect only once on component mount

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/v1/coupon/create', { code, discount });
      alert('Coupon created successfully');
    } catch (error) {
      console.error('Failed to create coupon:', error);
      alert('Failed to create coupon');
    }
  };

  return (
    <div className="create-coupon-form">
      <h1>Create Coupon</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="code">Code:</label>
          <input 
            id="code"
            type="text" 
            value={code} 
            onChange={(e) => setCode(e.target.value)} 
            ref={codeInputRef} // Attach the ref to the input field
          />
        </div>
        <div className="form-group">
          <label htmlFor="discount">Discount:</label>
          <input 
            id="discount"
            type="number" 
            value={discount} 
            onChange={(e) => setDiscount(e.target.value)} 
          />
        </div>
        <button type="submit">Create Coupon</button>
      </form>
    </div>
  );
};

export default CreateCouponForm;
