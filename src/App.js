import { useState, useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import { getClientToken } from './api/getClientToken';
// import GetAdminToken from './api/getAdminToken';
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Shop from "./pages/shop/Shop"
import { ClientTokenContext } from "./context/ClientTokenContext";
import Wishlist from './pages/wishlist/Wishlist';
import Register from "./pages/register/Register"
import Cart from './pages/cart/Cart';

function App() {
  const [clientToken, setClientToken] = useState('');

  const initClientToken = async () => {
    let token = await getClientToken();
    setClientToken(token);
  }

  useEffect(() => {
    initClientToken();
  }, [])

  return (
    <ClientTokenContext.Provider value={{ clientToken, setClientToken }}>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path="/shop" element={<Shop />} />
            <Route path='/wishlist' element={<Wishlist />} />
            <Route path='/cart' element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </ClientTokenContext.Provider>
  );
}

export default App;
