import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import CategorySelectPage from "./pages/CategorySelectPage";
import JobSelectPage from "./pages/JobSelectPage";
import CameraPage from "./pages/CameraPage";
import HomePage from "./pages/HomePage";
import Policy from "./pages/Policy";
import QRCode from "./components/QRCode";

function App() {
  return (
    // <QRCode></QRCode>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/categoryselect" element={<CategorySelectPage />} />
      <Route path="/jobSelect" element={<JobSelectPage />} />
      <Route path="/camera" element={<CameraPage />} />
      <Route path="/policy" element={<Policy />} />
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
}

export default App;