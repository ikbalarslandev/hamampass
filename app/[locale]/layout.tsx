import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import { loadMessages } from "@/utils/loadMessages";
import { SessionProvider } from "next-auth/react";
import dynamic from "next/dynamic";
import { Toaster } from "@/components/ui/toaster";

const ReduxProvider = dynamic(() => import("@/lib/store/redux-provider"), {
  ssr: false,
});

const inter = Inter({ subsets: ["latin"] });
const locales = ["en", "tr"];

export const metadata: Metadata = {
  title: "Hamampass",
  description: "Hamampass is a platform for Turkish bath lovers.",
};

interface LayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

export default async function Layout({
  children,
  params: { locale },
}: LayoutProps) {
  if (!locales.includes(locale)) notFound();

  const messages = await loadMessages(locale);

  return (
    <html lang={locale}>
      <body className={`${inter.className} touch-pan-y  select-none`}>
        <ReduxProvider>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <SessionProvider>
              {children} <Toaster />
            </SessionProvider>
          </NextIntlClientProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
