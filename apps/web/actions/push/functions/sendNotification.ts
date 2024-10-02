import webpush from "web-push";
import prisma from "@/prisma/db";

webpush.setVapidDetails(
  "mailto:ars.ikbal22@gmail.com",
  process.env.VAPID_PUBLIC_KEY!!,
  process.env.VAPID_PRIVATE_KEY!!
);

const sendNotification = async ({
  propertyId,
  desc,
  redirectUrl,
}: {
  propertyId: string;
  desc: string;
  redirectUrl?: string;
}) => {
  const admin = await prisma.admin.findFirst({
    where: {
      propertyId,
    },
  });

  const subscriptions =
    admin?.subscriptions as unknown as webpush.PushSubscription[];
  if (!subscriptions) return { error: "No subscription found" };

  const payload = JSON.stringify({ desc, redirectUrl });

  for (const subscription of subscriptions) {
    webpush.sendNotification(subscription, payload);
  }

  return { message: "Notification sent" };
};

export default sendNotification;
