const PUBLIC_KEY =
  "BNCtHyjKlzMF1ey4ogHe9wGnfMytcoLBa7ANynh1uWEWnODdkHrVbGe0U3qB22P208HJoaSRHAlF4OE-pxX8RKc";

// Function to convert base64 public key to Uint8Array
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

// Simulating the request to save the subscription
const saveSubscription = async (subscription) => {
  try {
    const response = await fetch(`/api/admin/push`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ subscription }),
    });

    return await response.json();
  } catch (error) {
    console.error("Error saving subscription:", error);
  }
};

// Service worker's activate event
self.addEventListener("activate", async (event) => {
  event.waitUntil(
    (async () => {
      try {
        const applicationServerKey = urlB64ToUint8Array(PUBLIC_KEY);
        const options = { applicationServerKey, userVisibleOnly: true };
        const subscription = await self.registration.pushManager.subscribe(
          options
        );

        const response = await saveSubscription(subscription);
        console.log("Subscription saved inside admin:", response);
      } catch (err) {
        console.error("Error during service worker registration:", err);
      }
    })()
  );
});

self.addEventListener("push", (e) => {
  self.registration.showNotification("New Booking!!!", {
    body: e.data.text(),
    icon: "/logo.png",
  });
});

// v1lkddfds
