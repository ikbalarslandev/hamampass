import { useSession } from "next-auth/react";
import { signIn } from "next-auth/react";
import { request } from "@/services/axios";
import ReviewDrawerComponent from "./review-drawer";
import { useState, useEffect, use } from "react";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";

interface IReviewButton {
  minPrice: number;
}

const ReviewButton = ({ minPrice }: IReviewButton) => {
  const session = useSession();

  return (
    <div className="fixed bottom-0 w-full px-4 py-3 bg-white rounded-t-xl border-t shadow-2xl z-20 flex items-center">
      <div className="flex flex-1 flex-col">
        <p className="text-xs text-gray-600">From</p>
        <p className="font-bold text-xl">
          ₺{minPrice}
          <span className="text-sm ml-1">TL</span>
        </p>
      </div>

      <Button
        className="rounded-xl px-8 bg-cyan-500"
        onClick={() => {
          session?.data?.user.id
            ? console.log("book form")
            : toast({
                title: "You need to login to review",
              });
        }}
      >
        Book Now
      </Button>
    </div>
  );
};

export default ReviewButton;
