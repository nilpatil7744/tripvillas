import React, { useState } from "react";
import "../../Styles/Register.css";
import RegInfo from "./RegInfo";

const Register = () => {
  const obj1 = {
    name2: "",
    lastname: "",
    code: "",
    number2: "",
    email: "",
    password: "",
    confirmpassword: "",
    terms: false,
  };
  const [query, setQuery] = useState(obj1);

  const {
    name2,
    lastname,
    code2,
    number,
    email,
    password,
    confirmpassword,
    terms,
  } = query;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    let val = type === "checkbox" ? checked : value;
    setQuery({
      ...query,
      [name]: val,
    });
  };
  return (
    <div>
      <div>
        <div className="navbar">
          <br /> <br />
          <img
            src="https://d2v8elt324ukrb.cloudfront.net/static/new_template/img/logo.b01085f692cb.png"
            alt=""
          />
          <p className="nav-text">Already registered ? </p>
          <button className="nav-button-sign">Sign In</button>
        </div>
        <br /> <br /> <br />
        <div style={{ display: "flex" }}>
          <div>
            <RegInfo />
          </div>
          <div
            style={{
              border: "1px solid gray",
              width: "33%",
              marginLeft: "60px",
            }}
          >
            <header className="header-navbar">
              Register & List your home. Its Free.
            </header>
            <div>
              <br />
              <input
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                value={name2}
                name="name2"
                className="register-input"
              />

              <input
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
                value={lastname}
                name="lastname"
                className="register-input2"
              />
            </div>

            <div
              style={{
                display: "flex",
                borderBottom: "1px solid rgb(163, 156, 156)",
              }}
            >
              <br /> <br />
              <p style={{ marginLeft: "20px" }}>Mobile With Country Code</p>
              <input
                type="text"
                placeholder="+91"
                onChange={handleChange}
                value={code2}
                name="code2"
                className="register-input3"
              />
              <input
                type="text"
                placeholder="123456781"
                onChange={handleChange}
                value={number}
                name="number"
                className="register-input4"
              />
            </div>
            <br />

            <div>
              <input
                type="text"
                placeholder="Email Address"
                onChange={handleChange}
                value={email}
                name="email"
                className="register-input5"
              />
              <br />

              <input
                type="text"
                placeholder="Password"
                onChange={handleChange}
                value={password}
                name="password"
                className="register-input6"
              />
              <br />
              <input
                type="text"
                placeholder="Confirm Password"
                onChange={handleChange}
                value={confirmpassword}
                name="confirmpassword"
                className="register-input7"
              />
            </div>
            <br />
            <div
              style={{
                display: "flex",
                borderBottom: "1px solid rgb(163, 156, 156)",
              }}
            >
              <input
                value={terms}
                name="terms"
                type="checkbox"
                onChange={handleChange}
                style={{
                  height: "20px",
                  width: "20px",
                  border: "1px solid yellow",
                  marginLeft: "20px",
                }}
              />
              <p
                style={{
                  marginTop: "-1px",
                  marginLeft: "20px",
                }}
              >
                I accept all
                <a href="https://www.tripvillas.com/">terms & conditions</a>
              </p>
            </div>
            <br />
            <div
              style={{
                borderBottom: "1px solid rgb(163, 156, 156)",
                backgroundColor: "#F8F8FE6",
              }}
            >
              <button className="btn-register">REGISTER</button>
              <br /> <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Register };
