import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import { signIn } from "next-auth/react";
import { request } from "@/services/axios";
import ReviewDrawerComponent from "./review-drawer";
import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";

interface IReviewButton {
  propertyId: string;
}

const ReviewButton = ({ propertyId }: IReviewButton) => {
  const session = useSession();
  const [isExist, setIsExist] = useState(false);
  const r = useTranslations("review");

  useEffect(() => {
    const handleIsExist = async () => {
      const res = await request({
        type: "get",
        endpoint: `review`,
        params: { propertyId, email: session.data?.user?.email },
      });

      setIsExist(res.data.isExist);
    };

    if (session.data) {
      handleIsExist();
    }
  }, [session.data]);

  const handleClick = async () => {
    await signIn();
  };

  if (session.data) {
    if (isExist) {
      return <p className="text-cyan-600 text-sm">{r("reviewed")}</p>;
    }
    return <ReviewDrawerComponent id={propertyId} />;
  } else {
    return (
      <p className="text-cyan-600 text-sm" onClick={handleClick}>
        {r("login")}
      </p>
    );
  }
};

export default ReviewButton;
