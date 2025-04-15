import React from 'react';
import Link from 'next/link';

import { SiLinkedin } from 'react-icons/si';
import { SiGithub } from 'react-icons/si';
import { SiInstagram } from 'react-icons/si';
import { cn } from '@/lib/utils';

export default function Navbar({ className }: { className?: string }) {
  const socials = [
    {
      link: 'https://www.linkedin.com/',
      label: 'Linkedin',
      Icon: SiLinkedin,
    },
    {
      link: 'https://github.com/',
      label: 'Github',
      Icon: SiGithub,
    },
    {
      link: 'https://www.instagram.com/',
      label: 'Instagram',
      Icon: SiInstagram,
    },
  ];
  return (
    <nav className={cn(' py-10 flex justify-between items-center', className)}>
      <h1 className="text-2xl font-bold underline underline-offset-8 decoration-green-500 -rotate-2">
        Templatey 🧑🏻‍💻
      </h1>
      <div className="flex items-center gap-5">
        {socials.map((social, index) => {
          return (
            <Link key={index} href={social.link} aria-label={social.label}>
              <social.Icon className="w-5 h-5 hover:scale-125 transition-all" />
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
