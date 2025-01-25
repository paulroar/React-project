import { useState } from "react";
import { useNavigate } from "react-router-dom";
import listingsJSON from "../listings.json";
import "./AllListingPage.css";


function AllListingPage() {
  const [listings, setListings] = useState(listingsJSON);
  const navigate = useNavigate();


  const handleDelete = (id) => {
    const updatedListings = {
      ...listings,
      results: listings.results.filter((listing) => listing.id !== id),
    };
    setListings(updatedListings);
  };

  const handleViewDetails = (id) => {
    navigate(`/listings/${id}`);
  };

  return (
    <div className="listings">
      <h1>Listings</h1>
      <ul className="listing-grid">
        {listings.results.map((listing) => (
          <li key={listing.id} className="listing-card">
            <img src={listing.picture_url} alt={listing.name} />
            <h2>{listing.name}</h2>
            <p>{listing.description}</p>
            <button onClick={() => handleViewDetails(listing.id)}>
              View Listing Details
            </button>
            <a href={listing.listing_url} target="_blank" rel="noopener noreferrer">
              View Original Listing
            </a>
            <button className="delete-button" onClick={() => handleDelete(listing.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AllListingPage;