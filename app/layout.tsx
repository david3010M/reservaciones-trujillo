import type React from "react";
import "./globals.css";
import { Poppins, Playfair_Display } from "next/font/google";

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
      <body className={`${poppins.variable} ${playfair.variable} font-poppins`}>
        {children}
      </body>
    </html>
  );
}

import "./globals.css";
