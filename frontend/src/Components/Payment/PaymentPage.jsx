import React, { useState } from "react";
import { NavBar } from "../Home_NavBar/NavBar";
import { Atm, Hoteldetail, MainDiv, Total, Input1, Input3 } from "./Payment";
import Confetti from "react-confetti";
import styles from "../HolidayPageCity/Map.module.css";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { loadData, saveData } from "../../utils/localStorage";
function PaymentPage() {
  const myPrice = useSelector((state) => state.pricing.price);
  if (myPrice) {
    saveData("myPrice", myPrice);
  }
  const price = myPrice ? myPrice : Number(loadData("myPrice"));
  var obj1 = {
    name: "",
    surname: "",
    card: "",
    month: "",
    cvv: "",
  };
  const [editModalIsOpen, setEditModalIsOpen] = useState(false);
  const [query, setQuery] = useState(obj1);
  const [show, setShow] = useState(false);
  const [editModalIsOpen3, setEditModalIsOpen3] = useState(false);
  const { name, surname, card, month, cvv } = query;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setQuery({
      ...query,
      [name]: value,
    });
  };

  const handleDisplay = () => {
    setEditModalIsOpen(false);
    setShow(false);
  };

  const handleAdd = () => {
    console.log(query.card.length);
    if (
      query.name !== "" &&
      query.surname !== "" &&
      query.card !== "" &&
      query.card.length === 12 &&
      query.month !== "" &&
      query.cvv !== "" &&
      query.cvv.length === 3
    ) {
      setEditModalIsOpen(true);
      setShow(true);
      console.log(query);
    } else {
      if (query.name === "") {
        alert("Please Enter Name");
      } else if (query.surname === "") {
        alert("Please Enter Surname");
      } else if (query.card === "") {
        alert("Please Enter Card Number");
      } else if (query.card !== 12) {
        alert("Please Enter Valid Card");
      } else if (query.month === "") {
        alert("Please Enter Month details properly");
      } else if (query.cvv === "") {
        alert("Please Enter CVV");
      } else if (query.cvv !== 3) {
        alert("Please Enter correct CVV");
      }
    }
  };
  return (
    <div>
      <NavBar />
      <br />
      <div style={{ display: "flex" }}>
        <div>
          <MainDiv>
            <div style={{ textAlign: "left" }}>
              <h3 style={{ fontsize: "25.75px", color: "white" }}>
                Book Tension Free
              </h3>
              <h3>
                <li
                  style={{
                    fontsize: "20.75px",
                    color: "white",
                    fontweight: "lighter",
                    marginTop: "5px",
                  }}
                >
                  Your payments are secured by Tripvillas.
                </li>

                <li
                  style={{
                    fontsize: "20.75px",
                    color: "white",
                    fontweight: "lighter",
                    marginTop: "5px",
                  }}
                >
                  The amounts are released to verified owners in advance while
                  new owners are paid post your check-in <br /> and
                  confirmation.
                </li>
                <li
                  style={{
                    fontsize: "20.75px",
                    color: "white",
                    fontweight: "lighter",
                    marginTop: "5px",
                  }}
                >
                  You can contact us if you face any issues during checkin or
                  your stay.
                </li>
              </h3>
            </div>
          </MainDiv>
          <Hoteldetail>
            <div>
              <img
                src="https://d2vcelvjdj7n25.cloudfront.net/media/property_photos/original/64219945/bd665473dc2f11e985440a8e1b1ce4da.jpg"
                alt=""
                style={{ height: "200px", marginRight: "600px" }}
              />
            </div>
            <div
              style={{
                marginTop: "-200px",
                marginLeft: "300px",
                textAlign: "left",
              }}
            >
              <h3
                style={{
                  fontWeight: "300",
                  color: "#000000",
                }}
              >
                Property Ref Id #64219945 <br />
                <h2
                  style={{
                    fontWeight: "300",
                    color: "#000000",
                  }}
                >
                  Brilliant rooms in our Home Stay
                </h2>
                <br />
                <a
                  href
                  style={{
                    fontWeight: "300",
                    color: "#000000",
                    marginTop: "-40px",
                  }}
                >
                  Goa,India
                </a>
              </h3>
            </div>

            {/* 
            ///////// */}
            <br />
            <Total>
              <div style={{ textAlign: "left", marginLeft: "20px" }}>
                <h2
                  style={{
                    fontWeight: "300",
                    color: "#000000",
                    marginRight: "60px",
                  }}
                >
                  Sub Total
                  .............................................................................................................
                  ₹ {price}
                </h2>
                <h2
                  style={{
                    fontWeight: "300",
                    color: "#000000",
                    marginRight: "60px",
                  }}
                >
                  Discount
                  .............................................................................................................
                  ₹500.00
                </h2>
                <h2
                  style={{
                    fontWeight: "300",
                    color: "#000000",
                    marginRight: "60px",
                  }}
                >
                  Tax
                  .......................................................................................................................
                  ₹500.00
                </h2>
                <hr />
                <h1>
                  Total
                  ..................................................................................
                  ₹{price}
                </h1>
                <hr />
                <h3
                  style={{
                    fontWeight: "300",
                    color: "#000000",
                    marginRight: "60px",
                  }}
                >
                  Rate Plan <br />
                  No meals provided (European Plan)
                </h3>

                <h3
                  style={{
                    fontWeight: "300",
                    color: "#000000",
                  }}
                >
                  Friendly Cancellation Policy No charges will be levied if
                  booking is canceled 15 days prior to check-in. If cancellation
                  is done between 6 to 15 days <br />
                  prior to check-in, 50% of the total booking amount will be
                  charged. Post that, there will be no refund.
                </h3>
                <h3
                  style={{
                    fontWeight: "300",
                    color: "#000000",
                  }}
                >
                  House Rules <br />
                  Loud Music not allowed. Pets not allowed. NO SMOKING IN THE
                  ROOM.
                </h3>
              </div>
              <br />
            </Total>
          </Hoteldetail>
        </div>
        <Atm>
          <div
            style={{ border: "1px solid #FAA05A", backgroundColor: "#FFF6EE" }}
          >
            <div
              style={{
                color: "#FAA05A",
                fontyweight: "bold",
                fontsize: "25px",
                padding: "10px",
              }}
            >
              Book fast. Your dates might get booked by someone else.
            </div>
          </div>
          <br />
          <div
            style={{
              border: "3px solid #3b9ff3",
              textAlign: "left",
              padding: "10px",
            }}
          >
            <h3>
              ✅ <br />
              Put your credit/debit card on file.
              <br /> Since this booking is on 'Request To Book', We will only
              charge your card once <br />
              owner accepts the booking. <br />
              This is 100% Secure <br />
              We DO NOT store/save your credit card details. We use Stripe.com.
              Stripe has <br />
              been audited by an independent PCI Qualified Security Assessor
              (QSA) and is <br />
              certified as a PCI Level 1 Service Provider.
            </h3>
          </div>
          <br />
          <div>
            <div style={{ backgroundColor: "#F8F8F8", padding: "10px" }}>
              <p style={{ textAlign: "left" }}>
                By clicking 'Agree & Continue', you are agreeing to our Terms &
                Conditions, Privacy Policy, Booking policies like cancellation
                policies, house rules.
              </p>
            </div>
            <br />
            <button
              style={{
                height: "54.8px",
                width: "600px",
                backgroundColor: "#1E87F0",
                color: "whitesmoke",
                fontweight: "bold",
                bordercolor: "none",
              }}
              onClick={() => setEditModalIsOpen3(true)}
            >
              AGREE TERMS & CONDITIONS
            </button>
          </div>
          <br /> <br />
          <Modal
            isOpen={editModalIsOpen3}
            style={{ height: "200px", width: "200px" }}
            className={styles.editModal}
          >
            <div style={{ marginTop: "20px" }}>
              <div style={{ marginLeft: "330px" }}>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRd0jf5ws5VNDS-T7d9Q70G6o3t07zExvQjA&usqp=CAU"
                  alt=""
                  style={{ height: "30px" }}
                />
                <img
                  src="data:image/png;base64,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"
                  alt=""
                  style={{ height: "30px", marginLeft: "10px" }}
                />
              </div>
            </div>
            <br /> <br />
            <div>
              <form autocomplete="off">
                <div style={{ textAlign: "left" }}>
                  <Input1
                    type="text"
                    placeholder="Write ur Name"
                    onChange={handleChange}
                    value={name}
                    name="name"
                    style={{
                      marginLeft: "30px",
                      // backgroundColor: "#282828",
                      borderBottomColor: "red",
                      borderRight: "none",
                      borderLeft: "none",
                      borderTop: "none",
                      color: "black",
                      fontweight: "bold",
                      width: "210px",
                    }}
                    autocomplete="off"
                  />
                  <Input1
                    type="text"
                    placeholder="Last name"
                    onChange={handleChange}
                    value={surname}
                    name="surname"
                    style={{
                      marginLeft: "19px",
                      color: "black",
                      fontweight: "bold",
                      borderBottomColor: "red",
                      borderRight: "none",
                      borderLeft: "none",
                      borderTop: "none",
                    }}
                  />
                  <div style={{ marginRight: "20px" }}>
                    <div>
                      <Input1
                        type="text"
                        placeholder="Your Card Number"
                        className="register-input4"
                        onChange={handleChange}
                        value={card}
                        name="card"
                        style={{
                          width: "500px",

                          borderBottomColor: "red",
                          borderRight: "none",
                          borderLeft: "none",
                          borderTop: "none",
                          color: "black",
                          fontweight: "bold",
                        }}
                        autocomplete="off"
                      />
                    </div>
                    <div>
                      <Input3
                        type="text"
                        placeholder="02/2022"
                        className="register-input4"
                        onChange={handleChange}
                        value={month}
                        name="month"
                        style={{
                          width: "80px",
                          padding: "6px",

                          borderBottomColor: "red",
                          borderRight: "none",
                          borderLeft: "none",
                          borderTop: "none",
                          color: "black",
                          fontweight: "bold",
                        }}
                      />
                      <Input3
                        type="password"
                        placeholder="CVV"
                        className="register-Input34"
                        onChange={handleChange}
                        value={cvv}
                        name="cvv"
                        style={{
                          width: "50px",
                          padding: "6px",
                          marginLeft: "140px",

                          borderBottomColor: "red",
                          borderRight: "none",
                          borderLeft: "none",
                          borderTop: "none",
                          color: "black",
                          fontweight: "bold",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </form>
              <br />
              <button
                style={{
                  marginTop: "30px",
                  backgroundColor: "#0f7ae5",
                  color: "whitesmoke",
                  fontweight: "bold",
                  padding: "10px",
                  border: "1px solid gray",
                  width: "40%",
                  marginLeft: "30px",
                }}
                onClick={handleAdd}
              >
                CONFIRM PAYMENT
              </button>
              <button
                style={{
                  marginTop: "30px",
                  backgroundColor: "white",
                  color: "gray",
                  fontweight: "bold",
                  padding: "10px",
                  border: "1px solid gray",
                  width: "40%",
                  marginLeft: "30px",
                }}
                onClick={() => setEditModalIsOpen3(false)}
              >
                Cancel
              </button>
            </div>
          </Modal>
        </Atm>
      </div>
      {show ? (
        <Confetti
          recycle="true"
          numberOfPieces={80}
          width="1200px"
          height="2000px"
        />
      ) : null}

      {/* //////////////////ModAL */}

      <Modal
        isOpen={editModalIsOpen}
        onRequestClose={() => setEditModalIsOpen(false)}
      >
        <h3>Bookig ID: 1913957934839</h3>
        <h1
          style={{
            color: "green",
            fontweight: "bold",
            marginLeft: "40%",
            marginTop: "190px",
          }}
        >
          <img
            src="https://www.mavroxpay.com/img/done.png"
            alt=""
            style={{ height: "50px" }}
          />
          Payment Succesful
        </h1>
        <h1 style={{ color: "green", fontweight: "bold", marginLeft: "30%" }}>
          Congratulation Your Booking is Successfully
        </h1>

        <div className={styles.editModalButtons} style={{ marginTop: "-20px" }}>
          <br />

          <Link to="/">
            <button
              onClick={handleDisplay}
              style={{
                padding: "9px",
                width: "25%",
                marginLeft: "40%",
                backgroundColor: "#FFFFFF",
                color: "#333333",
                border: "1px solid gray",
              }}
            >
              Back to HomePage
            </button>
          </Link>
        </div>
      </Modal>
    </div>
  );
}

export default PaymentPage;
