import { Routes, Route, Link } from 'react-router-dom';
import { ShoppingCart, ChefHat, LayoutDashboard, UtensilsCrossed } from 'lucide-react';
import Home from './pages/Home';
import Menu from './pages/Menu';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-text">
      {/* Navigation */}
      <nav className="glass sticky top-0 z-50 py-4 px-6 md:px-12 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-white flex items-center gap-2">
          <div className="bg-primary p-2 rounded-xl text-white">
            <ChefHat size={24} />
          </div>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">RestoBite</span>
        </Link>
        <div className="hidden md:flex gap-8 items-center font-medium">
          <Link to="/" className="text-muted hover:text-white transition">Home</Link>
          <Link to="/menu" className="text-muted hover:text-white transition">Menu</Link>
          <Link to="/kitchen" className="text-muted hover:text-white transition flex items-center gap-1"><UtensilsCrossed size={16}/> Kitchen</Link>
        </div>
        <div className="flex gap-4 items-center">
          <Link to="/cart" className="relative p-2 text-muted hover:text-white transition bg-surface rounded-full border border-white/5">
            <ShoppingCart size={20} />
            <span className="absolute -top-1 -right-1 bg-primary text-white text-[10px] rounded-full h-4 w-4 flex items-center justify-center font-bold">3</span>
          </Link>
          <Link to="/admin" className="p-2 text-muted hover:text-white transition bg-surface rounded-full border border-white/5">
            <LayoutDashboard size={20} />
          </Link>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="flex-1 container mx-auto px-4 sm:px-6 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/cart" element={<div className="text-2xl font-bold text-center mt-20 text-muted">Cart Page (Coming Soon)</div>} />
          <Route path="/checkout" element={<div className="text-2xl font-bold text-center mt-20 text-muted">Checkout Page (Coming Soon)</div>} />
          <Route path="/admin" element={<div className="text-2xl font-bold text-center mt-20 text-muted">Admin Dashboard (Coming Soon)</div>} />
          <Route path="/kitchen" element={<div className="text-2xl font-bold text-center mt-20 text-muted">Kitchen Dashboard (Coming Soon)</div>} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="glass py-8 border-t border-white/5">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4 text-xl font-bold opacity-80">
            <ChefHat size={20} className="text-primary"/> RestoBite
          </div>
          <p className="text-muted text-sm mb-4">A modern full-stack restaurant experience.</p>
          <p className="text-white/30 text-xs">&copy; {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
