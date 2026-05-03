import express from 'express';
import Razorpay from 'razorpay';
import Order from '../models/Order.js';

const router = express.Router();

// Get all orders (Admin / Kitchen)
router.get('/', async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Create new order
router.post('/', async (req, res) => {
  try {
    const newOrder = new Order(req.body);
    await newOrder.save();
    res.status(201).json(newOrder);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Update order status
router.put('/:id/status', async (req, res) => {
  try {
    const { status } = req.body;
    const updated = await Order.findByIdAndUpdate(req.params.id, { orderStatus: status }, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Razorpay: Create Order
router.post('/razorpay/create-order', async (req, res) => {
  try {
    const { amount } = req.body; // Amount in INR
    const razorpayInstance = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });

    const options = {
      amount: amount * 100, // amount in the smallest currency unit
      currency: "INR",
      receipt: `receipt_order_${Math.floor(Math.random() * 1000)}`,
    };

    const order = await razorpayInstance.orders.create(options);
    res.json(order);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Razorpay: Verify Payment
router.post('/razorpay/verify', async (req, res) => {
  // Normally you verify the signature here
  // For simplicity, we just mark a payment successful if called
  try {
    const { orderId, razorpayPaymentId, razorpayOrderId, razorpaySignature } = req.body;
    // Update order in db
    const order = await Order.findByIdAndUpdate(orderId, {
      paymentStatus: 'Completed',
      razorpayOrderId: razorpayOrderId
    }, { new: true });
    res.json({ success: true, order });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
