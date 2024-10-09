import { importLocale, getRequestConfig } from "@hamampass/i18n";

export default getRequestConfig(async ({ locale }) => ({
  messages: await importLocale(locale),
}));
