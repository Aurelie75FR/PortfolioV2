import React, { useState } from "react";
import ReactMapGL from "react-map-gl";
import "../../styles/Contact.css";

// const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN;
const MAPBOX_TOKEN =
  "pk.eyJ1IjoiZGV2YXVyZWxpZSIsImEiOiJja3ViZmtjYnEwcTh3MzJsOXhsOWlhdmJyIn0.M4T8NOAoyst2wahkpOS65w";
const MAPBOX_MAP_STYLE = "mapbox://styles/devaurelie/ckubgga98686917o32cl2lwo9"

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
        mapStyle={MAPBOX_MAP_STYLE}
      />
    </div>
  );
}

export default Map;
