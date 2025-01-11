function Listings(props){

return(
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

export default Listings