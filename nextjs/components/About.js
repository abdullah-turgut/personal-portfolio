import React from 'react';
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
import avatar from '../assets/linkedin_pp2.jpg';

function About() {
  return (
    <div className="container mx-auto h-full flex flex-col justify-end py-12 px-8 text-center lg:px-20">
      <p className="text-white pt-10 px-2 mr-auto">about</p>
      <div className="mx-auto flex flex-col mt-auto gap-y-14 justify-center items-center lg:flex-row lg:gap-x-10">
        <div className="w-full lg:order-3">
          <Image
            className="rounded-full mx-auto border-2 border-emerald-300 grayscale-[30%]"
            src={avatar}
            alt="pp"
            width={150}
            height={150}
          />
        </div>
        <div className="h-[1px] bg-emerald-600 w-3/4 lg:w-1/2 lg:order-2 lg:hidden"></div>
        <p className="mt-auto lg:order-1 lg:text-left lg:leading-10">
          After graduated from Political Science field, I met with coding for
          the first time in the company I worked. As a hobby, I started to learn
          JavaScript. My interest in software development got deeper. I wanted
          to change my career in this field. In November 2022, I got accepted to
          intensive fullstack web development program. My goal is to have a
          fresh career in software field and improve myself.
        </p>
      </div>

      <div className="mt-auto text-white lg:ml-auto">
        <a
          href="#skills"
          className="px-6 py-2 bg-emerald-600 rounded-xl hover:bg-opacity-90"
        >
          Skills
        </a>
      </div>
    </div>
  );
}

export default About;
