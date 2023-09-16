import Header from "@/features/Header/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Inter, Montserrat_Alternates } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const montserrat = Montserrat_Alternates({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gauthier Boddaert ",
  description: "Made by Gauthier Boddaert",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className=" z-auto">
      <body className={montserrat.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
