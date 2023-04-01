import React from 'react';
import {
  SiJavascript,
  SiCss3,
  SiTailwindcss,
  SiHtml5,
  SiReact,
  SiReactrouter,
  SiReacthookform,
  SiRedux,
  SiNodedotjs,
  SiNodemon,
  SiExpress,
  SiNextdotjs,
  SiCypress,
  SiStrapi,
  SiJest,
  SiFigma,
  SiMysql,
  SiSqlite,
  SiVite,
  SiVercel,
} from 'react-icons/si';

function Skills() {
  return (
    <div className="container mx-auto h-full flex flex-col justify-end py-12 px-8 text-center lg:px-20">
      <div className="py-20 flex flex-col text-left text-neutral-200 gap-y-4">
        <p>skills</p>
        <div className="flex w-full flex-wrap gap-x-6 gap-y-6 text-neutral-300 lg:w-1/2 lg:justify-center lg:mx-auto lg:pt-20">
          <div className="flex gap-x-2 items-end">
            <SiJavascript size={30} />
            <p className="text-sm">JavaScript</p>
          </div>
          <div className="flex gap-x-2 items-end">
            <SiCss3 size={30} />
            <p className="text-sm">CSS3</p>
          </div>
          <div className="flex gap-x-2 items-end">
            <SiHtml5 size={30} />
            <p className="text-sm">HTML5</p>
          </div>
          <div className="flex gap-x-2 items-end">
            <SiTailwindcss size={30} />
            <p className="text-sm">Tailwind</p>
          </div>
          <div className="flex gap-x-2 items-end">
            <SiReact size={30} />
            <p className="text-sm">React.js</p>
          </div>
          <div className="flex gap-x-2 items-end">
            <SiReactrouter size={30} />
            <p className="text-sm">ReactRouter</p>
          </div>
          <div className="flex gap-x-2 items-end">
            <SiReacthookform size={30} />
            <p className="text-sm">ReactHookForm</p>
          </div>
          <div className="flex gap-x-2 items-end">
            <SiRedux size={30} />
            <p className="text-sm">Redux</p>
          </div>
          <div className="flex gap-x-2 items-end">
            <SiNodedotjs size={30} />
            <p className="text-sm">Node.js</p>
          </div>
          <div className="flex gap-x-2 items-end">
            <SiNodemon size={30} />
            <p className="text-sm">Nodemon</p>
          </div>
          <div className="flex gap-x-2 items-end">
            <SiExpress size={30} />
            <p className="text-sm">Express.js</p>
          </div>
          <div className="flex gap-x-2 items-end">
            <SiNextdotjs size={30} />
            <p className="text-sm">Next.js</p>
          </div>
          <div className="flex gap-x-2 items-end">
            <SiCypress size={30} />
            <p className="text-sm">Cypress</p>
          </div>
          <div className="flex gap-x-2 items-end">
            <SiJest size={30} />
            <p className="text-sm">Jest</p>
          </div>
          <div className="flex gap-x-2 items-end">
            <SiStrapi size={30} />
            <p className="text-sm">Strapi</p>
          </div>
          <div className="flex gap-x-2 items-end">
            <SiFigma size={30} />
            <p className="text-sm">Figma</p>
          </div>
          <div className="flex gap-x-2 items-end">
            <SiMysql size={30} />
            <p className="text-sm">MySQL</p>
          </div>
          <div className="flex gap-x-2 items-end">
            <SiSqlite size={30} />
            <p className="text-sm">SQLite</p>
          </div>
          <div className="flex gap-x-2 items-end">
            <SiVite size={30} />
            <p className="text-sm">Vite</p>
          </div>
          <div className="flex gap-x-2 items-end">
            <SiVercel size={30} />
            <p className="text-sm">Vercel</p>
          </div>
        </div>
      </div>
      <div className="mt-auto text-white lg:ml-auto">
        <a
          href="#projects"
          className="px-6 py-2 bg-emerald-600 rounded-xl hover:bg-opacity-90"
        >
          Projects
        </a>
      </div>
    </div>
  );
}

export default Skills;
