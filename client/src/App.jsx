import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import UploadResume from "./pages/UploadResume";
import Dashboard from "./pages/Dashboard";
import ResumeHistory from "./pages/ResumeHistory";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upload" element={<UploadResume />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/history" element={<ResumeHistory />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;