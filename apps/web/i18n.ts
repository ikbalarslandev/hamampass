import { getRequestConfig } from "next-intl/server";
import { importLocale } from "@hamampass/i18n";

export default getRequestConfig(async ({ locale }) => ({
  messages: await importLocale(locale),
}));
