import { TReview } from "@/types";
import Image from "next/image";

import { useEffect, useState } from "react";
import moment from "moment";
import "moment/locale/tr";
import "moment/locale/en-gb";
import { IoStar } from "react-icons/io5";

import { useTranslations } from "next-intl";
import { convertAgeRange } from "@/utils/db_translations";
import { request } from "@/services/axios";
import { useParams } from "next/navigation";
import { TCountry } from "@/types";

const ReviewsCard = ({ review }: { review: TReview }) => {
  const g = useTranslations("single.review.gender");
  const p = useTranslations("home.product-type");
  const r = useTranslations("single.review.type");
  const { locale } = useParams<{ locale: string }>();

  review.rate = parseFloat(review.rate.toFixed(1));
  const [country, setCountry] = useState<TCountry>();

  useEffect(() => {
    const getCountry = async () => {
      const res: any = await request({
        type: "get",
        endpoint: `country/${review.user.nationality}`,
      });

      setCountry(res.data);
    };

    getCountry();
  }, [review.user.nationality]);

  const formatedDate = moment(review.updatedAt).format("DD MMMM YYYY");

  useEffect(() => {
    moment.locale(locale);
  }, [locale]);

  return (
    <div className=" border-t border-gray-300 pb-3">
      <div className="flex items-center gap-3 p-2 flex-col">
        <div className="w-full flex items-center justify-between">
          <p className="text-xs text-gray-400"> {formatedDate}</p>
          <div className="flex items-center gap-1">
            <IoStar className="w-4 h-4 text-cyan-500" />
            <p> {review.rate}</p>
          </div>
        </div>
        <div className="flex items-center gap-2 w-full">
          <div className="relative">
            <Image
              src={review.user.image ?? ""}
              alt="avatar"
              width={30}
              height={30}
              className="rounded-full"
            />

            {/* Smaller Image */}
            <div className="absolute -bottom-[.15rem] -right-[.15rem]">
              <Image
                src={
                  country?.image ??
                  "https://flagsoftheworld.info/wp-content/uploads/2022/12/united-states-flag.webp"
                }
                alt="small avatar"
                width={15}
                height={15}
                className="rounded-full border border-gray-400 aspect-square "
              />
            </div>
          </div>
          <div className="flex flex-col  w-full">
            <h1 className="font-semibold ">{review.user.name}</h1>
            <div className="flex justify-between text-sm text-gray-600  ">
              <div className="flex items-center gap-2">
                <p>{g(review.user.gender.toString())},</p>
                <p> {convertAgeRange(review.user.age_range)},</p>
                <p> {country && country[`name_${locale}` as keyof TCountry]}</p>
              </div>

              <div className="flex  items-end gap-1">
                <p>{r(review.type.toString())}</p>

                <p className="text-xs">({p(review.product_type.toString())})</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-2">
        <p>{review.comment}</p>
      </div>
    </div>
  );
};

export default ReviewsCard;
