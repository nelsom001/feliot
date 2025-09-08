import Footer from "./components/js/footer/footer";
import Nav from "./components/js/nav/nav";

import "./globals.css";
import type { Metadata } from "next";
import { Lobster, Open_Sans } from "next/font/google";

export const metadata: Metadata = {
  title: "FELIOTH SIGNATURE Bar & Restaurant",
  description:
    "FELIOTH SIGNATURE Bar & Restaurant, located at 157 IDIMU-EJIGBO ROAD, EJIGBO. Explore our delicious food and drink menu.",
  keywords: [
    "FELIOTH SIGNATURE",
    "bar",
    "restaurant",
    "Ejigbo",
    "Lagos",
    "Nigeria",
    "food",
    "drinks",
    "menu",
    "nightlife",
  ],

  icons: {
    icon: "/favicon.ico",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

const openSance = Open_Sans({
  subsets: ["latin"],
  variable: "--text",
  weight: ["400", "500", "600", "700", "300"],
  display: "swap",
});
const lobster = Lobster({
  subsets: ["latin"],
  variable: "--special",
  weight: ["400"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${openSance.variable} ${lobster.variable}`}>
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
