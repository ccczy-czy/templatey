'use client';

import React from 'react';
import Title from './Title';
import { HoverEffect } from '@/components/ui/card-hover-effect';
import { SiReact } from 'react-icons/si';
import { SiNextdotjs } from 'react-icons/si';
import { SiTailwindcss } from 'react-icons/si';
import { SiFlask } from 'react-icons/si';
import { SiMongodb } from 'react-icons/si';
import { SiGit } from 'react-icons/si';
import { SiNodedotjs } from 'react-icons/si';
import { SiAngular } from 'react-icons/si';
import { SiJavascript } from 'react-icons/si';

export default function Skills() {
  const skills = [
    {
      text: 'React',
      Icon: SiReact,
    },
    {
      text: 'Next.js',
      Icon: SiNextdotjs,
    },
    {
      text: 'Tailwind',
      Icon: SiTailwindcss,
    },
    {
      text: 'Flask',
      Icon: SiFlask,
    },
    {
      text: 'MongoDB',
      Icon: SiMongodb,
    },
    {
      text: 'Git',
      Icon: SiGit,
    },
    {
      text: 'Node.js',
      Icon: SiNodedotjs,
    },
    {
      text: 'Angular',
      Icon: SiAngular,
    },
    {
      text: 'JavaScript',
      Icon: SiJavascript,
    },
  ];
  return (
    <div className=" max-w-5xl mx-auto px-8">
      <Title
        text="Skills 🔪"
        className="flex flex-col items-center justify-center rotate-6"
      />
      <HoverEffect items={skills} />
    </div>
  );
}
