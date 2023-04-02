import React from 'react';
import { SiGithub, SiVercel } from 'react-icons/si';

function Projects() {
  return (
    <div className="py-12 px-6 flex flex-col w-full h-full text-center container mx-auto lg:px-20">
      <div className="flex flex-col w-full justify-center pt-10 items-center gap-y-4 lg:pt-14">
        <div className="w-4/5 rounded-md p-3 text-white text-left bg-neutral-700 flex flex-col gap-y-2">
          <p className="font-bold">Twitter-Clone (Backend)</p>
          <p className="text-sm">
            This project is created with Node.js and Express.js. In the project,
            I coded server-side of Twitter's basic functionalities.
          </p>
          <div className="w-full flex gap-x-3 justify-end">
            <a
              href="https://github.com/abdullah-turgut/fsweb-backend-challenge"
              className="hover:text-emerald-300"
              target="_blank"
            >
              <SiGithub size={20} />
            </a>
          </div>
        </div>
        <div className="w-4/5 rounded-md p-3 text-white text-left bg-neutral-700 flex flex-col gap-y-2">
          <p className="font-bold">Personal Blog</p>
          <p className="text-sm">
            In this project, I developed pixel perfect personal blog site of
            given design. I used React.js for frontend and tailwind for styling.
          </p>
          <div className="w-full flex gap-x-3 justify-end">
            <a
              href="https://github.com/abdullah-turgut/FSWeb-Frontend-Challenge"
              className="hover:text-emerald-300"
              target="_blank"
            >
              <SiGithub size={20} />
            </a>
            <a
              href="https://fs-web-frontend-challenge-alpha.vercel.app/"
              className="hover:text-emerald-300"
              target="_blank"
            >
              <SiVercel size={20} />
            </a>
          </div>
        </div>
        <div className="w-4/5 rounded-md p-3 text-white text-left bg-neutral-700 flex flex-col gap-y-2">
          <p className="font-bold">Foodify</p>
          <p className="text-sm">
            In this project, I developed food order website (frontend only). I
            used React and tailwind and mostly focused on forms and state
            management.
          </p>
          <div className="w-full flex gap-x-3 justify-end">
            <a
              href="https://github.com/abdullah-turgut/FSWeb-S7-Challenge"
              className="hover:text-emerald-300"
              target="_blank"
            >
              <SiGithub size={20} />
            </a>
            <a
              href="https://fs-web-s7-challenge-1ld9.vercel.app/"
              className="hover:text-emerald-300"
              target="_blank"
            >
              <SiVercel size={20} />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-auto text-white lg:ml-auto">
        <a
          href="#contact"
          className="px-6 py-2 bg-emerald-600 rounded-xl hover:bg-opacity-90"
        >
          Contact
        </a>
      </div>
    </div>
  );
}

export default Projects;
