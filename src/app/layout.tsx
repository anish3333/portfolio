import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anish Awasthi",
  description: "portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#1A2130]`}>
        {children}
        <Toaster position="bottom-left" reverseOrder={false} toastOptions={{
          style: {
            background: '#5A72A0',
            color: '#FDFFE2',
          },
        }} />
      </body>
    </html>
  );
}
