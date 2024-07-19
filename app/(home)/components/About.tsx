import React from 'react';
import Title from './Title';
import Image from 'next/image';
import profilePic from '../../../public/profilePic.png';
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
          src={profilePic}
          className="w-80 h-80 rounded-full border-dashed border-8 border-indigo-500 hover:rotate-6 transition-all"
        ></Image>
        <p className="md:w-5/6 px-8 text-lg text-gray-300">
          {
            "I'm a software engineer and an incoming graduate student at USC's MSCS program. I'm also a first-generation student and proudly LGBTQIA+."
          }
        </p>
        <p className="md:w-5/6 px-8 text-lg text-gray-300">
          {
            'My background continually offers me new perspectives and strengthens my belief in the importance of creating societal good through impactful programs.'
          }
        </p>
        <p className="md:w-5/6 px-8 text-lg text-gray-300">
          {
            'In my free time, I enjoy playing basketball and participating in volunteer groups to serve the community 💪 Sounds interesting? Feel free to '
          }
          <Link
            href={'mailto:ziyuchen2002@gmail.com'}
            className="text-lg text-indigo-500 inline-block "
          >
            contact me!
          </Link>
        </p>
      </div>
    </div>
  );
}
