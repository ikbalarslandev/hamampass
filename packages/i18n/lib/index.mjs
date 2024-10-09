"use strict";

// Importing necessary functions
import { useTranslations } from "next-intl";
import { getRequestConfig } from "next-intl/server";

// Exporting the functions
export { useTranslations, getRequestConfig };

export const importLocale = async (locale) => {
  return import(`../locales/${locale}.json`).then((f) => f.default);
};
