import React, { useState } from "react";
import {
  GoogleMap,
  withGoogleMap,
  withScriptjs,
  Marker,
  InfoWindow,
} from "react-google-maps";
import { Info } from "../../Carasol/Carasol";

function Map() {
  const [selectedPark, setSelectedPark] = useState(null);

  return (
    <div>
      <GoogleMap
        defaultZoom={10}
        defaultCenter={{ lat: 45.4211, lng: -75.6903 }}
      >
        {Info.map((mark) => (
          <Marker
            position={{
              lat: mark.latitude,
              lng: mark.longitude,
            }}
          />
        ))}
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
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBWNQLRv3EWDkqWisSDetL5-7iuJYCGLfM`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    </div>
  );
}

export default GoogleMap1;
