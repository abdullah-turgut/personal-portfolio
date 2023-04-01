import React from 'react';
import {} from 'react-icons/si';

function Skills() {
  return (
    <div className="container mx-auto h-full flex flex-col justify-end py-12 px-8 text-center lg:px-20">
      <p className="text-white pt-10 px-2 mr-auto">skills</p>

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
