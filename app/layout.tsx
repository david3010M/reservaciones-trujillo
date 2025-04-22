import type React from "react";
import "./globals.css";
import { Poppins, Playfair_Display, Radio_Canada } from "next/font/google";

// Poppins font for body text
const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

// Playfair Display for headings
const playfair = Playfair_Display({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});

// Radio Canada for special text
const canada = Radio_Canada({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-canada",
});

export const metadata = {
  title: "Recepciones Trujillo",
  description: "Hotel y centro de eventos en Trujillo, Perú",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body
        className={`${poppins.variable} ${playfair.variable}  ${canada.variable} font-poppins`}
      >
        <main className="min-h-screen">
          {/* Top Bar */}
          <Header />
          {/* Main Content */}
          {children}
          {/* Footer */}
          <Footer />
        </main>
      </body>
    </html>
  );
}

import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
