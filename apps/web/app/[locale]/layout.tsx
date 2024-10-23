import { Inter } from "next/font/google";
import type { Metadata } from "next";
import "@hamampass/ui/lib/styles/theme.css";
import { SessionProvider } from "next-auth/react";
import dynamic from "next/dynamic";
import { Toaster } from "@hamampass/ui/primitives/toaster.tsx";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import LocaleProvider from "@hamampass/i18n/lib/localeProvider";

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
      <body className={`${inter.className} touch-pan-y  select-none h-svh `}>
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
