import webpush from "web-push";
import prisma from "@/prisma/db";
import { redirect } from "next/dist/server/api-utils";

webpush.setVapidDetails(
  "mailto:ars.ikbal22@gmail.com",
  process.env.VAPID_PUBLIC_KEY!!,
  process.env.VAPID_PRIVATE_KEY!!
);

const sendNotification = async ({
  propertyId,
  desc,
}: {
  propertyId: string;
  desc: string;
}) => {
  const admin = await prisma.admin.findFirst({
    where: {
      propertyId,
    },
  });

  const subscription =
    admin?.subscription as unknown as webpush.PushSubscription;
  if (!subscription) return { error: "No subscription found" };

  const payload = JSON.stringify({ desc, redirectUrl: "/" });

  webpush.sendNotification(subscription, payload);

  return { message: "Notification sent" };
};

export default sendNotification;
