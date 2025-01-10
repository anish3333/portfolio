'use client'

import React from 'react';
import { Card } from "@/components/ui/card";
import { Twitter, Instagram, Linkedin, Github, Code, Mail } from 'lucide-react';

const socialLinks = [
  {
    platform: "Email",
    handle: "@anish__awasthi",
    url: "mailto:anishawasthi16@gmail.com",
    icon: Mail,
  },
  {
    platform: "Twitter",
    handle: "@anish__awasthi",
    url: "https://x.com/anish__awasthi",
    icon: Twitter,
  },
  {
    platform: "Instagram",
    handle: "@anish_awasthi",
    url: "https://www.instagram.com/anish_awasthi",
    icon: Instagram,
  },
  {
    platform: "LinkedIn",
    handle: "@anish3333",
    url: "https://linkedin.com/in/anish3333",
    icon: Linkedin,
  },
  {
    platform: "GitHub",
    handle: "@anish3333",
    url: "https://github.com/anish3333",
    icon: Github,
  },
  {
    platform: "Leetcode",
    handle: "@anish-awasthi",
    url: "https://leetcode.com/u/anish-awasthi/",
    icon: Code,
  },
];

export function ConnectCard() {
  return (
    <Card className="rounded-xl p-4 border-none transition-all duration-300 hover:scale-[1.02] bg-zinc-800 text-zinc-100 h-full shadow-lg">
      <h2 className="font-bold mb-4 text-lg tracking-tight">Let's Connect</h2>
      <div className="grid lg:grid-cols-2 sm:grid-cols-6 max-sm:grid-cols-3  gap-3">
        {socialLinks.map((link) => {
          const Icon = link.icon;
          return (
            <a
              key={link.platform}
              href={link.url}
              className="flex flex-col items-center justify-center gap-2 text-xs hover:text-purple-400 bg-zinc-700/50 rounded-lg p-3 transition-all duration-200 hover:bg-zinc-700/70 group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon className="w-8 h-8 bg-zinc-800 p-1.5 rounded-lg transition-transform duration-200 group-hover:scale-110" />
            </a>
          );
        })}
      </div>
    </Card>
  );
}

