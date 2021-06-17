import React, { useState } from "react";
import { Footer } from "./Footer";
import style from "./Properties.module.css";
import { Tabs, Tab } from "@material-ui/core";
export const MyProfile = () => {
  const [value, setValue] = useState(0);
  const handleTabs = (e, val) => {
    console.log(val);
    setValue(val);
  };
  return (
    <div>
      <div>
        <div>
          <div className={style.ribbon}>
            <li>
              Home / <span>My Profile</span>
            </li>
          </div>
          <div style={{ padding: 10, marginTop: "3%" }}>
            <Tabs
              value={value}
              onChange={handleTabs}
              className={style.footer_tab}
            >
              <Tab label="Profile" />
              <Tab label="Change Password" />
              <Tab label="Change Profile Picture" />
            </Tabs>
            <TabelPanel value={value} index={0}>
              <form className={style.form}>
                <label>First Name</label>
                <input type="text" value="Prashanth" />
                <label>Last Name</label>
                <input type="text" value="Vengala" />
                <br />
                <label>Email</label>
                <input type="text" value="prash2057@gmail.com" />
                <label style={{ marginLeft: 50 }}>Mobile</label>
                <input type="text" value="8686262279" />
                <div className={style.btn}>
                  <button style={{ float: "right" }}>Save Details</button>
                </div>
              </form>
            </TabelPanel>
            <TabelPanel value={value} index={1}>
              <form className={style.form}>
                <label>Old Password</label>
                <input type="text" placeholder="Current Password" />
                <label>New Password</label>
                <input type="text" placeholder="New Password" />
                <br />
                <label>Re-enter password</label>
                <input type="text" placeholder="Confirm New Password" />
                <div className={style.btn}>
                  <button style={{ float: "right" }}>Change Password</button>
                </div>
              </form>
            </TabelPanel>
            <TabelPanel value={value} index={2}>
              <form className={style.form}>
                <div>
                  <img
                    src="https://d2v8elt324ukrb.cloudfront.net/static/dashboard/img/avatars/male.cc4fc62d561f.png"
                    alt="profile"
                    width="100px"
                    height="100px"
                  />
                </div>
                <div>
                  <label>Please choose image to upload</label>
                  <input type="file" />
                  <div className={style.btn}>
                    <button>Update Image</button>
                  </div>
                </div>
              </form>
            </TabelPanel>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

function TabelPanel(props) {
  const { children, value, index } = props;
  return <div>{value === index && <p>{children}</p>}</div>;
}
