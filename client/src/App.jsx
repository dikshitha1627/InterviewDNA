import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";

import Home from "./pages/Home";
import UploadResume from "./pages/UploadResume";
import Dashboard from "./pages/Dashboard";
import ResumeHistory from "./pages/ResumeHistory";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/upload" element={<UploadResume />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/history" element={<ResumeHistory />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;