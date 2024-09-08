// ClientScript.tsx
'use client'; // Mark this component as a Client Component

import Script from "next/script";

interface VoiceflowChat {
  load: (config: {
    verify: { projectID: string };
    url: string;
    versionID: string;
  }) => void;
}

const ChatBot = () => {
  return (
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
  );
};

export default ChatBot;
