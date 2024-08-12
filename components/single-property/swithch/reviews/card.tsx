import { TReview } from "@/types";
import Image from "next/image";
import RatingComponent from "./rating";
import { useEffect } from "react";
import { useSession } from "next-auth/react";

const ReviewsCard = ({ review }: { review: TReview }) => {
  const dateStr = "2024-08-07T21:29:24.524Z";
  const date = new Date(dateStr);

  const day = String(date.getUTCDate()).padStart(2, "0");
  const month = String(date.getUTCMonth() + 1).padStart(2, "0"); // Months are zero-indexed
  const year = String(date.getUTCFullYear()).slice(2); // Get last two digits of the year

  const formattedDate = `${day}/${month}/${year}`;

  review.updatedAt = formattedDate;

  const session = useSession();
  const user = session.data?.user;

  useEffect(() => {
    console.log(review);
  }, [review]);

  return (
    <div className="shadow rounded border pb-3">
      <div className="flex items-center gap-3 p-2">
        <Image
          src={user?.image ?? ""}
          alt="avatar"
          width={30}
          height={30}
          className="rounded-full"
        />
        <div className="flex flex-col">
          <h1>{user?.name}</h1>
          <p className="text-xs text-gray-400">{user?.email}</p>
        </div>

        <p className="ml-auto mb-auto text-sm">{review.updatedAt}</p>
      </div>
      <RatingComponent rating={review.rate_atmosphere} />
      <div className="p-2">
        <p>{review.comment}</p>
      </div>
    </div>
  );
};

export default ReviewsCard;
