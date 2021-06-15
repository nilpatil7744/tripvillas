import React, { useState } from "react";
import "../../Styles/Register.css";
import RegInfo from "../Register/RegInfo";
import { useDispatch, useSelector } from "react-redux";
import { loginruser } from "../../Redux/LoginAuth/action";
import { Link, Redirect } from "react-router-dom";
import Loadingg from "../Loading/Loadingg";
const LogIn = () => {
  const obj2 = {
    loginemail: "",
    loginpassword: "",
    stay: false,
  };
  const [query, setquery] = useState(obj2);

  const dispatch = useDispatch();

  const { stay, loginpassword, loginemail } = query;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    let val = type === "checkbox" ? checked : value;
    setquery({
      ...query,
      [name]: val,
    });
  };
  const togg = useSelector((state) => state.login.isAuth);
  const isLoading = useSelector((state) => state.login.isloading);
  const handleRegister = () => {
    if (query.loginemail !== "" && query.loginpassword !== "") {
      let payload = {
        email: query.loginemail,
        password: query.loginpassword,
        stay: query.stay,
      };

      setquery(payload);

      dispatch(loginruser(payload));
    } else {
      if (query.loginemail === "") {
        alert("Please Enter Email");
      } else if (query.loginpassword === "") {
        alert("Please Enter Password");
      }
    }
  };

  if (isLoading) return <Loadingg />;
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
              to="new-register"
              style={{ textDecoration: "none", color: "white" }}
            >
              Sign Up
            </Link>
          </button>
        </div>
        <br /> <br /> <br />
        <div style={{ display: "flex" }}>
          <div>
            <RegInfo />
          </div>
          <div
            style={{
              border: "1px solid gray",
              flex: "0.8",
              marginLeft: "60px",
            }}
          >
            <header className="header-navbar">Sign In</header>

            <div>
              <br />
              <label className="inputname" style={{ marginLeft: "10px" }}>
                E-mail
              </label>
              <input
                type="text"
                placeholder="Email Address"
                onChange={handleChange}
                value={loginemail}
                name="loginemail"
                className="register-input5"
              />
              <br /> <br />
              <label className="inputname" style={{ marginLeft: "19px" }}>
                Password
              </label>
              <input
                type="text"
                placeholder="Confirm Password"
                onChange={handleChange}
                value={loginpassword}
                name="loginpassword"
                className="register-input7"
              />
              <p></p>
              <a href className="inputname2" style={{ marginLeft: "19px" }}>
                Forgot Password
              </a>
            </div>
            <br />
            <div
              style={{
                display: "flex",
                borderBottom: "1px solid rgb(163, 156, 156)",
              }}
            >
              <input
                value={stay}
                name="stay"
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
                Stay signed in
              </p>
            </div>
            <br />
            <div
              style={{
                borderBottom: "1px solid rgb(163, 156, 156)",
                backgroundColor: "#F8F8FE6",
              }}
            >
              <button className="btnregister2" onClick={handleRegister}>
                Sign In
              </button>
              <br /> <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { LogIn };
