import React from "react";
import { Footer } from "./Footer";
import style from "./Properties.module.css";

export const MyCustomers = () => {
  return (
    <div>
      <div>
        <div>
          <div className={style.ribbon}>
            <li>
              Home / <span>My Customers</span>
            </li>
          </div>
          <div style={{ padding: 10, marginTop: "3%" }}>
            <p style={{ fontSize: "1.5rem" }}>Sorry there are no customers</p>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};
