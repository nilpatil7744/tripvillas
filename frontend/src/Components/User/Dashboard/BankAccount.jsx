import React from "react";
import { Footer } from "./Footer";
import style from "./Properties.module.css";
export const BankAccount = () => {
  return (
    <div>
      <div className={style.ribbon}>
        <li>
          Home / <span>Bank Account</span>
        </li>
      </div>
      <div style={{ padding: 10, marginTop: "3%" }}>
        <p style={{ fontSize: "1.5rem" }}>Sorry there are no bank accounts</p>
        <div className={style.btn}>
          <button> + Add Bank Account</button>
        </div>
      </div>

      <Footer />
    </div>
  );
};
