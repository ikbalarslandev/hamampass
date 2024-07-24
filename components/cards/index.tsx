"use client";
import { useEffect, useState } from "react";
import Card from "./card";

const Cards = ({ data }: any) => {
  const [properties, setProperties] = useState<any[]>([]);

  useEffect(() => {
    // Ensure data is an array before setting it
    setProperties(Array.isArray(data) ? data : []);
  }, [data]);

  return (
    <div>
      {properties.map((property: any) => (
        <Card key={property.id} property={property} />
      ))}
    </div>
  );
};

export default Cards;
