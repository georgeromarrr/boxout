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
  const clientTokenData = localStorage.getItem('client_token');
  const [clientToken, setClientToken] = useState( clientTokenData ? clientTokenData : null );
  const [user, setUser] = useState(null);

  const replaceClientToken = async () => {
    const token = await getClientToken();
    console.log(token);
    localStorage.setItem('client_token', token);
    setClientToken(token);
  }
 
  if (!clientToken) {
    replaceClientToken();
  }

  useEffect(() => {
    console.log(clientToken);
  }, [clientToken])

  useEffect(() => {
    console.log(user);
  }, [user])

  return (
    <>
    { clientToken
     ? (
      <ClientTokenContext.Provider value={{ clientToken, replaceClientToken }}>
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
    ) : '' }
    </>
  );
}

export default App;
