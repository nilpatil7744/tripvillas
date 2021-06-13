import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../Styles/Carasol.css";
import { Link } from "react-router-dom";
import { Info } from "./Carasol";

const Carasol = () => {
  const settings = {
    infinite: true,
    speed: 1200,
    slidesToShow: 4,
    slidesToScroll: 5,
    className: "slides",
  };

  return (
    <div style={{ marginTop: "150px" }}>
      <div
        style={{
          textAlign: "left",
          marginLeft: "20px",
        }}
      >
        <h2 style={{ fontWeight: "lighter" }}>Top Destinations</h2>
      </div>
      <Slider {...settings}>
        {Info.map((item, index) => (
          <div>
            <div className="bg-image">
              <Link to={`${item.path}/${item.Ref_id}`}>
                <img
                  src={item.headimage}
                  style={{
                    height: "180px",
                    width: "300px",
                  }}
                  alt=""
                />
              </Link>

              <h4 className="bg-text">
                {item.titile} <br /> <a href>{item.headtext} </a>
              </h4>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export { Carasol };
