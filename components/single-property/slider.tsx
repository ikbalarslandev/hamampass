import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { photos } from "@/mock/photos";

const Slider = (property: any) => {
  return (
    <Carousel className="rounded-none" onClick={() => alert("hello")}>
      <CarouselContent className="rounded-none">
        {property?.data?.photos?.length < 2
          ? photos.map((photo: string) => (
              <CarouselItem key={photo}>
                <Image
                  src={photo}
                  alt={property.title || "property"}
                  width={400}
                  height={400}
                  className="w-full"
                  priority={true}
                />
              </CarouselItem>
            ))
          : property?.data?.photos?.map((photo: string) => (
              <CarouselItem key={photo}>
                <Image
                  src={photo}
                  alt={property.title}
                  width={400}
                  height={400}
                  className="w-full"
                />
              </CarouselItem>
            ))}
      </CarouselContent>
    </Carousel>
  );
};

export default Slider;
