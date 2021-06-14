import axios from "axios";
import React, { useEffect, useState } from "react";

import { BsFilterLeft } from "react-icons/bs";
import { MdDateRange } from "react-icons/md";
import { NavBar } from "../Home_NavBar/NavBar";
import GoogleMap2 from "./MapLocnComponent/Map2";
function MapLocation(props) {
  const [Info, setInfo] = useState([]);
  useEffect(() => {
    handleFruits();
  }, []);

  const handleFruits = () => {
    const requestParam = {
      method: "get",
      url: "http://localhost:8001/hotels",
    };
    axios(requestParam)
      .then((response) => {
        console.log(response.data.data);
        setInfo(response.data.data);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <NavBar />
      <div
        style={{
          width: "60%",
          padding: "13px",
        }}
      >
        <button
          style={{
            height: "30px",
            backgroundColor: "white",
            border: "1px solid gray",
            padding: "5px",
            marginRight: "600px",
          }}
        >
          <BsFilterLeft /> APPLY FILTERS
        </button>

        <button
          style={{
            height: "30px",
            backgroundColor: "white",
            border: "1px solid gray",
            padding: "5px",
          }}
        >
          <MdDateRange /> MODIFY SEARCH
        </button>
      </div>

      <div
        style={{
          display: "flex",
          overflow: "auto",
          alignItems: "flex-start",
          height: "100vh",
        }}
      >
        <div style={{ overflow: "auto" }}>
          {Info.map((item) => (
            <div style={{ overflow: "auto" }}>
              <div
                style={{
                  jusfyspace: "evenly",
                  border: "3px solid whitesmoke",
                  width: "900px",
                  marginLeft: "40px",
                  marginTop: "10px",
                  boxShadow: "0 2px 3px -1px rgba(0, 0, 0, 0.3)",
                  overflow: "auto",
                }}
              >
                <div style={{ display: "flex" }}>
                  <div>
                    <img
                      src={item.hotImg1}
                      alt=""
                      style={{ height: "300px", width: "300px" }}
                    />
                  </div>
                  <div style={{ marginLeft: "40px", textAlign: "left" }}>
                    <h4 style={{ color: "#999999", fontSize: "14px" }}>
                      Ref id #{item._id}
                    </h4>
                    <h2 style={{ fontsize: "24px", color: "#333333" }}>
                      {item.topTitle}
                    </h2>
                    <p style={{ color: "#1E87F0", fontsize: "24px" }}>
                      {item.state}
                    </p>

                    <h2
                      style={{
                        color: "black",
                        fontsize: "24px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      {item.basePrice} ₹
                    </h2>

                    <button
                      style={{
                        border: "1px solid #1E87F0",
                        backgroundColor: "white",
                      }}
                    >
                      ⚡
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ top: "0", position: "sticky" }}>
          <GoogleMap2 />
        </div>
      </div>
    </div>
  );
}

export default MapLocation;
