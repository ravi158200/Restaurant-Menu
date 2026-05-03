import mongoose from 'mongoose';

const orderItemSchema = new mongoose.Schema({
  menuItem: { type: mongoose.Schema.Types.ObjectId, ref: 'MenuItem', required: true },
  name: { type: String, required: true },
  quantity: { type: Number, required: true, min: 1 },
  price: { type: Number, required: true }
});

const orderSchema = new mongoose.Schema({
  customerName: { type: String, required: true },
  customerPhone: { type: String, required: true },
  customerAddress: { type: String }, // optional for pickup/dine-in
  items: [orderItemSchema],
  totalAmount: { type: Number, required: true },
  paymentMethod: { type: String, enum: ['Cash', 'Razorpay'], required: true },
  paymentStatus: { type: String, enum: ['Pending', 'Completed', 'Failed'], default: 'Pending' },
  razorpayOrderId: { type: String },
  orderStatus: { type: String, enum: ['Received', 'Preparing', 'Ready', 'Out for Delivery', 'Delivered'], default: 'Received' }
}, { timestamps: true });

export default mongoose.model('Order', orderSchema);
