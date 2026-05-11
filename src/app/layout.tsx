import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "PBJT | Home",
  description:
    "PBJT's learning emerges through real conversations on worksites, in community meetings, and in everyday informal spaces",
};

const toastConfig = {
  success: {
    style: {
      background: "#e1e9b7",
      color: "white",
    },
  },
  error: {
    style: {
      background: "#f96161",
      color: "white",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Toaster toastOptions={toastConfig} />
      </body>
    </html>
  );
}
