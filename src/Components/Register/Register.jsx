import React, { useState } from "react";
import "../../Styles/Register.css";
import RegInfo from "./RegInfo";
import { useDispatch } from "react-redux";
import { registeruser } from "../../Redux/Register/action";
import { Link } from "react-router-dom";
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

  const dispatch = useDispatch();

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

  const handleRegister = () => {
    console.log(query.name2);
    if (
      query.name2 !== "" &&
      query.lastname !== "" &&
      query.code2 !== "" &&
      query.email !== "" &&
      query.password !== "" &&
      query.confirmpassword !== "" &&
      query.terms !== false
    ) {
      let payload = {
        name2: query.name2,
        lastname: query.lastname,
        code2: query.code2,
        number: query.number,
        email: query.email,
        password: query.password,
        confirmpassword: query.confirmpassword,
        terms: true,
      };

      setQuery(payload);
      console.log(payload);
      dispatch(registeruser(payload));
    } else {
      if (query.terms === false) {
        alert("Please Agree Terms and Conditions");
      } else if (query.name2 === "") {
        alert("Please Enter Your Name");
      } else if (query.lastname === "") {
        alert("Please Enter Your Last name");
      } else if (query.code2 === "") {
        alert("Please Enter Valid country code");
      } else if (query.email === "") {
        alert("Please Enter Your Email Address");
      } else if (query.password === "") {
        alert("Please Enter Your Password");
      } else if (query.password === "") {
        alert("Please Enter Your Password");
      } else if (query.confirmpassword === "") {
        alert(" Please Confirm-Password ");
      }
    }
  };
  return (
    <div>
      <div>
        <div className="navbar">
          <br /> <br />
          <Link to="/">
            <img
              src="https://d2v8elt324ukrb.cloudfront.net/static/new_template/img/logo.b01085f692cb.png"
              alt=""
              className="img-register"
            />
          </Link>
          <p className="nav-text">Already registered ? </p>
          <button className="nav-button-sign">
            <Link
              to="/new-login"
              style={{ textDecoration: "none", color: "white" }}
            >
              Sign In
            </Link>
          </button>
        </div>
        <br /> <br /> <br />
        <div style={{ display: "flex" }}>
          <div classname="disnav">
            <RegInfo />
          </div>
          <div
            style={{
              border: "1px solid gray",
              flex: "0.8",
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
                <a href="https://www.tripvillas.com/"> terms & conditions</a>
              </p>
            </div>
            <br />
            <div
              style={{
                borderBottom: "1px solid rgb(163, 156, 156)",
                backgroundColor: "#F8F8FE6",
              }}
            >
              <button className="btn-register" onClick={handleRegister}>
                REGISTER
              </button>
              <br /> <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Register };
