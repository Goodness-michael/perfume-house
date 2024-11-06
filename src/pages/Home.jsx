import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Cart from "../components/Cart";
import Allperfumes from "../components/Allperfumes";

const Home = () => {
  return (
    <>
      <Header />
      <div className="container my-4">
        <div className="row">
          <div className="col-lg-8">
            <Allperfumes />
          </div>
          <div className="col-lg-3">
            <Cart />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
