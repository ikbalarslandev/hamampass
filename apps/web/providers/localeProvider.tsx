import React from "react";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";

const locales = ["en", "tr"];

async function loadMessages(locale: string) {
  try {
    const messages = await import(`@hamampass/i18n/locales/${locale}.json`);
    return messages.default;
  } catch (error) {
    throw new Error(`Could not load messages for locale: ${locale}`);
  }
}

const LocaleProvider = async ({ children, locale }: any) => {
  if (!locales.includes(locale)) notFound();

  const messages = await loadMessages(locale);

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
};

export default LocaleProvider;
