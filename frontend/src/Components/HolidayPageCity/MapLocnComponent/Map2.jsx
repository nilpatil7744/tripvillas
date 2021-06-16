import styled from "styled-components";
import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  GoogleMap,
  withGoogleMap,
  withScriptjs,
  Marker,
  InfoWindow,
} from "react-google-maps";
import { useSelector } from "react-redux";

import Loadingg from "../../Loading/Loadingg";
export const Mapstyle = styled.div`
  width: 573px;
  height: 800px;
  margin-top: -50px;
`;
function Map2({ location }) {
  const [selectedPark, setSelectedPark] = useState(null);
  const [Info2, setInfo] = useState([]);
  const [isLoading, setLoadng] = useState(false);
  const searchq = useSelector((state) => state.search.todos);
  const searchq2 = useSelector((state) => state.search.todos2);

  const handleChange = () => {
    axios
      .get(`http://localhost:8001/hotels?city=${searchq}`)
      .then((res) => {
        console.log(res.data);
        setInfo(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  console.log(Info2, "phone");
  useEffect(() => {
    handleChange();
    handleFruits();
  }, []);

  const handleFruits = () => {
    setLoadng(true);
    const requestParam = {
      method: "get",
      url: `http://localhost:8001/hotels?city=${searchq2}`,
    };
    axios(requestParam)
      .then((response) => {
        console.log(response.data.data);
        setInfo(response.data.data);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoadng(false);
      });
  };

  console.log(Info2.latitude, "mim");

  if (isLoading) return <Loadingg />;
  return (
    <div>
      <GoogleMap defaultZoom={5} defaultCenter={{ lat: 20.5937, lng: 78.9629 }}>
        {Info2.map((mark) => (
          <Marker
            key={mark.id}
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
            <div style={{ height: "160px", width: "150px" }}>
              <img
                src={selectedPark.hotImg1}
                alt=""
                style={{ height: "90px", width: "150px" }}
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

const MapWrapped = withScriptjs(withGoogleMap(Map2));
function GoogleMap2() {
  return (
    <div>
      <Mapstyle>
        <MapWrapped
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDV4NIiCAOs_91U_dXuN66AJ9Uzbjykvk4`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </Mapstyle>
    </div>
  );
}

export default GoogleMap2;
