import React, { forwardRef } from "react";
import PriceComponent from "./price";
import ProductsComponent from "./products";
import AmenityComponent from "./amenities";
import HoursComponent from "./hours";
import LocationComponent from "./location";
import ReviewComponent from "./review";
import { TProperty } from "@/types";

const DetailsComponent = forwardRef<HTMLDivElement, { data: TProperty }>(
  ({ data }, ref) => {
    return (
      <div>
        {data && <PriceComponent data={data?.price} />}
        {data && <ProductsComponent data={data?.products} />}
        <div ref={ref}>
          {data.rating && (
            <ReviewComponent data={data?.rating} propertyId={data.id} />
          )}
        </div>
        <AmenityComponent data={data?.amenities} />
        {data && <HoursComponent data={data?.days} />}
        {data && <LocationComponent contact={data?.contact} />}
      </div>
    );
  }
);

DetailsComponent.displayName = "DetailsComponent";

export default DetailsComponent;
