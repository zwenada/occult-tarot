import React from "react";
import tarotImage1 from "../assets/tarot1.jpg";
import tarotImage2 from "../assets/tarot2.jpg";
import tarotImage3 from "../assets/tarot3.jpeg";

const Card = () => {
  return (
    <>
      <div className="card-group">
        <div className="card mx-2">
          <img src={tarotImage1} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card Title</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div>
        </div>
        <div className="card me-2">
          <img src={tarotImage2} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              This card has supporting text below as a natural lead-in to
              additional content.
            </p>
          </div>
        </div>
        <div className="card me-2">
          <img src={tarotImage3} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
