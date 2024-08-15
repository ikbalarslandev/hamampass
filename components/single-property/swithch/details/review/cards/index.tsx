import { Carousel, CarouselContent } from "@/components/ui/carousel";
import Card from "./card";

const Cards = () => {
  return (
    <div className=" bg-cyan-300 rotate-3 my-5  px-2 rounded w-[105vw] -ml-4">
      <Carousel className="rounded-none py-5  -rotate-3  ">
        <CarouselContent className=" rotate-3  pl-6 gap-5  py-1">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default Cards;
