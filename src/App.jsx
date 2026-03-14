import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Heritage from "./pages/Heritage";
import Shop from "./pages/Shop";
import ExportPage from "./pages/Export";
import Sustainability from "./pages/Sustainability";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/heritage" element={<Heritage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/export" element={<ExportPage />} />
        <Route path="/sustainability" element={<Sustainability />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;