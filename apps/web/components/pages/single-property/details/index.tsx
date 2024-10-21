import React, { forwardRef } from "react";
import ProductsComponent from "./products";
import AmenityComponent from "./amenities";
import HoursComponent from "./hours";
import LocationComponent from "./location";
import ReviewComponent from "./review";
import AboutComponent from "./about";
import { TProperty } from "@hamampass/db/types";
import { useParams } from "next/navigation";
import BookButton from "@/components/pages/single-property/book-btn";

const DetailsComponent = forwardRef<HTMLDivElement, { data: TProperty }>(
  ({ data }, ref) => {
    const { locale } = useParams();

    return (
      <div>
        <div className="mx-2">
          <AboutComponent desc={data[`desc_${locale}`]} />
          <div>
            {data && (
              <ProductsComponent property={data} data={data?.products} />
            )}
          </div>
          <div ref={ref}>
            {data.rating && (
              <ReviewComponent data={data?.rating} propertyId={data.id} />
            )}
          </div>
          <AmenityComponent data={data?.amenity} />
          {data && <HoursComponent data={data?.hour} />}
          {data && <LocationComponent contact={data?.contact} />}
        </div>

        {/* book button */}
        {data && (
          <BookButton
            property={data}
            content={
              data && (
                <ProductsComponent property={data} data={data?.products} />
              )
            }
          />
        )}
      </div>
    );
  }
);

DetailsComponent.displayName = "DetailsComponent";

export default DetailsComponent;
