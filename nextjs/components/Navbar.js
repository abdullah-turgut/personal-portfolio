import React from 'react';
import logo from '../assets/logo_1.png';
import Image from 'next/image';
import { CiMenuFries } from 'react-icons/ci';

function Navbar() {
  return (
    <div className="fixed px-10 top-10 text-emerald-50 flex w-full h-10 items-center justify-between lg:px-32 lg:gap-x-10 tracking-widest">
      <div className="w-10 rotate-12">
        <Image src={logo}></Image>
      </div>
      <div>
        <CiMenuFries size={30} className="hover:text-emerald-500 lg:hidden" />
        <ul className="hidden gap-x-8 text-sm lg:flex lg:pr-40">
          <li className="hover:text-emerald-500">
            <a href="#hero">HOME</a>
          </li>
          <li className="hover:text-emerald-500">
            <a href="#about">ABOUT</a>
          </li>
          <li className="hover:text-emerald-500">
            <a href="#skills">SKILLS</a>
          </li>
          <li className="hover:text-emerald-500">
            <a href="#projects">PROJECTS</a>
          </li>
          <li className="hover:text-emerald-500">
            <a href="#contact">CONTACT</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
