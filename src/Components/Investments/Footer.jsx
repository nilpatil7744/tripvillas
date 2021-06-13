import React from "react";
import style from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer>
      <div className={style.container}>
        <div className={style.footer_bottom}>
          <div className={style.footer_bottom1}>
            <a href>
              <img
                src="https://d2v8elt324ukrb.cloudfront.net/static/new_template/img/logo.b01085f692cb.png"
                alt="Image Alternative text"
                title="Title"
                height="35px"
              ></img>
            </a>
            <p>
              Tripvillas offers verified, fully furnished holiday homes many of
              which come with resident caretakers. This allows you to holiday in
              comfort, style and without rushing your holiday.
            </p>
          </div>
          <div className={style.footer_bottom2}>
            <p>Incredible Offers on the Best Villas</p>
            <label>
              Enter Your E-mail Address
              <input type="text" />
            </label>
            <br />
            <span>*We Never Send Spam</span>
            <br></br>
            <button>Subscribe</button>
          </div>
          <div className={style.footer_bottom3}>
            <ul>
              <li>
                <a href>About Us</a>
                <br></br>
                <a href>Privacy Policy</a>
                <br></br>
                <a href>Terms of Use</a>
                <br></br>
                <a href>FAQs</a>
                <br></br>
                <a href>Contact Us</a>
                <br></br>
                <a href>Property Managers</a>
                <br></br>
                <a href>Holiday Communities</a>
              </li>
            </ul>
          </div>
          <div className={style.footer_bottom4}>
            <p>Have Questions ?</p>
            <a href>support@tripvillas.com</a>
            <img
              src="https://d2vcelvjdj7n25.cloudfront.net/static/images/playstore.png"
              alt="palystore"
              width="160px"
            />
            <img
              src="https://d2vcelvjdj7n25.cloudfront.net/static/images/appstore.png"
              alt="applestore"
              width="160px"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};
