import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-3xl h-[600px] flex items-center justify-center text-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent z-10"></div>
          {/* We will use a placeholder gradient or the user can put the generated image here */}
          <div className="w-full h-full bg-surface/50 bg-cover bg-center" style={{ backgroundImage: "url('/hero_food_bg.png')" }}></div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-20 max-w-3xl px-4"
        >
          <span className="px-4 py-1.5 rounded-full bg-primary/20 text-primary border border-primary/30 text-sm font-semibold tracking-wider uppercase mb-6 inline-block">
            Taste the Future
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60 mb-6 drop-shadow-lg">
            Delicious Food,<br /> Delivered <span className="text-primary">Fast.</span>
          </h1>
          <p className="text-xl text-muted mb-10 leading-relaxed max-w-2xl mx-auto">
            Experience the best dining from the comfort of your home. Fresh ingredients, masterful chefs, and a seamless ordering experience.
          </p>
          <div className="flex gap-4 justify-center">
            <Link to="/menu" className="bg-primary hover:bg-blue-600 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-1">
              Order Now
            </Link>
            <Link to="/menu" className="glass hover:bg-surface text-white px-8 py-4 rounded-full font-bold transition-all hover:-translate-y-1">
              View Menu
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
        {[
          { title: "Lightning Fast", desc: "Hot food at your doorstep in under 30 minutes.", icon: "⚡" },
          { title: "Premium Quality", desc: "Prepared by top chefs using only the freshest ingredients.", icon: "👨‍🍳" },
          { title: "Secure Payment", desc: "Multiple payment options powered by Razorpay.", icon: "🔒" }
        ].map((feat, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            className="glass p-8 rounded-2xl text-center hover:bg-surface/80 transition cursor-default group"
          >
            <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">{feat.icon}</div>
            <h3 className="text-2xl font-bold mb-3">{feat.title}</h3>
            <p className="text-muted">{feat.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
