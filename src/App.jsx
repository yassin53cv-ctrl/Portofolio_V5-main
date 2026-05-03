import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState, lazy, Suspense } from "react";
import { HelmetProvider } from "react-helmet-async";
import "./index.css";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import AnimatedBackground from "./components/Background";
import Footer from "./components/Footer";
import WelcomeScreen from "./Pages/WelcomeScreen";
import { useEffect } from "react";

const LandingPage = () => {
  const [showWelcome, setShowWelcome] = useState(true);

  const handleShowWelcome = () => {
    setShowWelcome(true);
  };

  const handleHideWelcome = () => {
    setShowWelcome(false);
  };

  useEffect(() => {
    if (showWelcome) {
      const timer = setTimeout(() => {
        handleHideWelcome();
      }, 4500);
      return () => clearTimeout(timer);
    }
  }, [showWelcome]);

  return (
    <>
      {showWelcome ? (
        <WelcomeScreen onLoadingComplete={handleHideWelcome} />
      ) : (
        <>
          <Navbar />
          <Home />
          <About />
          <Footer />
        </>
      )}
    </>
  );
};

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <AnimatedBackground />
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;