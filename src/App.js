import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Pages/Navbar";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import "leaflet/dist/leaflet.css";

function App() {
  return (
    <>
    
   < Navbar />
   <div className="w-full overflow-x-hidden"></div>
  <Routes> 
    <Route path="/" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/home" element={<Home />} />
  
    
  </Routes>
</>
  );
}

export default App;