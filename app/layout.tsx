import type React from "react";
import "./globals.css";
import {
  Poppins,
  Playfair_Display,
  Radio_Canada,
  Marcellus,
  Lato,
  Gilda_Display,
} from "next/font/google";

import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ReservaInitializer from "@/components/ReservaInitializer";
import { Toaster } from "sonner";

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

// Marcellus for special text
const marcellus = Marcellus({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-marcellus",
});

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lato",
});

const gilda = Gilda_Display({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-gilda",
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
        className={`${poppins.variable} ${playfair.variable} ${canada.variable} ${marcellus.variable} ${lato.variable} ${gilda.variable} font-poppins`}
      >
        <main className="min-h-screen">
          {/* Top Bar */}
          <Header />
          {/* Main Content */}
          {children}
          {/* Footer */}
          <Footer />
          <Toaster />
          <ReservaInitializer />
        </main>
      </body>
    </html>
  );
}
