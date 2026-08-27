import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import KathaPage from "./pages/KathaPage";
import GalleryPage from "./pages/GalleryPage";
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/katha" element={<KathaPage />} />
      <Route path="/gallery" element={<GalleryPage />} />
    </Routes>
  );
}
