"use client";

import { useEffect } from "react";

export default function ServiceWorkerRegistration() {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/service-worker.js", {
          scope: "/",
        })
        .catch((error) => {
          console.error("Service Worker registration failed:", error);
        });
    }

    // register to push
  }, []);

  return null;
}
