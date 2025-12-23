//resources: https://dev.to/codeparrot/using-environment-variables-in-react-and-vite-31kc
// catbook docs
// chat gpt/copilot
import { useEffect, useState } from "react";
import Layout from "./pages/Layout";
import Home from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pomodoro from "./components/Pomodoro/Pomodoro";
import HeroPageContainer from "./components/HeroPageContainer";
import Settings from "./pages/Settings";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={<HeroPageContainer MainView={Home}></HeroPageContainer>}
          />
          <Route
            path="pomodoro"
            element={
              <HeroPageContainer MainView={Pomodoro}></HeroPageContainer>
            }
          />
          <Route
            path="settings"
            element={
              <HeroPageContainer MainView={Settings}></HeroPageContainer>
            }
          />
          {/* <Route path="/design" element={<DesignPage />} />
          <Route path="/marketing" element={<MarketingPage />} />
          <Route path="/advertisement" element={<AdvertisementPage />} />

          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/jobs" element={<JobsPage />} />
          <Route path="/press-kit" element={<PressKitPage />} />

          <Route path="/terms-of-use" element={<TermsOfUse />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} /> */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
