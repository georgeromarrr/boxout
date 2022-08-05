import { useState, useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';

// api
import { getClientToken } from './api/getClientToken';
import { getAdminToken } from './api/getAdminToken';

// pages
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Shop from "./pages/shop/Shop";
import Wishlist from './pages/wishlist/Wishlist';
import Register from "./pages/register/Register";
import Cart from './pages/cart/Cart';
import Product from './pages/admin/product/Image';

// contexts
import { TokenContext } from "./context/TokenContext";
import { UserContext } from "./context/UserContext";
import Item from './pages/showItem/Item';

function App() {
  // const clientTokenData = localStorage.getItem('client_token');
  // const [clientToken, setClientToken] = useState( clientTokenData ? clientTokenData.toString() : null );
  // const adminTokenData = localStorage.getItem('admin_token');
  // const [adminToken, setAdminToken] = useState( adminTokenData ? adminTokenData.toString() : null );
  const [clientToken, setClientToken] = useState( null );
  const [adminToken, setAdminToken] = useState( null );

  const [user, setUser] = useState(null);

  const replaceClientToken = async () => {
    const token = await getClientToken();
    localStorage.setItem('client_token', token);
    setClientToken(token);
  }

  const replaceAdminToken = async () => {
    const token = await getAdminToken();
    localStorage.setItem('admin_token', token);
    setAdminToken(token);
  }
 
  if (!clientToken) {
    replaceClientToken();
  }
 
  if (!adminToken) {
    replaceAdminToken();
  }

  const initToken = async () => {
    let client_token = await getClientToken();
    setClientToken(client_token);
    let admin_token = await getAdminToken();
    setAdminToken(admin_token);
  }

  // useEffect(() => {
  //   console.log(clientToken);
  // }, [clientToken])

  // useEffect(() => {
  //   console.log(adminToken);
  // }, [adminToken])

  // useEffect(() => {
  //   console.log(user);
  // }, [user])

  useEffect(() => {
    initToken();
  }, [])

  return (
<<<<<<< HEAD
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
            <Route path='/item' element={<Item />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
    </ClientTokenContext.Provider>
=======
    <>
    { clientToken
     ? (
      <TokenContext.Provider value={{ clientToken, replaceClientToken, adminToken, replaceAdminToken }}>
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
              <Route path='/image-upload' element={<Product />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
      </TokenContext.Provider>
    ) : '' }
    </>
>>>>>>> e550caa1ef79747d3771d2050d799741310489fd
  );
}

export default App;
