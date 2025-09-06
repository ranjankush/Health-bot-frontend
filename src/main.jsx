import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import SymptomPage from "./components/SymptomPage.jsx"; // ✅ fixed path

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Landing/Home page */}
        <Route path="/" element={<App />} />

        {/* Chatbot page */}
        <Route path="/chat" element={<SymptomPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
