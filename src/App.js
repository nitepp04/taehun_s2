import React, { useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import CategorySelectPage from "./pages/CategorySelectPage";
import JobSelectPage from "./pages/JobSelectPage";
import CameraPage from "./pages/CameraPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="/categoryselect" element={<CategorySelectPage />} />
      <Route path="/jobSelect" element={<JobSelectPage />} />

      {/* 기존의 main 컴포넌트 이름과 라우팅을 컴포넌트 기능에 맞춰 'CameraPage'로 변경 */}
      <Route path="/camera" element={<CameraPage />} />

      {/* 404 화면 처리 */}
      <Route path="*" element={<Navigate to="/policy" />} />
    </Routes>
  );
}

export default App;
