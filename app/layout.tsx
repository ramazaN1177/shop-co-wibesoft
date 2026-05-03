import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import Loader from "@/components/loader/Loader";

export const metadata: Metadata = {
  title: "SHOP.CO",
  description: "Shop.co e-commerce demo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className="bg-white text-black antialiased flex flex-col min-h-screen overflow-x-hidden w-full">
        <Loader />
        <Header />
        <main className="flex-1 w-full">
          {children}
        </main>
        <Footer />
      </body>

    </html>
  );
}
