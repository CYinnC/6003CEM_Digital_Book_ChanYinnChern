import React from "react";
import axios from "axios";

const Detail = ({ show, item, onClose }) => {
  if (!show) {
    return null;
  }

  const handleFavorite = () => {
    const favoriteData = {
      title: item.volumeInfo.title,
      publisher: item.volumeInfo.publisher,
    };

    axios.post("http://localhost:5000/favorites", favoriteData)
      .then(response => {
        console.log("Favorite saved successfully:", response.data);
     
      })
      .catch(error => {
        console.error("Error saving favorite:", error);

      });
  };

  let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;

  return (
    <>
      <div className="overlay">
        <div className="inner_overlay">
          <button className="close_button" onClick={onClose}><b>X</b></button>
          <div className="container">
            <img src={thumbnail} alt="" />
            <h3 className="book_title">{item.volumeInfo.title}</h3>
            <h4>Author: {item.volumeInfo.authors}</h4>
            <h4>Publisher: {item.volumeInfo.publisher}</h4>
            <h4>Date: {item.volumeInfo.publishedDate}</h4>
            <button className="add_button" onClick={handleFavorite}>Add to Favorites</button>
            <a href={item.volumeInfo.previewLink}><button className="f_button">More</button></a>
            <h5>Description:</h5>
            <p className="favorite_description">{item.volumeInfo.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
