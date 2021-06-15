import React, { useState } from "react";
import {
  GoogleMap,
  withGoogleMap,
  withScriptjs,
  Marker,
  InfoWindow,
} from "react-google-maps";
import { Info } from "../../Carasol/Carasol";

function Map2() {
  const [selectedPark, setSelectedPark] = useState(null);

  return (
    <div>
      <GoogleMap
        defaultZoom={10}
        defaultCenter={{ lat: 45.4211, lng: -75.6903 }}
      >
        {Info.map((mark) => (
          <Marker
            key={mark.id}
            position={{
              lat: mark.latitude,
              lng: mark.longitude,
            }}
            onClick={() => {
              setSelectedPark(mark);
            }}
          />
        ))}
        {selectedPark && (
          <InfoWindow
            position={{
              lat: selectedPark.latitude,
              lng: selectedPark.longitude,
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
