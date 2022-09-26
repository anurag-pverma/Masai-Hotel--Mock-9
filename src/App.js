import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import AdminLogin from "./Components/AdminLogin";
import Admin from "./Components/Admin";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import Hotel from "./Components/Hotel";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/hotel" element={<Hotel />} />
      </Routes>
    </div>
  );
}

export default App;
