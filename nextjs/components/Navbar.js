import React from 'react';
import logo from '../assets/logo_1.png';
import Image from 'next/image';
import { CiMenuFries } from 'react-icons/ci';
import { VscClose } from 'react-icons/vsc';

function Navbar() {
  function toggleMenu() {
    document.getElementById('mobile-nav').classList.toggle('hidden');
    document.getElementById('burgerMenu').classList.toggle('hidden');
    document.getElementById('closeMenu').classList.toggle('hidden');
  }

  return (
    <div className="fixed px-10 top-10 text-emerald-50  w-full h-10  lg:flex lg:px-24 lg:gap-x-10 tracking-widest z-20">
      <div className="w-full flex h-10 justify-between items-center">
        <a href="#hero" className="w-8 rotate-12">
          <Image src={logo} alt="pp" />
        </a>

        <CiMenuFries
          size={30}
          className="lg:hidden"
          id="burgerMenu"
          onClick={toggleMenu}
        />
        <VscClose
          size={20}
          className="hidden lg:hidden"
          id="closeMenu"
          onClick={toggleMenu}
        />
      </div>

      <ul
        className="hidden flex flex-col w-1/2 ml-auto items-end pt-2 gap-x-8 text-sm  lg:flex lg:flex-row lg:pr-40 "
        id="mobile-nav"
      >
        <li className="hover:text-emerald-500">
          <a href="#about">About</a>
        </li>
        <li className="hover:text-emerald-500">
          <a href="#skills">Skills</a>
        </li>
        <li className="hover:text-emerald-500">
          <a href="#projects">Projects</a>
        </li>
        <li className="hover:text-emerald-500">
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
