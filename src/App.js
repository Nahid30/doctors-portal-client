import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import About from "./Pages/About/About";
import Appointment from "./Pages/Appointment/Appointment";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import NotFound from "./Pages/NotFound/NotFound";
import Navbar from './Pages/Shared/Navbar';

function App() {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="appointment" element={<Appointment />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<NotFound/>} />
        
      </Routes>

    </div>
  );
}

export default App;
