'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <nav className="flex items-center justify-between space-x-2 font-bold px-5 py-5 max-w-7xl mx-auto">
      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image
            className="rounded-full"
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI3MiIgaGVpZ2h0PSI3MiIgZmlsbD0ibm9uZSI+PHBhdGggZmlsbD0iI0ZGQzM1QiIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzYgNzJjMTkuODgyIDAgMzYtMTYuMTE4IDM2LTM2UzU1Ljg4MiAwIDM2IDAgMCAxNi4xMTggMCAzNnMxNi4xMTggMzYgMzYgMzZ6TTI2IDE5YTMgMyAwIDAxMy0zaDE0YzYuNjI3IDAgMTIgNS4zNzMgMTIgMTIgMCA2LjI5LTQuODQgMTEuNDUtMTEgMTEuOTU5di02LjA0MkE2LjAwMiA2LjAwMiAwIDAwNDMgMjJIMzJ2MjVhMyAzIDAgMTEtNiAwVjE5em0zIDM0YTYgNiAwIDAwNi02VjI1aDhhMyAzIDAgMTEwIDZoLTJ2MTZjMCA2LjYyNy01LjM3MyAxMi0xMiAxMnMtMTItNS4zNzMtMTItMTJhMyAzIDAgMTE2IDAgNiA2IDAgMDA2IDZ6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4="
            width={50}
            height={50}
            alt="logo"
          />
        </Link>
      </div>
      <div className="flex ">
        <Link
          href="#about"
          className="px-5 py-3 mx-2 text-sm md:text-base text-white items-center rounded-lg text-center hidden md:block"
        >
          About
        </Link>
        <Link
          href="#skills"
          className="px-5 py-3 mx-2 text-sm md:text-base text-white items-center rounded-lg text-center hidden md:block"
        >
          Skills
        </Link>
        <Link
          href="#portfolio"
          className="px-5 py-3 mx-2 text-sm md:text-base text-white items-center rounded-lg text-center hidden md:block"
        >
          Portfolio
        </Link>
        <Link
          href="#blog"
          className="px-5 py-3 mx-2 text-sm md:text-base text-white items-center rounded-lg text-center hidden md:block"
        >
          Blog
        </Link>
        <Link
          href="https://www.linkedin.com/in/pirasanth-jesugeevegan/"
          className="px-5 py-3 mx-2 text-sm md:text-base bg-primary text-[#252734] flex items-center rounded-lg text-center"
        >
          Contact
        </Link>
        <Link
          href="https://cdn.sanity.io/files/vsjc2cwt/production/4bc12cc417f2ab375099031780e981a6f585a6c1.pdf"
          className="px-5 py-3 mx-2 text-sm md:text-base bg-primary text-[#252734] flex items-center rounded-lg text-center"
        >
          CV <p className="px-2 text-pdf">(PDF)</p>
        </Link>
        <div className="md:hidden flex items-center">
          <button
            className="outline-none mobile-menu-button"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <svg
              className=" w-6 h-6 text-gray-500 hover:text-primary"
              x-show="!showMenu"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
