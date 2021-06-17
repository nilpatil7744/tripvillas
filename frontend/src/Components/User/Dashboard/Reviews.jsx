import React from "react";
import { Footer } from "./Footer";
import style from "./Properties.module.css";


export const Reviews = () => {
  return (
    <div>
      <div>
        <div>
          <div className={style.ribbon}>
            <li>
              Home / <span>Reviews</span>
            </li>
          </div>
          <div style={{ padding: 10, marginTop: "3%" }}>
            <p style={{ fontSize: "1.5rem" }}>
              No Reviews have been submitted by travelers yet.
            </p>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};
