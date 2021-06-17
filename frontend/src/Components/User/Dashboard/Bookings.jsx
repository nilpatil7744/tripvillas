import React from "react";
import { Footer } from "./Footer";
import style from "./Properties.module.css";

export const Bookings = () => {
  return (
    <div>
      <div>
        <div className={style.ribbon}>
          <li>
            Home / <span>Payouts</span>
          </li>
        </div>
        <div style={{ padding: 10, marginTop: "3%" }}>
          <p style={{ fontSize: "1.5rem" }}>Sorry there are no bookings yet.</p>
        </div>
        <Footer />
      </div>
    </div>
  );
};
