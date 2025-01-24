import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./ManageListings.css";

function ManageListings() {
    const [listings, setListings] = useState([]);
    const [formData, setFormData] = useState({
      id: uuidv4(), 
      name: "",
      description: "",
      picture_url: `https://picsum.photos/300/200?random=${Math.floor(Math.random() * 1000)}`,
      listing_url: "",
    });
    const [editIndex, setEditIndex] = useState(null);
  
    
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    
    const handleSubmit = (e) => {
      e.preventDefault();
      if (editIndex !== null) {
        const updatedListings = [...listings];
        updatedListings[editIndex] = formData;
        setListings(updatedListings);
      } else {
        setListings([...listings, formData]);
      }
      resetForm();
    };
  
    
    const handleEdit = (index) => {
      setFormData(listings[index]);
      setEditIndex(index);
    };
  
    
    const handleDelete = (index) => {
      const updatedListings = listings.filter((_, i) => i !== index);
      setListings(updatedListings);
    };
  
    
    const resetForm = () => {
      setFormData({
        id: uuidv4(), 
        name: "",
        description: "",
        picture_url: `https://picsum.photos/300/200?random=${Math.floor(Math.random() * 1000)}`, 
        listing_url: "",
      });
      setEditIndex(null);
    };
  
    return (
      <div className="manage-listings">
        <h1>Manage Listings</h1>
        <form onSubmit={handleSubmit} className="listing-form">
          <input
            type="text"
            name="id"
            placeholder="ID (auto-generated)"
            value={formData.id}
            onChange={handleChange}
            readOnly
          />
          <input
            type="text"
            name="name"
            placeholder="Name (required)"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <textarea
            name="description"
            placeholder="Description (required)"
            value={formData.description}
            onChange={handleChange}
            required
          />
          <input
            type="url"
            name="picture_url"
            placeholder="Picture URL (auto-generated)"
            value={formData.picture_url}
            onChange={handleChange}
            readOnly
          />
          <input
            type="url"
            name="listing_url"
            placeholder="Listing URL"
            value={formData.listing_url}
            onChange={handleChange}
          />
          <button type="submit">{editIndex !== null ? "Update Listing" : "Add Listing"}</button>
          {editIndex !== null && <button onClick={resetForm}>Cancel</button>}
        </form>
  
        {listings.length > 0 ? (
          <div className="listings-container">
            {listings.map((listing, index) => (
              <div key={listing.id} className="listing-card-add">
                <img src={listing.picture_url} alt={listing.name} />
                <h3>{listing.name}</h3>
                <p>{listing.description}</p>
                 <div className="action-buttons">
                  <button onClick={() => handleEdit(index)}>Edit</button>
                  <button onClick={() => handleDelete(index)} className="delete-btn">
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>No listings added yet.</p>
        )}
      </div>
    );
  }

export default ManageListings;