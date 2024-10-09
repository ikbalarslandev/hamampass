import { Inter } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import dynamic from "next/dynamic";
import { Toaster } from "@/components/ui/toaster";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import LocaleProvider from "@/providers/localeProvider";

const ReduxProvider = dynamic(() => import("@/lib/store/redux-provider"), {
  ssr: false,
});

const inter = Inter({ subsets: ["latin"] });

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
  return (
    <html lang={locale}>
      <body className={`${inter.className} touch-pan-y  select-none`}>
        <ReduxProvider>
          <LocaleProvider locale={locale}>
            <SessionProvider>
              {children} <Toaster />
              <SpeedInsights />
              <Analytics />
            </SessionProvider>
          </LocaleProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
