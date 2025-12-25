import React from "react"
import { Metadata } from "next"
import { Poppins, Fira_Code, Lora } from "next/font/google"
import "./globals.css"

const _poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

const _firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
})

const _lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
})

export const metadata: Metadata = {
  title: "Yeera Tracker App",
  description: "Track Each Era of the Year",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
