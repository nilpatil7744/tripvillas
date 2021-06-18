import React from "react";
import { Footer } from "./Footer";
import { Hoteldetail } from "../../Payment/Payment";

export const Bookings = () => {
  return (
    <div>
      <div>
        <p style={{ fontSize: "1.5rem" }}>bookings</p>
        <div style={{ padding: 10, marginTop: "3%", marginLeft: "230px" }}>
          <Hoteldetail>
            <div>
              <img
                src="https://d2vcelvjdj7n25.cloudfront.net/media/property_photos/original/64219945/bd665473dc2f11e985440a8e1b1ce4da.jpg"
                alt=""
                style={{ height: "200px", marginRight: "600px" }}
              />
            </div>
            <div
              style={{
                marginTop: "-200px",
                marginLeft: "300px",
                textAlign: "left",
              }}
            >
              <h3
                style={{
                  fontWeight: "300",
                  color: "#000000",
                }}
              >
                Property Ref Id #64219945 <br />
                <h2
                  style={{
                    fontWeight: "300",
                    color: "#000000",
                  }}
                >
                  Brilliant rooms in our Home Stay
                </h2>
                <br />
                <a
                  href
                  style={{
                    fontWeight: "300",
                    color: "#000000",
                    marginTop: "-40px",
                  }}
                >
                  Goa,India
                </a>
              </h3>
            </div>
          </Hoteldetail>
        </div>
        <Footer />
      </div>
    </div>
  );
};
