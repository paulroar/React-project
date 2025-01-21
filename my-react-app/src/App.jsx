import "./App.css";
import { Routes, Route } from "react-router-dom"; // <== IMPORT
import Navbar from "./components/Navbar";     // <== IMPORT
import HomePage from "./pages/HomePage";     // <== IMPORT
import SideBar from "./components/SideBar";
import Footer from "./components/Footer";
import AllListingPage from "./pages/AllListingPage";


function App() {
  return (
    <div className="App">
      <Navbar />
      <SideBar />
      <Routes>      
        <Route path="/" element={ <HomePage /> } />
        <Route path="/listings" element={ <AllListingPage /> } />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

