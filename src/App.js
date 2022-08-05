import { useState, useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';

// api
import { getClientToken } from './api/getClientToken';
// import GetAdminToken from './api/getAdminToken';

// pages
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Shop from "./pages/shop/Shop";
import Wishlist from './pages/wishlist/Wishlist';
import Register from "./pages/register/Register";
import Cart from './pages/cart/Cart';

// contexts
import { ClientTokenContext } from "./context/ClientTokenContext";
import { UserContext } from "./context/UserContext";

function App() {
  const [clientToken, setClientToken] = useState('');
  const [user, setUser] = useState(null);

  const initClientToken = async () => {
    let token = await getClientToken();
    setClientToken(token);
  }

  useEffect(() => {
    initClientToken();
  }, [])

  useEffect(() => {
    console.log(user);
  }, [user])

  return (
    <ClientTokenContext.Provider value={{ clientToken, setClientToken }}>
    <UserContext.Provider value={{ user, setUser }}>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            {/* make login path inaccessible if user is logged in */}
            { user ? '' : <Route path="/login" element={<Login />} /> }
            <Route path='/register' element={<Register />} />
            <Route path="/shop" element={<Shop />} />
            <Route path='/wishlist' element={<Wishlist />} />
            <Route path='/cart' element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
    </ClientTokenContext.Provider>
  );
}

export default App;
