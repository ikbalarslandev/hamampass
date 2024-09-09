"use client";

import { useEffect } from "react";

export default function ServiceWorkerRegistration() {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/service-worker.js", {
          scope: "/",
        })
        .then((registration) => {
          console.log(
            "Service Worker registered with scope:",
            registration.scope
          );
        })
        .catch((error) => {
          console.error("Service Worker registration failed:", error);
        });
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
  }, []);

  return null;
}
