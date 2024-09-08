import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Script from "next/script"; // Import Script

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anish Awasthi",
  description: "portfolio",
};

// Inline declaration of Voiceflow types
interface VoiceflowChat {
  load: (config: {
    verify: { projectID: string };
    url: string;
    versionID: string;
  }) => void;
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#1A2130]`}>
        {/* Using the Next.js Script component */}
        <Script
          id="voiceflow-widget"
          src="https://cdn.voiceflow.com/widget/bundle.mjs"
          onLoad={() => {
            const vfWindow = window as typeof window & {
              voiceflow?: { chat: VoiceflowChat };
            };
            vfWindow.voiceflow?.chat.load({
              verify: { projectID: "66ce337b23b6c24cc9d62f24" },
              url: "https://general-runtime.voiceflow.com",
              versionID: "production",
            });
          }}
        />
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
