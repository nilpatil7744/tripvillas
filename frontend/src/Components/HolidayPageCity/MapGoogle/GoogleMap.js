import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  GoogleMap,
  withGoogleMap,
  withScriptjs,
  Marker,
  InfoWindow,
} from "react-google-maps";

function Map() {
  const [selectedPark, setSelectedPark] = useState(null);
  const [text3, setText3] = useState([]);
  const handleData = () => {
    const requestParam = {
      method: "get",
      url: "http://localhost:8001/hotels",
    };
    axios(requestParam)
      .then((response) => {
        console.log(response.data.data, "nilo");
        setText3(response.data.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    handleData();
  }, []);

  console.log(selectedPark, "pop");

  return (
    <div>
      <GoogleMap
        defaultZoom={10}
        defaultCenter={{ lat: 8.111082, lng: 77.556921 }}
      >
        {text3.map((mark) => (
          <Marker
            position={{
              lat: Number(mark.latitude),
              lng: Number(mark.longitude),
            }}
            onClick={() => {
              setSelectedPark(mark);
            }}
          />
        ))}
        {selectedPark && (
          <InfoWindow
            position={{
              lat: Number(selectedPark.latitude),
              lng: Number(selectedPark.longitude),
            }}
            onClick={() => setSelectedPark(null)}
          >
            <div style={{ width: "170px" }}>
              <img
                src={selectedPark.hotImg1}
                alt=""
                style={{ height: "100px", width: "170px" }}
              />
              <h5>Ref id #{selectedPark._id}</h5>
              {selectedPark.tagsArr.map((item) => (
                <a href style={{ color: "#1e87f0" }}>
                  {item} |
                </a>
              ))}
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
      ;
    </div>
  );
}

const MapWrapped = withScriptjs(withGoogleMap(Map));
function GoogleMap1() {
  return (
    <div>
      <div
        style={{
          width: "94%",
          height: "400px",
          marginLeft: "2%",
          marginTop: "180px",
        }}
      >
        <MapWrapped
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDV4NIiCAOs_91U_dXuN66AJ9Uzbjykvk4`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    </div>
  );
}

export default GoogleMap1;
