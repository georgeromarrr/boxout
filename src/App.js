import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import GetClientToken from './api/getClientToken';
import GetAdminToken from './api/getAdminToken';
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

function App() {
  let token = GetClientToken();

  console.log(token);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
