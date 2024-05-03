import React from "react";

import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

import UserProvider from "@/src/context/UserProvider";
import Header from "./Header";
import Footer from "./Footer";

const inter = Montserrat({ weight: "400", subsets: ["latin"] });

const APP_NAME = "Big Bang Radio";
const APP_DEFAULT_TITLE = "Big Bang Radio";
const APP_TITLE_TEMPLATE = "%s - PWA App";
const APP_DESCRIPTION = "Radio Big Bang - Transmitiendo desde Catamarca";

export const metadata: Metadata = {
  manifest: "/manifest.json",
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
    // startUpImage: [],
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="es">
      <UserProvider>
        <body className={inter.className}>
          <Header />
          {children}
          <Footer />
        </body>
      </UserProvider>
    </html>
  );
}
