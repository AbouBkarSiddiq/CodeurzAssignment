import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.jpg";

export default function Navbar() {
  
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-0 navbar-expand-lg ">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-white"
              to="/"
            >
              <img src={Logo} alt="Logo" className="object-contain w-16" />
            </Link>
            <button
              type="button"
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden focus:outline-none"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <svg
                className="fill-current stroke-current stroke-1 text-green-500 cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
              >
                <title>menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
              </svg>
            </button>
          </div>
          <div
            style={{
              backgroundColor: navbarOpen
                ? "rgba(255, 255, 255, 1)"
                : "transparent",
            }}
            className={
              "lg:flex flex-col absolute top-0 right-0 left-0 pl-0 lg:py-4 lg:px-8 z-20 items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
          >
            <ul className="flex flex-col py-14 lg:py-0 text-green-700 lg:flex-row lg:ml-auto">
              <li className={'lg:hidden absolute text-2xl text-green-700 font-bold top-6 right-10'} onClick={() => setNavbarOpen(!navbarOpen)} style={{}}>
                X
              </li>
              <li className="flex justify-center items-center">
                <img src={Logo} alt="" className="lg:hidden mb-4" />
              </li>
              <li>
                <Link
                  to="/"
                  className="md:p-2 py-2 font-sans font-medium text-lg leading-7 px-0 border-b-4 border-transparent hover:border-green-500 lg:px-4 block"
                  onClick={() => setNavbarOpen(!navbarOpen)}
                >
                  Home
                </Link>
              </li>
              <li className="">
                <Link
                  to="/Products"
                  className="md:p-2 py-2 font-sans font-medium text-lg leading-7 border-b-4 border-transparent hover:border-green-500 lg:px-4 px-0 block"
                  onClick={() => setNavbarOpen(!navbarOpen)}
                >
                  Prouducts
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="md:p-2 py-2 font-sans font-medium text-lg leading-7 border-b-4 border-transparent hover:border-green-500 lg:px-4 px-0 block"
                  onClick={() => setNavbarOpen(!navbarOpen)}
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="md:p-2 py-2 font-sans font-medium text-lg leading-7 border-b-4 border-transparent hover:border-green-500 lg:px-4 px-0 block"
                  onClick={() => setNavbarOpen(!navbarOpen)}
                >
                  Contact
                </Link>
              </li>
              <button className="flex items-center shadow-lg focus:outline-none rounded-lg px-4 py-2 border object-contain h-12 hover:bg-green-700 bg-green-500">
                <a target='_blank' rel="noreferrer" href="https://web.whatsapp.com/send?phone=+923038675475&text=" className="font-bold text-white text-xl">
                  (92) 303-867 5475
                </a>
              </button>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
