"use strict";

export {
  useTranslations,
  createMiddleware,
  getRequestConfig,
} from "./pull.mjs";

export const importLocale = async (locale) => {
  return import(`../locales/${locale}.json`).then((f) => f.default);
};
