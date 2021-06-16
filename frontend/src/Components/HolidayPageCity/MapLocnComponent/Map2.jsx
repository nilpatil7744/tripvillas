import axios from "axios";
import React, { useEffect, useState } from "react";
import { GoogleMap, withGoogleMap, withScriptjs, Marker, InfoWindow,} from "react-google-maps";
import { useSelector } from "react-redux";
import { loadData } from "../../../utils/localStorage";
import Loadingg from "../../Loading/Loadingg";

function Map2() {
  const [selectedPark, setSelectedPark] = useState(null);
  const [Info2, setInfo] = useState([]);
  const [isLoading, setLoadng] = useState(false);
  const location = useSelector((state) => state.pricing.location);

  useEffect(() => {
    handleLocation();
  }, []);

  const handleLocation = () => {
    setLoadng(true);
    axios.get(`http://localhost:8001/hotels?city=${location || loadData('locn')}`)
      .then((response) => {
        setInfo(response.data.data);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoadng(false);
      });
  };

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
                src={selectedPark.headimage}
                alt=""
                style={{ height: "90px", width: "150px" }}
              />
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
      <div
        style={{
          width: "550px",
          height: "680px",
          marginLeft: "1%",
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

export default GoogleMap2;
