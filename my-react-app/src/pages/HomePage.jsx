import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

function HomePage() {
  return (
    <div className="home-p">
      <h1>Make yourself at home</h1>
      <p>
        Discover the best accommodations, travel tips, and experiences tailored
        for your perfect journey. We're here to make your travels unforgettable!
      </p>
      <div className="home-content">
        <div className="card">
          <h2>Cozy Accommodations</h2>
          <p>
            Find unique stays around the world, from beachside villas to
            charming countryside cottages. Experience the comfort of home
            wherever you go.
          </p>
          <Link to="/listings" className="home-link">
            Explore Listings
          </Link>
        </div>
        <div className="card">
          <h2>Travel Guides</h2>
          <p>
            Navigate your adventures with our curated travel guides. Discover
            hidden gems, top attractions, and local favorites to enhance your
            trips.
          </p>
          <Link to="/listings" className="home-link">
            Find More
          </Link>
        </div>
        <div className="card">
          <h2>Exclusive Deals</h2>
          <p>
            Save big on your next trip with exclusive discounts on flights,
            hotels, and car rentals. Plan your dream vacation within your
            budget.
          </p>
          <Link to="/listings" className="home-link">
            Get Deals
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
