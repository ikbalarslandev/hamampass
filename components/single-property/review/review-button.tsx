import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import { signIn } from "next-auth/react";
import { request } from "@/services/axios";
import ReviewDrawerComponent from "./review-drawer";
import { useState, useEffect } from "react";

interface IReviewButton {
  propertyId: string;
}

const ReviewButton = ({ propertyId }: IReviewButton) => {
  const session = useSession();

  const [isExist, setIsExist] = useState(false);

  useEffect(() => {
    const handleIsExist = async () => {
      const res = await request({
        type: "get",
        endpoint: `review`,
        payload: { propertyId, email: session.data?.user?.email },
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
      return (
        <div className="flex">
          <div className="bg-green-700 text-white rounded py-1 px-2 m-1">
            this property reviewed
          </div>
        </div>
      );
    }
    return <ReviewDrawerComponent id={propertyId} />;
  } else {
    return <Button onClick={handleClick}>Login to Review</Button>;
  }
};

export default ReviewButton;
