import React from "react";
import Cartitems from "./Cartitems";
import {Items} from "../data";

const Cart = () => {
  return (
    <div className="d-flex flex-wrap gap-2">
      {Items.map((item) => {
        return <Cartitems key={item.id} {...item} />;
      })}
      my cart
    </div>
  );
};

export default Cart;
