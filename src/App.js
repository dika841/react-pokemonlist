import Homepage from "./page/Homepage";
import Location from "./page/Location";
import Login from "./page/Login";
import Register from "./page/Register";
import { Routes, Route } from "react-router-dom";
import LocationDetail from "./page/LocationDetail";
function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="location" element={<Location />} />
        <Route path="location/:id" element={<LocationDetail />} />
      </Routes>
    </div>
  );
}

export default App;
