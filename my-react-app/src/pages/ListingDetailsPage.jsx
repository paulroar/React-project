import { useParams } from 'react-router-dom';
import listingsJSON from "../listings.json";
import "./ListingDetailsPage.css";

function ListingDetailsPage() {
    const { id } = useParams(); 
    const listing = listingsJSON.results.find((item) => String(item.id) === id);
  
    if (!listing) {
      return <h1>Listing Not Found</h1>;
    }
  
    return (
      <div className="listing-details">
        <h1>{listing.name}</h1>
        <img src={listing.picture_url} alt={listing.name} />
        <p><strong>Description:</strong> {listing.description}</p>
        <p><strong>Location:</strong> {listing.host_location}</p>
        <p><strong>Price:</strong> {listing.price}</p>
        <a href={listing.listing_url} target="_blank" rel="noopener noreferrer">
          View Original Listing
        </a>
      </div>
    );
  }
  
  export default ListingDetailsPage;