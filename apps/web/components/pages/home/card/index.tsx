"use client";

import data from "./data";
import CardItem from "./card-item";
import { TProperty } from "@hamampass/db/types";

const CardSection = () => {
  const property = data[0] as unknown as TProperty;
  return (
    <div className="mt-6 mx-3 flex flex-col gap-10">
      {Array(3)
        .fill(property)
        .map((_, index) => (
          <CardItem key={index} property={property} />
        ))}
    </div>
  );
};

export default CardSection;
