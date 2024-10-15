import { importLocale, getRequestConfig } from "./index.mjs";

export default getRequestConfig(async ({ locale }) => ({
  messages: await importLocale(locale),
}));
