import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";

import {Link} from 'react-router-dom'

const Favorite = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    
    fetchFavorites();
  }, []);

  const fetchFavorites = () => {
    axios.get("http://localhost:5000/favorites")
      .then(res => {
        setFavorites(res.data);
      })
      .catch(error => {
        console.error("Error fetching favorites:", error);
      });
  };

  const handleDeleteFavorite = (id) => {
    axios.delete(`http://localhost:5000/favorites/${id}`)
      .then(() => {
        fetchFavorites();
        console.log(`Bookmark with ID ${id} deleted successfully.`);
      })
      .catch(error => {
        console.error("Error deleting favorite:", error);
      });
  };

  

  return (
    <div className="favorite_background">
      <div className="container">
        <div className="favorite_header">
          <div className="favorite_title"><b>Favorite Bookes</b></div>
          <Link to="/" className="back_button">Back to Home</Link>
        </div>

        <div className="favorite_list">
          {favorites.length === 0 ? (
            <p className="no_favorite"><b>No favorites saved yet</b></p>
          ) : (
            favorites.map(favorite => (
              <div className="favorite_container" key={favorite._id}>
                <h2>{favorite.title}</h2>
                <h4>Publisher: {favorite.publisher}</h4>
                <button className="delete_button" onClick={() => handleDeleteFavorite(favorite._id)}>Delete</button>
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
};

export default Favorite;
