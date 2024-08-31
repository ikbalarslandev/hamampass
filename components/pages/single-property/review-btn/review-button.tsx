import { useSession } from "next-auth/react";
import { signIn } from "next-auth/react";
import { request } from "@/services/axios";
import ReviewDrawerComponent from "./review-drawer";
import { useState, useEffect, use } from "react";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";

interface IReviewButton {
  propertyId: string;
}

const ReviewButton = ({ propertyId }: IReviewButton) => {
  const session = useSession();
  const [isExist, setIsExist] = useState(false);
  const r = useTranslations("single.review.btn");

  useEffect(() => {
    const handleIsExist = async () => {
      const res = await request({
        type: "get",
        endpoint: `review`,
        params: { propertyId, userId: session?.data?.user.id },
      });

      setIsExist(res.data.isExist);
    };

    if (session.data) {
      handleIsExist();
    }
  }, [session.data, propertyId]);

  if (session.data) {
    if (isExist && session.data.user.id) {
      return (
        <div className="fixed bottom-0 w-full  bg-cyan-500 z-20">
          <p className="text-white text-sm m-0 p- w-full text-center">
            {r("reviewed")}
          </p>
        </div>
      );
    }
    return <ReviewDrawerComponent id={propertyId} />;
  } else {
    return (
      <div className="fixed bottom-0 w-full px-4 py-3 bg-cyan-600 z-20">
        <p className="text-white text-sm w-full  focus:text-white  rounded text-center ">
          {r("login")}
        </p>
      </div>
    );
  }
};

export default ReviewButton;
