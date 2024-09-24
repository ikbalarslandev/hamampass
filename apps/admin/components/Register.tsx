"use client";

import { useEffect } from "react";
import ServiceWorkerRegister from "@/utils/serviceWorkerRegister";

const Register = () => {
  useEffect(() => {
    ServiceWorkerRegister();
  }, []);
  return <></>;
};

export default Register;
