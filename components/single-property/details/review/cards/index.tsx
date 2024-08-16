import { Carousel, CarouselContent } from "@/components/ui/carousel";
import Card from "./card";
import { TReview } from "@/types";
import { FaGreaterThan } from "react-icons/fa";
import { useTranslations } from "next-intl";
import ReviewDrawerComponent from "./drawer";

const Cards = ({ reviews }: { reviews: TReview[] }) => {
  const btn = useTranslations("single.review");
  return (
    <div className=" bg-cyan-300 rotate-3 my-10  px-2 rounded w-[105vw] -ml-4 relative">
      <Carousel className="rounded-none py-5  -rotate-3  ">
        <CarouselContent className=" rotate-3  pl-6 gap-5  py-1">
          {reviews?.map((review: TReview) => (
            <Card key={review.id} review={review} />
          ))}
        </CarouselContent>
      </Carousel>
      <div className="absolute bottom-4 -rotate-3 right-5  flex items-center gap-2 ">
        <ReviewDrawerComponent
          trigger={
            <p className="text-xs font-semibold text-black">
              {" "}
              {btn("see-all")}
            </p>
          }
          reviews={reviews}
        />

        <FaGreaterThan size={10} />
      </div>
    </div>
  );
};

export default Cards;
