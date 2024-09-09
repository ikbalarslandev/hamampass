import { urlBase64ToUint8Array } from "../utils/urlBase64.ts";

self.addEventListener("activate", async () => {
  try {
    const subscription = await self.registration.pushManager.subscribe({
      applicationServerKey: urlBase64ToUint8Array(process.env.VAPID_PUBLIC_KEY),
      userVisibleOnly: true,
    });

    console.log("Push Subscription:", subscription);
  } catch (err) {
    console.error("Push Subscription Error:", err);
  }
});
