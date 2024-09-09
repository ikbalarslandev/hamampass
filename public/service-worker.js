const PUBLIC_KEY =
  "BEEO9_wuf7dcPc7RMhceAGucrBrO8VxmYFCcuqVwb1cATNaqOSw0ijG9yy__uUkxaPq1D2IPMxBDvt2AgtYs56Q";

self.addEventListener("activate", async () => {
  try {
    const applicationServerKey = urlB64ToUint8Array(PUBLIC_KEY);
    const options = { applicationServerKey, userVisibleOnly: true };
    const subscription = await self.registration.pushManager.subscribe(options);
    console.log("Push Subscription:", JSON.stringify(subscription));
  } catch (err) {
    console.error("Error during service worker registration:", err);
  }
});

function urlB64ToUint8Array(base64String) {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding)
    .replace(/\-/g, "+")
    .replace(/_/g, "/");
  const rawData = atob(base64);
  const outputArray = new Uint8Array(rawData.length);
  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}
