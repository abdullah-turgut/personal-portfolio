import React from 'react';
import { MdOutlineMail, MdCall, MdOutlineFileDownload } from 'react-icons/md';

function Contact() {
  return (
    <div className="py-12 px-6 flex flex-col w-full h-full text-center  mx-auto lg:px-20 text-neutral-300 justify-center items-center gap-y-8">
      <div className="flex gap-x-4">
        <MdCall size={20} />
        <p className="text-sm">+90 506 313 7769</p>
      </div>
      <div className="flex gap-x-4">
        <MdOutlineMail size={20} />
        <p className="text-sm">abdullah.turgut.94@gmail.com</p>
      </div>
      <div className="flex flex-col justify-center items-center gap-x-4 gap-y-2 pt-4">
        <a href="/resume.pdf" className="text-sm" download={true}>
          My Resumé
        </a>
        <MdOutlineFileDownload size={20} />
      </div>
    </div>
  );
}

export default Contact;
