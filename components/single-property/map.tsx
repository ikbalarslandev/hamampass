"use client";
import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 38.513499459864306,
  lng: 43.37828351185324,
};

const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string;

interface GoogleMapComponentProps {
  contact: number[];
}

const GoogleMapComponent: React.FC<GoogleMapComponentProps> = ({ contact }) => {
  const [coordinates, setCoordinates] = useState(center);
  const [key, setKey] = useState(googleMapsApiKey);

  useEffect(() => {
    if (contact) {
      setCoordinates({ lat: contact[0], lng: contact[1] });
    }
    setKey(googleMapsApiKey);
  }, [contact, googleMapsApiKey]);

  if (!googleMapsApiKey) {
    return <div>Error: Google Maps API key is missing.</div>;
  }

  return (
    <LoadScript googleMapsApiKey={key}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={coordinates}
        zoom={12}
      >
        <Marker position={coordinates} />
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapComponent;
