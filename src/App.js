import { useState, useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import { getClientToken } from './api/getClientToken';
import { getAdminToken } from './api/getAdminToken';
// import GetAdminToken from './api/getAdminToken';
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Product from './pages/admin/product/product';
// import { ClientTokenContext } from "./context/ClientTokenContext";
import { TokenContext } from "./context/TokenContext";

function App() {
  const [clientToken, setClientToken] = useState('');
  // 
  const [adminToken, setAdminToken] = useState('');

  // const initClientToken = async () => {
  //   let token = await getClientToken();
  //   setClientToken(token);
  // }


  const initToken = async () => {
    let admin_Token = await getAdminToken();
    let client_Token = await getClientToken();
    setAdminToken(admin_Token);
    setClientToken(client_Token);
  }

  useEffect(() => {
    initToken();
    // initClientToken();
  }, [])

  return (
    // <ClientTokenContext.Provider value={{ clientToken, setClientToken }}>
    <TokenContext.Provider value={{ clientToken, setClientToken, adminToken, setAdminToken }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create-product-img" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </TokenContext.Provider>
    // </ClientTokenContext.Provider>
  );
}

export default App;
