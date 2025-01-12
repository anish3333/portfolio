'use client'

import React from 'react';
import { Card } from "@/components/ui/card";
import { socialLinks } from '@/constants/social';



export function ConnectCard() {
  return (
    <Card className="rounded-xl p-4 border-none transition-all duration-300 hover:scale-[1.02] bg-first-1 text-third-1 h-full shadow-lg">
      <h2 className="font-bold mb-4 text-lg tracking-tight">Let&apos;s Connect</h2>
      <div className="grid lg:grid-cols-2 sm:grid-cols-6 max-sm:grid-cols-3  gap-3">
        {socialLinks.map((link) => {
          const Icon = link.icon;
          return (
            <a
              key={link.platform}
              href={link.url}
              className="flex flex-col items-center justify-center gap-2 text-xs hover:text-second-1 bg-gray-800 rounded-lg p-3 transition-all duration-200  group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon className="w-8 h-8 bg-gray-900/50 p-1.5 hover:bg-second-1 text-third-1 rounded-lg transition-transform duration-200 group-hover:scale-110" />
            </a>
          );
        })}
      </div>
    </Card>
  );
}

