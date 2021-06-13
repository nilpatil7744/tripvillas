import axios from "axios";
import React, { useEffect, useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import { BsFilterLeft } from "react-icons/bs";
import { MdDateRange } from "react-icons/md";
import { NavBar } from "../Home_NavBar/NavBar";
import styles from "./Module2.module.css";
import Modal from "react-modal";
import GoogleMap2 from "./MapLocnComponent/Map2";
import homeSearchStyles from "../Home/Home_Search/HomeSearch.module.css";
import TextField from "@material-ui/core/TextField";
import DateRangePicker from "@material-ui/lab/DateRangePicker";
import AdapterDateFns from "@material-ui/lab/AdapterDateFns";
import LocalizationProvider from "@material-ui/lab/LocalizationProvider";
import Box from "@material-ui/core/Box";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

function MapLocation(props) {
  const [Info, setInfo] = useState([]);

  const [editModalIsOpen, setEditModalIsOpen] = useState(false);
  const [guest, setGuest] = useState("");
  const [query, setQuery] = useState("");

  const [value, setValue] = useState([null, null]);
  const [ModalIsopen2, setModalIsopen2] = useState(false);

  const handleGuest = (event) => {
    setGuest(event.target.value);
  };

  const handleChange = () => {
    console.log(query);
    axios
      .get(`http://localhost:8001/hotels?city=${query}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
          onClick={() => setModalIsopen2(true)}
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
          onClick={() => setEditModalIsOpen(true)}
        >
          <MdDateRange /> MODIFY SEARCH
        </button>
      </div>

      {/* ////////////////////////////1 */}

      <Modal
        isOpen={editModalIsOpen}
        onRequestClose={() => setEditModalIsOpen(false)}
        className={styles.editModal}
      >
        <h1 style={{ color: "black", marginTop: "10px" }}>Modify Search</h1>
        <hr />

        <div>
          <div className={homeSearchStyles.inp_location}>
            <span className={homeSearchStyles.searchIcon}>
              <SearchIcon />
            </span>
            <input
              type="text"
              name="location"
              placeholder="Location"
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <br />
          <div style={{ display: "flex" }}>
            <br />
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DateRangePicker
                startText="Check In"
                endText="Check Out"
                value={value}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
                renderInput={(startProps, endProps) => (
                  <React.Fragment>
                    <TextField
                      {...startProps}
                      helperText=""
                      className={homeSearchStyles.chckk}
                      size="small"
                    />
                    <TextField
                      {...endProps}
                      helperText=""
                      className={homeSearchStyles.chckk}
                      size="small"
                    />
                  </React.Fragment>
                )}
              />
            </LocalizationProvider>
            <br />

            <div>
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel
                    size="small"
                    id="guest-select-label"
                    className={homeSearchStyles.guestInput}
                  >
                    Select Guests
                  </InputLabel>
                  <Select
                    labelId="guest-select-label"
                    id="guest-select"
                    autoWidth={true}
                    size="small"
                    sx={{ minWidth: "160px" }}
                    value={guest}
                    label="Select Guests"
                    onChange={handleGuest}
                  >
                    {new Array(50).fill(0).map((item, index) => {
                      return (
                        <MenuItem key={`${index}gsts`} value={index + 1}>
                          {index === 0
                            ? `${index + 1} guest`
                            : `${index + 1} guests`}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
              </Box>
            </div>
          </div>
        </div>

        <div className={styles.editModalButtons}>
          <br />
          <button onClick={handleChange}>Search</button>
          <button
            onClick={() => setEditModalIsOpen(false)}
            style={{ padding: "9px", width: "25%", marginLeft: "15px" }}
          >
            Cancel
          </button>
        </div>
      </Modal>

      {/* ///////////////////////// */}

      {/* 
>>>>>>>>>>>>>>>>>>>>>>>MODAL TO FOR CHECKBOX */}

      {/* //////////////////////////// 2*/}

      <Modal
        isOpen={ModalIsopen2}
        onRequestClose={() => setModalIsopen2(false)}
      >
        <div style={{ display: "flex" }}>
          <div style={{ marginLeft: "90px" }}>
            <h2>Features</h2>
            <input type="checkbox" />
            <label style={{ fontSize: "20px", color: "black" }}>
              Swimming Pool
            </label>
            <br /> <br />
            <input type="checkbox" />
            <label style={{ fontSize: "20px", color: "black" }}>
              Air Conditioner
            </label>
            <br /> <br />
            <input type="checkbox" />
            <label style={{ fontSize: "20px", color: "black" }}>
              {" "}
              Internet
            </label>
            <br /> <br />
            <input type="checkbox" />
            <label style={{ fontSize: "20px", color: "black" }}>
              Television
            </label>
            <br /> <br />
            <input type="checkbox" />
            <label style={{ fontSize: "20px", color: "black" }}>Parking</label>
            <br /> <br />
            <input type="checkbox" />
            <label style={{ fontSize: "20px", color: "black" }}>
              Housekeeping
            </label>
            <br /> <br />
            <input type="checkbox" />
            <label style={{ fontSize: "20px", color: "black" }}>
              Functional Kitchen
            </label>
            <br /> <br />
            <input type="checkbox" />
            <label style={{ fontSize: "20px", color: "black" }}>
              Washing Machine
            </label>
            <br /> <br />
            <input type="checkbox" />
            <label style={{ fontSize: "20px", color: "black" }}>Spa</label>
            <br /> <br />
            <input type="checkbox" />
            <label style={{ fontSize: "20px", color: "black" }}>Gym</label>
            <br /> <br />
            <input type="checkbox" />
            <label style={{ fontSize: "20px", color: "black" }}>
              Cook On Call
            </label>
          </div>
          {/* 
                             Second list */}
          <div style={{ marginLeft: "190px" }}>
            <h2>Property Type</h2>
            <input type="checkbox" />
            <label style={{ fontSize: "20px", color: "black" }}>
              Luxury Yacht
            </label>
            <br /> <br />
            <input type="checkbox" />
            <label style={{ fontSize: "20px", color: "black" }}>
              Camping Ground
            </label>
            <br /> <br />
            <input type="checkbox" />
            <label style={{ fontSize: "20px", color: "black" }}>
              Apartment
            </label>
            <br /> <br />
            <input type="checkbox" />
            <label style={{ fontSize: "20px", color: "black" }}>Villa</label>
            <br /> <br />
            <input type="checkbox" />
            <label style={{ fontSize: "20px", color: "black" }}>Hostel</label>
            <br /> <br />
            <input type="checkbox" />
            <label style={{ fontSize: "20px", color: "black" }}>
              Serviced Apartment
            </label>
            <br /> <br />
            <input type="checkbox" />
            <label style={{ fontSize: "20px", color: "black" }}>
              Bed and Breakfast
            </label>
            <br /> <br />
            <input type="checkbox" />
            <label style={{ fontSize: "20px", color: "black" }}>
              Boutique Hotel
            </label>
            <br /> <br />
            <input type="checkbox" />
            <label style={{ fontSize: "20px", color: "black" }}>Bungalow</label>
            <br /> <br />
            <input type="checkbox" />
            <label style={{ fontSize: "20px", color: "black" }}>Caravan</label>
            <br /> <br />
            <input type="checkbox" />
            <label style={{ fontSize: "20px", color: "black" }}>
              Guesthouse
            </label>
          </div>

          <div style={{ marginLeft: "190px" }}>
            <br /> <br />
            <input type="checkbox" />
            <label style={{ fontSize: "20px", color: "black" }}>Villa</label>
            <br /> <br />
            <input type="checkbox" />
            <label style={{ fontSize: "20px", color: "black" }}>Hostel</label>
            <br /> <br />
            <input type="checkbox" />
            <label style={{ fontSize: "20px", color: "black" }}>
              Serviced Apartment
            </label>
            <br /> <br />
            <input type="checkbox" />
            <label style={{ fontSize: "20px", color: "black" }}>
              Bed and Breakfast
            </label>
            <br /> <br />
            <input type="checkbox" />
            <label style={{ fontSize: "20px", color: "black" }}>
              Boutique Hotel
            </label>
            <br /> <br />
            <input type="checkbox" />
            <label style={{ fontSize: "20px", color: "black" }}>Bungalow</label>
            <br /> <br />
            <input type="checkbox" />
            <label style={{ fontSize: "20px", color: "black" }}>Caravan</label>
            <br /> <br />
            <input type="checkbox" />
            <label style={{ fontSize: "20px", color: "black" }}>
              Guesthouse
            </label>
            <br />
            <br />
            <hr />
            <h2>Price</h2>
            <input type="checkbox" />
            <label style={{ fontSize: "20px", color: "red" }}>
              High To Low
            </label>
            <br /> <br />
            <input type="checkbox" />
            <label style={{ fontSize: "20px", color: "red" }}>
              Low To High
            </label>
          </div>
        </div>

        <br />
        <hr />
        <div className={styles.editModalButtons}>
          <br />

          <button>Apply</button>
          <button
            onClick={() => setModalIsopen2(false)}
            style={{ padding: "9px", width: "25%", marginLeft: "15px" }}
          >
            Cancel
          </button>
        </div>
      </Modal>

      {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
      {/* ///////////////////////// */}
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
