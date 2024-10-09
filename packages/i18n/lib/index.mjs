"use strict";

export const importLocale = async (locale) => {
  return import(`../locales/${locale}.json`).then((f) => f.default);
};
