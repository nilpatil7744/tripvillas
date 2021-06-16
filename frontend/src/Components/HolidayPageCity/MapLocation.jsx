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
import { useDispatch, useSelector } from "react-redux";
import Loadingg from "../Loading/Loadingg";
import { loadData, saveData } from "../../utils/localStorage";
import { Link } from "react-router-dom";
import { setPriceVariables } from "../../Redux/Pricing_Final/action";

export default function MapLocation(props) {
  const location = useSelector((state) => state.pricing.location);
  const checkinDate = useSelector(state => state.pricing.checkinDate);
  const checkOutDate = useSelector(state => state.pricing.checkOutDate);
  const noOfGuest = useSelector(state => state.pricing.noOfGuest);
  const [Info2, setInfo] = useState([]);
  const [editModalIsOpen, setEditModalIsOpen] = useState(false);
  const [guest, setGuest] = useState(noOfGuest);
  const [query, setQuery] = useState(false);
  const [value, setValue] = useState([checkinDate, checkOutDate]);
  const [ModalIsopen2, setModalIsopen2] = useState(false);
  const [isLoading, setLoadng] = useState(true);
  const [isError, setisError] = useState(false);
  const dispatch = useDispatch();

  if (location) {
    saveData('locn', location);
  }

  const payload = {
    location: query,
    checkinDate: value[0],
    checkOutDate: value[1],
    noOfGuest: guest,
  }

  useEffect(() => {
    handleFruits();
  }, []);

  const handleGuest = (event) => {
    setGuest(event.target.value);
  };

  const handleChange = () => {
    setLoadng(true);
    setisError(false);
    saveData('locn', query);
    setEditModalIsOpen(false);

    const pricingAction = setPriceVariables(payload)
    dispatch(pricingAction);
    axios.get(`http://localhost:8001/hotels?city=${query || loadData('locn')}`)
      .then((res) => {
        console.log(res.data);
        setInfo(res.data.data);
      })
      .catch((error) => {
        console.log(error);
        setisError(true);
      })
      .finally(() => {
        setLoadng(false);
      });
  };
  const Nil = {
    data: query,
  };

  const handleFruits = () => {
    setLoadng(true);
    setisError(false);
    axios.get(`http://localhost:8001/hotels?city=${location || loadData('locn')}`)
      .then((response) => {
        console.log(response.data.data);
        setInfo(response.data.data);
      })
      .catch((err) => {
        console.log(err)
        setisError(true)
      })
      .finally(() => {
        setLoadng(false);
      });
  };


  return (<>
    {isLoading ? <Loadingg /> :
      isError ? <h1>Error</h1> :
        <div>
          <NavBar />
          <div
            style={{
              width: "60%",
              padding: "13px",
            }}>
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

          {/* MODAL TO FOR CHECKBOX  */}

          <Modal
            isOpen={ModalIsopen2}
            onRequestClose={() => setModalIsopen2(false)}
            className={styles.editModal2}
          >
            <div style={{ display: "flex" }}>
              <div style={{ marginLeft: "90px" }}>
                <h2>Features</h2>
                <input type="checkbox" style={{ height: "16px", width: "16px" }} />
                <label style={{ fontSize: "15px", color: "black" }}>
                  Swimming Pool
                </label>
                {['Air Conditioner', 'Internet', 'Television', 'Parking', 'Housekeeping', 'Functional Kitchen', 'Washing Machine', 'Spa', 'Gym', 'Cook On Call'].map(item => <React.Fragment key={item}>
                  <br /> <br />
                  <input type="checkbox" style={{ height: "16px", width: "16px" }} />
                  <label style={{ fontSize: "15px", color: "black" }}>Spa</label> </React.Fragment>)}
              </div>
              {/* Second list */}
              <div style={{ marginLeft: "190px" }}>
                <h2>Property Type</h2>
                <input type="checkbox" style={{ height: "16px", width: "16px" }} />
                <label style={{ fontSize: "15px", color: "black" }}>
                  Luxury Yacht
                </label>
                {['Camping Ground', 'Apartment', 'Villa', 'Hostel', 'Serviced Apartment', 'Bed and Breakfast', 'Boutique Hotel', 'Bungalow', 'Caravan', 'Guesthouse'].map((item) => <React.Fragment key={item}> <br /> <br />
                  <input type="checkbox" style={{ height: "16px", width: "16px" }} />
                  <label style={{ fontSize: "15px", color: "black" }}>{item}</label> </React.Fragment>)}
              </div>
              <div style={{ marginLeft: "190px" }}>
                {['Villa', 'Hostel', 'Serviced Apartment', 'Bed and Breakfast', 'Boutique Hotel', 'Bungalow', 'Caravan', 'Guesthouse'].map((item) => <React.Fragment key={item}> <br /> <br />
                  <input type="checkbox" style={{ height: "16px", width: "16px" }} />
                  <label style={{ fontSize: "15px", color: "black" }}>{item}</label> </React.Fragment>)}
                <br /> <br /> <hr />
                <h2>Price</h2>
                <input type="checkbox" style={{ height: "16px", width: "16px" }} />
                <label style={{ fontSize: "15px", color: "red" }}> High To Low</label>
                <br /> <br />
                <input type="checkbox" style={{ height: "16px", width: "16px" }} />
                <label style={{ fontSize: "15px", color: "red" }}>Low To High</label>
              </div>
            </div>
            <br /><hr />
            <div className={styles.editModalButtons}>
              <br />
              <button>Apply</button>
              <button
                onClick={() => setModalIsopen2(false)}
                style={{ padding: "9px", width: "25%", marginLeft: "15px" }} >
                Cancel
              </button>
            </div>
          </Modal>

          <div
            style={{
              display: "flex",
              overflow: "auto",
              alignItems: "flex-start",
              height: "100vh",
            }}>
            <div style={{ overflow: "auto" }}>
              {Info2?.map((item, index) => (
                <Link style={{ textDecoration: 'none' }} key={`locn${index + 1}`} to={`./${item._id}/alor`}>
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
                </Link>
              ))}
            </div>
            <div style={{ top: "0", position: "sticky" }}>
              <GoogleMap2 location={Nil} />
            </div>
          </div>
        </div>
    }</>
  )
}