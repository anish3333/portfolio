import React from 'react';
import { Menu } from 'lucide-react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { navbarLinks } from '@/constants';
import Link from 'next/link';
import Image from 'next/image';

const PopoverNav = () => {
  return (
    <div className="fixed bottom-4 right-4">
      <Popover>
        <PopoverTrigger asChild>
          <button className="p-3 bg-first-1 backdrop-blur-sm text-white rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.2)] hover:bg-blue-600/90 transition-colors">
            <Menu size={24} color='white' />
          </button>
        </PopoverTrigger>
        <PopoverContent className="w-fit border-none rounded-2xl mb-2 mr-2 bg-white/10 backdrop-blur-md shadow-[0_10px_40px_rgba(0,0,0,0.25)] p-4">
          <nav className="flex flex-col space-y-6">
            {navbarLinks.map((link) => (
              <Link
                href={link.route}
                key={link.label}
                className="rounded-lg w-full mx-auto p-2 transition-all duration-200 hover:scale-[1.1] hover:bg-white/20"
              >
                <Image
                  src={link.imageURL}
                  alt={link.label}
                  width={25}
                  height={25}
                  className="backdrop-blur-none"
                />
              </Link>
            ))}
          </nav>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default PopoverNav;