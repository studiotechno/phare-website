import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Phare - Parlez à votre code avec l'IA",
  description:
    "Comprenez votre codebase en langage naturel. Connectez vos repos GitHub et posez vos questions. Idéal pour les Product Managers et freelances.",
  keywords: [
    "IA",
    "code",
    "GitHub",
    "Product Manager",
    "analyse de code",
    "chat",
  ],
  openGraph: {
    title: "Phare - Parlez à votre code avec l'IA",
    description:
      "Comprenez votre codebase en langage naturel. Connectez vos repos GitHub et posez vos questions.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
