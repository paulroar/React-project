import React from 'react';
import data from '../listings.json';
import './HomePage.css';

const listings = data.results; 


function HomePage(){
  
    return (
        <div className="home">
      <h1>Welcome to Rental Apartments</h1>
      <p>Explore the best apartments for rent in your area!</p>
      <div className="listing-grid">
        {listings.map((listing) => (
          <div key={listing.id} className="listing-card">
            <img src={listing.picture_url} alt={listing.name || "Unnamed Listing"} />
            <h3>{listing.name || "Unnamed Listing"}</h3>
            <p><strong>Location:</strong> {listing.host_location|| "Location unavailable"}</p>
            <p><strong>Price:</strong> {listing.price || "Price unavailable"}</p>
            <p>{typeof listing.description === "string" 
                ? listing.description 
                : "Description unavailable"}</p>
          </div>
        ))}
      </div>
    </div>
        
    );
}

export default HomePage;