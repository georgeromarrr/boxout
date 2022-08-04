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
import { ClientTokenContext } from "./context/ClientTokenContext";

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
        </Routes>
      </BrowserRouter>
    </ClientTokenContext.Provider>
  );
}

export default App;
