import { useState } from "react";
import listingsJSON from "../listings.json";

function AllListingPage() {
  const [listings, setListings] = useState(listingsJSON);

  return (
    <div className="listings">
      <h1>Listings</h1>
      <ul>
        {listings.results.map(listing => (
          <li key={listing.id}>
            <img src={listing.picture_url} alt={listing.name} width={'250px'} />
            <h2>{listing.name}</h2>
            <p>{listing.description}</p>
            <a href={listing.listing_url}>View Listing</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AllListingPage;