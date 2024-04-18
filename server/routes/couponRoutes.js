
import express from 'express';
import Coupon from '../models/Coupon.js';

const router = express.Router();

// GET all coupons
router.get('/', async (req, res) => {
  try {
    const coupons = await Coupon.find();
    res.json(coupons);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// POST new coupon
router.post('/create', async (req, res) => {
  try {
    const { code, discount } = req.body;
    const coupon = await Coupon.create({ code, discount });
    res.status(201).json(coupon);
  } catch (error) {
    console.error('Error creating coupon:', error);
    res.status(500).json({ error: 'Failed to create coupon' });
  }
});

// DELETE coupon by ID
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Coupon.findByIdAndDelete(id);
    res.json({ message: 'Coupon deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Validate coupon
router.post('/validate', async (req, res) => {
  try {
    const { code } = req.body;
    const trimmedCode = code.trim(); // Trim leading/trailing whitespace
    const coupon = await Coupon.findOne({ code: { $regex: new RegExp(trimmedCode, "i") } }); // Case-insensitive search
    if (coupon) {
      res.json({ valid: true, discount: coupon.discount });
    } else {
      res.json({ valid: false });
    }
  } catch (error) {
    console.error('Error validating coupon:', error); // Log the error
    res.status(500).json({ error: 'Internal server error' });
  }
});


export default router;
