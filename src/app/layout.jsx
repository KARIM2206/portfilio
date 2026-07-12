import { Funnel_Display } from "next/font/google";
import "./globals.css";

const funnelDisplay = Funnel_Display({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-funnel-display",
});

export const metadata = {
  metadataBase: new URL("https://karimyousef.com"),
  title: "Karim Yousef | Full Stack MERN Developer",
  description: "A modern, animated 3D developer portfolio of Karim Yousef, Full Stack MERN Developer.",
  icons: {
    icon: "/assets/profile.png",
    apple: "/assets/profile.png",
  },
  openGraph: {
    title: "Karim Yousef | Full Stack Developer",
    description: "Creative Full Stack Web Developer showcasing interactive 3D web experiences.",
    url: "https://karimyousef.com",
    siteName: "Karim Yousef Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Karim Yousef | Full Stack Developer",
    description: "Creative Full Stack Web Developer showcasing interactive 3D web experiences.",
  },
  alternates: {
    canonical: "https://karimyousef.com",
  },
};

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={funnelDisplay.variable}>
      <body className="bg-[#030412] text-white antialiased overflow-x-hidden scroll-smooth selection:bg-aqua selection:text-black">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
