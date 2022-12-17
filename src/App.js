import Homepage from "./page/Homepage";
import Location from "./page/Location";
import { Routes, Route } from "react-router-dom";
import LocationDetail from "./page/LocationDetail";
function App() {
  return (
    <div className="p-6">
      <Routes>
        <Route path="/" element={<Homepage />} />

        <Route path="location" element={<Location />} />
        <Route path="location/:id" element={<LocationDetail />} />
      </Routes>
    </div>
  );
}

export default App;
