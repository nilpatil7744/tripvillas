import { Link } from "react-router-dom";
import React from "react";

import "../../Styles/PropertyModule.css";

import { Infotab } from "./Infotab";
function Property() {
  return (
    <div>
      {Infotab.map((item) => (
        <div style={{ float: "left", marginLeft: "20px", marginTop: "80px" }}>
          <div
            style={{
              height: "340px",
              width: "690px",
              marginLeft: "10px",
              padding: "10px",
              border: "3px solid whitesmoke",
            }}
          >
            <div>
              <p className="uk-fonthead">{item.headline}</p>
            </div>
            <div className="uk-card">
              <div>
                <img src={item.img1} alt=" " className="uk-img1" />
                <p>{item.text1}</p>
              </div>
              <div>
                <img src={item.img2} alt=" " className="uk-img2" />
                <p>{item.text2}</p>
              </div>
              <div>
                <img src={item.img3} alt=" " className="uk-img2" />
                <p>{item.text3}</p>
              </div>
              <div>
                <img src={item.img4} alt=" " className="uk-img2" />
                <p>{item.text4}</p>
              </div>
            </div>
            <Link to={`${item.path}`}>
              <button className="uk-bttn1">{item.bttn}</button>
            </Link>

            <br />
            <br />
          </div>
          <br />
        </div>
      ))}
    </div>
  );
}

export default Property;
