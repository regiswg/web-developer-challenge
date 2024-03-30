import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Roboto as FontSans } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";
import AllProviders from "@/providers/AllProviders";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Buildbox Web Challenge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <AllProviders>
          {children}
          <ToastContainer theme="dark" position="bottom-right" />
        </AllProviders>
      </body>
    </html>
  );
}
