import React from 'react';
import Title from './Title';
import Image from 'next/image';
import avatar from '../../../public/avatar.png';
import Link from 'next/link';

export default function About() {
  return (
    <div className=" max-w-5xl mx-auto px-8">
      <Title
        text="About Me 😎"
        className="flex flex-col items-center justify-center -rotate-6"
      />
      <div className="py-20 flex flex-col items-center justify-center gap-6">
        <Image
          alt="profile_pic"
          src={avatar}
          className="w-80 h-80 rounded-full border-dashed border-8 border-indigo-500 hover:rotate-6 transition-all"
        ></Image>
        <p className="md:w-5/6 px-8 text-lg text-gray-300">
          {
            "This is a personal portfolio template where you can showcase your projects and introduce yourself to the world."
          }
        </p>
        <p className="md:w-5/6 px-8 text-lg text-gray-300">
          {
            'It is interactive and responsive; it adds colors to your profile.'
          }
        </p>
        <p className="md:w-5/6 px-8 text-lg text-gray-300">
          {
            'Sounds interesting? Feel free to '
          }
          <Link
            href={'mailto:someone@example.com'}
            className="text-lg text-indigo-500 inline-block "
          >
            try out!
          </Link>
        </p>
      </div>
    </div>
  );
}
