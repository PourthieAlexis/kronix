"use client";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex md:justify-evenly justify-between mb-16 items-center h-20 px-4 shadow-md md:px-8">
      <div className="text-[32px] font-bold">
        Kro<span className="text-[#B9FD50]">nix</span>
      </div>

      <div className="md:hidden z-50" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
      </div>

      <nav
        className={`fixed top-0 right-0 h-full w-3/4 bg-[#111204] shadow-md transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden z-40`}
      >
        <ul className="flex flex-col gap-6 mt-24 p-6 text-xl font-semibold text-white">
          <li>
            <a href="#process" onClick={() => setIsOpen(false)}>
              Process
            </a>
          </li>
          <li>
            <a href="#portfolio" onClick={() => setIsOpen(false)}>
              Portfolio
            </a>
          </li>
          <li>
            <a href="#benefits" onClick={() => setIsOpen(false)}>
              Benefits
            </a>
          </li>
          <li>
            <a href="#services" onClick={() => setIsOpen(false)}>
              Services
            </a>
          </li>
          <li>
            <a href="#faq" onClick={() => setIsOpen(false)}>
              FAQ
            </a>
          </li>
        </ul>
        <button className="bg-[#B9FD50] w-fit py-4 px-8 rounded-lg text-black text-base mx-6 mt-6">
          Get Started
        </button>
      </nav>

      <nav className="hidden md:flex gap-8 items-center">
        <ul className="flex gap-6 text-lg">
          <li>
            <a href="#process">Process</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#benefits">Benefits</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#faq">FAQ</a>
          </li>
        </ul>
        <button className="bg-[#B9FD50] w-fit py-4 px-8 rounded-lg text-black text-base">
          Get Started
        </button>
      </nav>
    </header>
  );
}
