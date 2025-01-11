import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import PopoverNav from "@/components/PopoverNav";

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
      <body className={`${inter.className} bg-first-1`}>
        {/* Use ClientScript for voiceflow */}
        {/* <ChatBot /> */}
        <div className=" fixed bottom-6 right-6 lg:bottom-10 lg:right-10 z-50">
          <PopoverNav />
        </div>
        {children}
        <Toaster
          position="bottom-left"
          reverseOrder={false}
          toastOptions={{
            style: {
              background: "#5A72A0",
              color: "#FDFFE2",
            },
          }}
        />
      </body>
    </html>
  );
}
