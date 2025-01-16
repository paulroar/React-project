import React, { useEffect, useState } from "react";
import RecipeCard from "./ListingsCard";
import { Link } from 'react-router-dom';

function ListingsList() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    fetch("https://api.npms.io/v2/search?q=react")
      .then((response) => response.json())
      .then((data) => setListings(data));
  }, []);

  return (
    <div>
      <h1>Listings</h1>
      <ul>
        {listings.results.map(listing => (
          <li key={listing.id}>
            <h2>{listing.name}</h2>
            <p>{listing.description}</p>
            <a href={listing.listing_url}>View Listing</a>
          </li>
        ))}
      </ul>
    </div>
  );
}