import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import { loadMessages } from "@/utils/loadMessages";
import HeaderComponent from "@/components/header";
import { SessionProvider } from "next-auth/react";

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
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <SessionProvider>
            <HeaderComponent />
            {children}
          </SessionProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
