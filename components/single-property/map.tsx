"use client";
import React, { useState, useEffect, useRef } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
  borderRadius: "6px",
  overflow: "hidden",
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
  const mapRef = useRef<google.maps.Map | null>(null);
  const markerRef = useRef<google.maps.Marker | null>(null);

  useEffect(() => {
    if (contact) {
      setCoordinates({ lat: contact[0], lng: contact[1] });
    }
  }, [contact]);

  useEffect(() => {
    if (mapRef.current) {
      // Remove existing marker
      if (markerRef.current) {
        markerRef.current.setMap(null);
      }

      // Create new marker
      markerRef.current = new google.maps.Marker({
        map: mapRef.current,
        position: coordinates,
        icon: {
          url: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'><path d='M12 2C8.13 2 5 5.13 5 9c0 3.22 5 10 7 12 2-2 7-8.78 7-12 0-3.87-3.13-7-7-7z' fill='%23f00'/></svg>",
          scaledSize: new google.maps.Size(24, 24),
        },
      });
    }
  }, [coordinates]);

  const onLoad = (map: google.maps.Map) => {
    mapRef.current = map;

    // Initialize the marker once the map is loaded
    if (contact) {
      markerRef.current = new google.maps.Marker({
        map: map,
        position: coordinates,
        icon: {
          url: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'><path d='M12 2C8.13 2 5 5.13 5 9c0 3.22 5 10 7 12 2-2 7-8.78 7-12 0-3.87-3.13-7-7-7z' fill='%23f00'/></svg>",
          scaledSize: new google.maps.Size(24, 24),
        },
      });
    }
  };

  if (!googleMapsApiKey) {
    return <div>Error: Google Maps API key is missing.</div>;
  }

  return (
    <LoadScript googleMapsApiKey={googleMapsApiKey}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={coordinates}
        zoom={12}
        onLoad={onLoad}
      />
    </LoadScript>
  );
};

export default GoogleMapComponent;
