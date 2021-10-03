import React, { useState } from "react";
import ReactMapGL from "react-map-gl";
import "../../styles/Contact.css"

const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN;

function Map() {
  const [viewport] = useState({
    latitude: 48.84,
    longitude: 2.4,
    zoom: 13,
  });

  return (
    <div className="mapbox">
      <ReactMapGL
        width="350px"
        height="100vh"
        {...viewport}
        mapboxApiAccessToken={MAPBOX_TOKEN}
        mapStyle="mapbox://styles/devaurelie/ckubgga98686917o32cl2lwo9"
      />
    </div>
  );
}

export default Map;
