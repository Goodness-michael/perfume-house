import React from "react";
const Cartitems = ({ id, image, price, title }) => {
  return (
    <>
      <div className="cartitemcontainer">
        <div>
          <img src={image} alt={title} />
        </div>
        <div>
          <h2>{title} </h2>
        </div>
        <button className="cartitembtn1">-</button> <span>1</span>{" "}
        <button className="cartitembtn2">+</button>
        <div>
          <div>{price} </div>
          <div>
            <button className="removebtn">Remove</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cartitems;
