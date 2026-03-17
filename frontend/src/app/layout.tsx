import type { Metadata, Viewport } from "next";
import { Poppins, Libre_Franklin } from "next/font/google";
import { Toaster } from "react-hot-toast";

import "@/styles/globals.css";
import "@/styles/includes.css";
import "@/styles/animations.css";

const libre = Libre_Franklin({
  variable: "--font-libre-franklin",
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  style: ["normal", "italic"],
});
const poppins = Poppins({
  variable: "--font-poppins",
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Mamamail - Advance mailing software",

  icons: {
    icon: "/frontend/public/favicons/favicon.ico",
    shortcut: "/frontend/public/favicons/favicon.ico",
    apple: "/frontend/public/favicons/apple-icon.png",
  },
};
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  interactiveWidget: "resizes-visual",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${libre.variable} ${poppins.variable}`}>
        {children}
        <Toaster position="top-right" reverseOrder={false} />
      </body>
    </html>
  );
}
