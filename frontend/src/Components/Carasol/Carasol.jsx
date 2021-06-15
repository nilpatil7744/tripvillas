import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../Styles/Carasol.css";
import { Link } from "react-router-dom";
import { Info } from "./Carasol";
import { useEffect, useState } from "react";
import axios from "axios";

const Carasol = () => {
  const [text, settext] = useState([]);

  const handleData = () => {
    const requestParam = {
      method: "get",
      url: "http://localhost:8001/hotels",
    };
    axios(requestParam)
      .then((response) => {
        console.log(response.data.data);
        settext(response.data.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    handleData();
  });
  const settings = {
    infinite: true,
    speed: 1200,
    slidesToShow: 4,
    slidesToScroll: 5,
    className: "slides",
  };

  return (
    <div style={{ marginTop: "80px" }}>
      <div
        style={{
          textAlign: "left",
          marginLeft: "20px",
        }}
      >
        <h2 style={{ fontWeight: "lighter" }}>Top Destinations</h2>
      </div>
      <Slider {...settings}>
        {text.map((item, index) => (
          <div>
            <div className="bg-image">
              <Link to={`/holiday-homes/${item._id}`}>
                <img
                  src={item.hotImg1}
                  style={{
                    height: "180px",
                    width: "300px",
                  }}
                  alt=""
                />
              </Link>

              <h2 className="bg-text">
                {item.city} <br /> <a href>Vacation Rental </a>
              </h2>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export { Carasol };
