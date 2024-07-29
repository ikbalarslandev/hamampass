"use client";
import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { useState, useEffect } from "react";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 38.513499459864306,
  lng: 43.37828351185324,
};

const GoogleMapComponent = () => {
  const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  const [key, setKey] = useState(googleMapsApiKey);

  useEffect(() => {
    setKey(googleMapsApiKey);
  }, [googleMapsApiKey]);

  if (!googleMapsApiKey) {
    return <div>Error: Google Maps API key is missing.</div>;
  }

  return (
    key && (
      <LoadScript googleMapsApiKey={key}>
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
          <Marker position={center} />
        </GoogleMap>
      </LoadScript>
    )
  );
};

export default GoogleMapComponent;
