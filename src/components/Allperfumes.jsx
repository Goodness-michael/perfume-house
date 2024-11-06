import React from "react";
import { perfumes } from "../data";
import Singleperfume from "./Singleperfume";


const Allperfumes = () => {
  return (
    <div className="d-flex flex-wrap gap-2">
      {perfumes.map((perfume) => {
        return <Singleperfume key={perfume.id} {...perfume}    />;
      })}
    </div>
  );
};

export default Allperfumes;
