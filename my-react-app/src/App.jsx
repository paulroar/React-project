import "./App.css";
import { Routes, Route } from "react-router-dom"; 
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";     
import NotFoundPage from "./pages/NotFoundPage";
import SideBar from "./components/SideBar";
import Footer from "./components/Footer";
import AllListingPage from "./pages/AllListingPage";
import ListingDetailsPage from "./pages/ListingDetailsPage";
import ManageListings from "./pages/ManageListings";
import AboutPage from "./pages/AboutPage";


function App() {
  return (
    <div className="App">
      <Navbar />
      <SideBar />
      <Routes>      
        <Route path="/" element={ <HomePage /> } />
        <Route path="/listings" element={ <AllListingPage /> } />
        <Route path="/listings/:id" element={<ListingDetailsPage />} />
        <Route path="/about" element={ <AboutPage /> } />
        <Route path="/addRental" element={ <ManageListings /> } />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

