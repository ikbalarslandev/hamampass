const ServiceWorkerRegister = async () => {
  if ("serviceWorker" in navigator) {
    try {
      const registration = await navigator.serviceWorker.register(
        "/service-worker.js",
        { scope: "/" }
      );
      console.log("Service Worker registered with scope:", registration.scope);
    } catch (error) {
      console.error("Service Worker registration failed:", error);
    }
  }

  async function registerPermission() {
    if (Notification.permission === "granted") {
      console.log("Notifications are allowed for this site.");
    } else if (Notification.permission === "default") {
      await Notification.requestPermission();
    } else {
      console.error("Notifications are blocked for this site.");
    }
  }
  registerPermission();
};

export default ServiceWorkerRegister;
