import React, { useState } from "react";
import style from "./Unlock.module.css";
import { NavBar } from "../Investments/NavBar";
import { Footer } from "../Investments/Footer";
import { useSelector } from "react-redux";

export const Unlock = () => {
  const [formState, setFromState] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFromState({
      ...formState,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formState);
    alert("Submitted Successfully");
  };

  const toog = useSelector((state) => state.login.loginAuth);
  const { loginAuth } = useSelector((state) => state.login);

  console.log(toog, "authhhh");

  let techStack = localStorage.getItem("account");

  console.log({ techStack });
  return (
    <>
      <NavBar />
      <div className={style.container}>
        <div style={{ padding: 10 }}>
          <h1 className={style.h1s}>
            Tell Us More To Unlock Income Generating Opportunities
          </h1>
          <p className={style.listing_text}>
            Investing in Real Estate is meant for Sophisticated Investors. By
            filling out the form below we are able to understand more about your
            requirements and suggest what opportunities would fit you best. Post
            filling in the form, you will see all oppportunities
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className={style.form_header}>
            <h1>How much are you looking to invest in Real Estate?</h1>
            <div className={style.option_container}>
              <input
                type="radio"
                value="0 to 25L"
                name="invest"
                onChange={handleChange}
              />
              <label>0 to 25L</label>
              <input
                type="radio"
                value="25 to 75L"
                name="invest"
                onChange={handleChange}
              />
              <label>25 to 75L</label>
              <input
                type="radio"
                value="75 to 1Cr"
                name="invest"
                onChange={handleChange}
              />
              <label>75 to 1Cr</label>
              <input
                type="radio"
                value="1 to 2Cr"
                name="invest"
                onChange={handleChange}
              />
              <label>1 to 2Cr</label>
              <input
                type="radio"
                value="2Cr+"
                name="invest"
                onChange={handleChange}
              />
              <label>2Cr+</label>
            </div>
          </div>
          <div className={style.form_header}>
            <h1>What is the source of your wealth?</h1>
            <div className={style.option_container}>
              <input
                type="radio"
                value="Retirement Savings"
                name="source"
                onChange={handleChange}
              />
              <label>Retirement Savings</label>
              <input
                type="radio"
                value="Sale of Some other property"
                name="source"
                onChange={handleChange}
              />
              <label>Sale of Some other property</label>
              <input
                type="radio"
                value="Income from Business"
                name="source"
                onChange={handleChange}
              />
              <label>Income from Business</label>
              <input
                type="radio"
                value="Inheritance"
                name="source"
                onChange={handleChange}
              />
              <label>Inheritance</label>
              <input
                type="radio"
                value="Other"
                name="source"
                onChange={handleChange}
              />
              <label>Other</label>
            </div>
          </div>
          <div className={style.form_header}>
            <h1>Do you own your own residence at the moment?</h1>
            <div className={style.option_container}>
              <input
                type="radio"
                value="YES"
                name="residence"
                onChange={handleChange}
              />
              <label>YES</label>
              <input
                type="radio"
                value="NO"
                name="residence"
                onChange={handleChange}
              />
              <label>NO</label>
            </div>
          </div>
          <div className={style.form_header}>
            <h1>Do you own homes or apartments you are renting out??</h1>
            <div className={style.option_container}>
              <input
                type="radio"
                value="YES"
                name="renting"
                onChange={handleChange}
              />
              <label>YES</label>
              <input
                type="radio"
                value="NO"
                name="renting"
                onChange={handleChange}
              />
              <label>NO</label>
            </div>
          </div>
          <div className={style.form_header}>
            <h1>Do you own any commercial space you are renting??</h1>
            <div className={style.option_container}>
              <input
                type="radio"
                value="YES"
                name="commercial space"
                onChange={handleChange}
              />
              <label>YES</label>
              <input
                type="radio"
                value="NO"
                name="commercial space"
                onChange={handleChange}
              />
              <label>NO</label>
            </div>
          </div>
          <div className={style.form_header}>
            <h1>Any Geographic Preferences?</h1>
            <div className={style.option_container}>
              <input
                type="radio"
                value="Thailand"
                name="preferences"
                onChange={handleChange}
              />
              <label>Thailand</label>
              <input
                type="radio"
                value="Bali"
                name="preferences"
                onChange={handleChange}
              />
              <label>Bali</label>
              <input
                type="radio"
                value="Australia"
                name="preferences"
                onChange={handleChange}
              />
              <label>Australia</label>
              <input
                type="radio"
                value="Sri Lanka"
                name="preferences"
                onChange={handleChange}
              />
              <label>Sri Lanka</label>
              <input
                type="radio"
                value="Dubai"
                name="preferences"
                onChange={handleChange}
              />
              <label>Dubai</label>
              <input
                type="radio"
                value="North India"
                name="preferences"
                onChange={handleChange}
              />
              <label>North India</label>
              <input
                type="radio"
                value="South India"
                name="preferences"
                onChange={handleChange}
              />
              <label>South India</label>
              <input
                type="radio"
                value="Maharashtra & Goa"
                name="preferences"
                onChange={handleChange}
              />
              <label>Maharashtra & Goa</label>
              <input
                type="radio"
                value="Europe"
                name="preferences"
                onChange={handleChange}
              />
              <label>Europe</label>
            </div>
          </div>
          <div className={style.form_header}>
            <h1>Which age bracket do you fall into?</h1>
            <div className={style.option_container}>
              <input
                type="radio"
                value="Below 25"
                name="age"
                onChange={handleChange}
              />
              <label>Below 25</label>
              <input
                type="radio"
                value="25 TO 35"
                name="age"
                onChange={handleChange}
              />
              <label>25 TO 35</label>
              <input
                type="radio"
                value="36 TO 55"
                name="age"
                onChange={handleChange}
              />
              <label>36 TO 55</label>
              <input
                type="radio"
                value="55 Above"
                name="age"
                onChange={handleChange}
              />
              <label>55 Above</label>
            </div>
          </div>
          <div className={style.form_header}>
            <h1>What are you in your professional life?</h1>
            <div className={style.option_container}>
              <input
                type="radio"
                value="Salaried"
                name="profession"
                onChange={handleChange}
              />
              <label>Salaried</label>
              <input
                type="radio"
                value="Business Person"
                name="profession"
                onChange={handleChange}
              />
              <label>Business Person</label>
              <input
                type="radio"
                value="Agriculture"
                name="profession"
                onChange={handleChange}
              />
              <label>Agriculture</label>
              <input
                type="radio"
                value="Retired"
                name="profession"
                onChange={handleChange}
              />
              <label>Retired</label>
              <input
                type="radio"
                value="Other"
                name="profession"
                onChange={handleChange}
              />
              <label>Other</label>
            </div>
          </div>
          <div className={style.form_button}>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};
