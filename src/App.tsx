import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import KathaPage from "./pages/KathaPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/katha" element={<KathaPage />} />
    </Routes>
  );
}
