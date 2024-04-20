// routes/orders.js
import express from "express";
import Order from "../models/orderModel.js";

const router = express.Router();

router.get("/order-details", async (req, res) => {
  try {
    const orders = await Order.aggregate([
      { $unwind: "$products" }, // Unwind the products array
      { $group: { _id: "$products", totalQuantity: { $sum: 1 } } }, // Group by product and sum the quantity
      { $lookup: { from: "products", localField: "_id", foreignField: "_id", as: "productInfo" } }, // Lookup product details
      { $project: { _id: 0, productName: "$productInfo.name", totalQuantity: 1 } }, // Project fields
    ]);
    const data = orders.map(order => ({
      label: order.productName[0], // Assuming productName is an array
      value: order.totalQuantity
    }));
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
});

export default router;
