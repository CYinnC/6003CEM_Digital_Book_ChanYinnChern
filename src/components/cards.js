import React, { useState } from "react";
import Details from "./details";

const Card = ({ book }) => {
  const [show, setShow] = useState(false);
  const [bookItem, setBookItem] = useState(null);

  if (!book || !Array.isArray(book) || book.length === 0) {
    return <p className="display"><b>No books to display</b></p>;
  }

  const handleCardClick = (item) => {
    setShow(true);
    setBookItem(item);
  };

  return (
    <>
      {book.map((item, index) => {
        let thumbnail =
          item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
        if (thumbnail !== undefined) {
          return (
            <React.Fragment key={index}>
              <div className="card" onClick={() => handleCardClick(item)}>
                <img src={thumbnail} alt="" />
                <div className="bottom">
                  <div className="b_title">
                    <h4>{item.volumeInfo.title}</h4>
                  </div>
                </div>
              </div>
            </React.Fragment>
          );
        }
        return null;
      })}
      <Details show={show} item={bookItem} onClose={() => setShow(false)} />
    </>
  );
};

export default Card;
