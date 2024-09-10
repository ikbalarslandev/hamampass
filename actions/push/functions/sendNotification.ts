import webpush from "web-push";
import prisma from "@/prisma/db";

webpush.setVapidDetails(
  "mailto:ars.ikbal22@gmail.com",
  process.env.VAPID_PUBLIC_KEY!!,
  process.env.VAPID_PRIVATE_KEY!!
);

const sendNotification = async ({ propertyId }: any) => {
  const admin = await prisma.admin.findFirst({
    where: {
      propertyId,
    },
  });

  const subscription =
    admin?.subscription as unknown as webpush.PushSubscription;
  if (!subscription) return { error: "No subscription found" };

  webpush.sendNotification(
    subscription,
    "14 September  1 basic 1 regular14 September  1 basic 1 regular14 September  1 basic 1 regular14 September  1 basic 1 regular14 September  1 basic 1 regular14 September  1 basic 1 regular14 September  1 basic 1 regular14 September  1 basic 1 regular"
  );

  return { message: "Notification sent" };
};

export default sendNotification;
