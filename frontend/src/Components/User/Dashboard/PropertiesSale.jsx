import React from "react";
import { Footer } from "./Footer";
import style from "./Properties.module.css";
export const PropertiesSale = () => {
  return (
    <div>
      <div className={style.ribbon}>
        <li>
          Home / <span>Properties For Sales</span>
        </li>
      </div>
      <div style={{ padding: 10, marginTop: "3%" }}>
        <p style={{ fontSize: "1.5rem" }}>Properties For Sale</p>
        <div className={style.btn}>
          <button>Add Property</button>
        </div>
      </div>

      <Footer />
    </div>
  );
};
