import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import { loadMessages } from "@/utils/loadMessages";
import { SessionProvider } from "next-auth/react";
import dynamic from "next/dynamic";

const ReduxProvider = dynamic(() => import("@/lib/store/redux-provider"), {
  ssr: false,
});

const inter = Inter({ subsets: ["latin"] });
const locales = ["en", "tr"];

export const metadata: Metadata = {
  title: "Hamampass",
  description: "Hamampass is a platform for Turkish bath lovers.",
};

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: LocaleLayoutProps) {
  if (!locales.includes(locale)) notFound();

  const messages = await loadMessages(locale);

  return (
    <html lang={locale}>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </head>
      <body className={inter.className}>
        <ReduxProvider>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <SessionProvider>{children}</SessionProvider>
          </NextIntlClientProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
