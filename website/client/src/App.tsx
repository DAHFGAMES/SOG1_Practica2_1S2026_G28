import { HashRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Header from './components/organisms/Header';
import Footer from './components/organisms/Footer';
import Landing from './pages/Landing';
import Catalog from './pages/Catalog';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Confirmation from './pages/Confirmation';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <HashRouter>
      <CartProvider>
        <Header />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/catalogo" element={<Catalog />} />
            <Route path="/carrito" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/confirmacion" element={<Confirmation />} />
            <Route path="/admin" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </main>
        <Footer />
      </CartProvider>
    </HashRouter>
  );
}

export default App;
