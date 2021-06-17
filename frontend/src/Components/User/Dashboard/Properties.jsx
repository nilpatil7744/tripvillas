import React from "react";
import style from "./Properties.module.css";
import { AiFillHome } from "react-icons/ai";
import { TiExportOutline } from "react-icons/ti";
import { Footer } from "./Footer";
export const Properties = () => {
  return (
    <div>
      <div className={style.ribbon}>
        <li>
          Home / <span>Properties</span>
        </li>
      </div>
      <div className={style.content}>
        <div className={style.alert}>
          <p>You must have a bank account in a country that Supports Stripe.</p>
          Now get paid Immediately if your property is located in one the 25
          countries which support the Stripe Payment Gateway.
          <br />
          Connect your stripe account to your tripvillas account and the entire
          amount gets credited to your account immediately. We only retain our
          commission.
          <h4>
            <a href="#">+ Click here to Connect your stripe account</a>
          </h4>
        </div>
        <div className={style.btn}>
          <button>+ Add New Property</button>
        </div>
        <header className={style.box_top}>
          <div style={{ width: "67%" }}>
            <p>
              <span style={{ padding: 5 }}>
                <AiFillHome />
              </span>
              TV ID : 24429642
            </p>
          </div>
          <div style={{ display: "flex" }}>
            <div style={{ marginTop: 14 }}>
              <a href="#">
                View this property on TripVillas.com <TiExportOutline />
              </a>
            </div>
            <div>
              <button>Want to sell your property?</button>
            </div>
          </div>
        </header>
        <div className={style.box_bottom}>
          <div style={{ width: "80%" }}>
            <strong>
              Standard Room inside Farm in Pune, Maharashtra (Farm House)
            </strong>
            <p>Pune, Maharashtra, INDIA</p>
            <div className={style.listing}>
              <div style={{ display: "flex", border: "1px solid #e0e0e0" }}>
                <div style={{ width: "20%" }}>
                  <p>Listing Information</p>
                </div>
                <div className={style.basic_list}>
                  <a href="">Basic Info</a>
                  <a href="">Structure of property</a>
                  <a href="">Photos</a>
                  <a href="">Facilities</a>
                  <a href="">FAQs</a>
                  <a href="">Reviews</a>
                </div>
              </div>
              <div style={{ display: "flex", border: "1px solid #e0e0e0" }}>
                <div style={{ width: "20%" }}>
                  <p>Rates and Availability</p>
                </div>
                <div className={style.basic_list}>
                  <a href="">Updates and Availability Calender</a>
                </div>
              </div>
              <div style={{ display: "flex", border: "1px solid #e0e0e0" }}>
                <div style={{ width: "20%" }}>
                  <p>Bookings</p>
                </div>
                <div className={style.basic_list}>
                  <a href="">Views Bookings</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};
