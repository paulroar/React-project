import React from "react";
import { Route, Routes } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import SideBar from "./components/Sidebar";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
         <div className="app">
        <Navbar />
        <div className="content">
          <SideBar />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
            </Routes>
          </main>
        </div>
        <Footer />
      </div>
          
  );
}

export default App;
