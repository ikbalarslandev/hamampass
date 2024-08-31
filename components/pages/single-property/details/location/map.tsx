"use client";
import React, { useState, useEffect, useRef } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { IoHome } from "react-icons/io5";
import { renderToStaticMarkup } from "react-dom/server";

const containerStyle = {
  width: "100%",
  height: "100%",
  borderRadius: "0px",
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
      const iconSvgString = renderToStaticMarkup(
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          width="64"
          height="64"
        >
          <circle
            cx="32"
            cy="32"
            r="30"
            fill="white"
            stroke="black"
            strokeWidth="2"
          />
          <g transform="translate(16, 16)">
            <IoHome size={32} color="#8b5cf6" />
          </g>
        </svg>
      );
      const iconUrl = `data:image/svg+xml;utf8,${encodeURIComponent(
        iconSvgString
      )}`;

      markerRef.current = new google.maps.Marker({
        map: mapRef.current,
        position: coordinates,
        icon: {
          url: iconUrl,
          scaledSize: new google.maps.Size(48, 48),
        },
      });

      // Add click event listener
      markerRef.current.addListener("click", () => {
        console.log("hey");
      });
    }
  }, [coordinates]);

  const onLoad = (map: google.maps.Map) => {
    mapRef.current = map;

    // Initialize the marker once the map is loaded
    if (contact) {
      const iconSvgString = renderToStaticMarkup(
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          width="64"
          height="64"
        >
          <circle
            cx="32"
            cy="32"
            r="30"
            fill="white"
            stroke="gray"
            strokeWidth="1"
          />
          <g transform="translate(16, 16)">
            <IoHome size={32} color="#06b6d4" />
          </g>
        </svg>
      );
      const iconUrl = `data:image/svg+xml;utf8,${encodeURIComponent(
        iconSvgString
      )}`;

      markerRef.current = new google.maps.Marker({
        map: map,
        position: coordinates,
        icon: {
          url: iconUrl,
          scaledSize: new google.maps.Size(48, 48),
        },
      });

      // Add click event listener
      markerRef.current.addListener("click", () => {
        const googleMapsUrl = `https://www.google.com/maps?q=${coordinates.lat},${coordinates.lng}`;
        window.open(googleMapsUrl, "_blank");
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
