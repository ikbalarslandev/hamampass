import webpush from "web-push";
import { auth } from "@/auth";
import prisma from "@/prisma/db";

webpush.setVapidDetails(
  "mailto:ars.ikbal22@gmail.com",
  process.env.VAPID_PUBLIC_KEY!!,
  process.env.VAPID_PRIVATE_KEY!!
);

const sendNotification = async () => {
  const session = await auth();
  if (!session) return { error: "Unauthorized" };
  const userId = session.user.id;

  const admin = await prisma.admin.findFirst({
    where: {
      userId,
    },
  });

  const subscription =
    admin?.subscription as unknown as webpush.PushSubscription;
  if (!subscription) return { error: "No subscription found" };

  webpush.sendNotification(subscription, "Hello world");

  return { message: "Notification sent" };
};

export default sendNotification;
