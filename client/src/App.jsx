import { useEffect, useState } from "react";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pomodoro from "./components/Pomodoro/Pomodoro";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="pomodoro" element={<Pomodoro />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
