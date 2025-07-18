import { AuthProvider } from './AuthProvider';
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-100`}
        >
          <div className="flex flex-col min-h-screen max-w-[1000px] mx-auto bg-white text-sm justify-between">
            <Header />
            <div className="flex-grow p-4">
              {children}
            </div>
            {/* Footer */}
            <Footer />
          </div>
        </body>
      </html>
    </AuthProvider>
  );
}
