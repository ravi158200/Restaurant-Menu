import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';

export default function Menu() {
  const [items, setItems] = useState([
    { _id: '1', name: 'Gourmet Burger', description: 'Double beef patty with truffle mayo', price: 299, category: 'Fast Food', imageUrl: '/burger.png' },
    { _id: '2', name: 'Pepperoni Pizza', description: 'Wood-fired pizza with extra cheese', price: 499, category: 'Italian', imageUrl: '/pizza_menu.png' },
    { _id: '3', name: 'Truffle Pasta', description: 'Creamy mushroom and truffle pasta', price: 349, category: 'Italian', imageUrl: '/pasta_menu.png' },
  ]);

  return (
    <div className="py-8">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">Our Menu</h1>
        <p className="text-muted text-lg max-w-2xl mx-auto">Explore our wide variety of delicious, mouth-watering dishes prepared just for you.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item, i) => (
          <motion.div 
            key={item._id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="glass rounded-2xl overflow-hidden group hover:border-primary/50 transition-colors"
          >
            <div className="h-56 bg-surface/50 overflow-hidden relative">
              <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute top-4 right-4 bg-background/80 backdrop-blur px-3 py-1 rounded-full text-sm font-bold border border-white/10">
                {item.category}
              </div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-white">{item.name}</h3>
                <span className="text-primary font-bold text-lg">₹{item.price}</span>
              </div>
              <p className="text-muted text-sm mb-6 h-10">{item.description}</p>
              
              <button className="w-full bg-surface hover:bg-primary text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-colors">
                <ShoppingCart size={18} /> Add to Cart
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
