import React from "react";
import {Link} from "react-scroll"
import { animateScroll as scroll } from "react-scroll";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="fixed z-50 bg-gray-200 w-full flex flex-wrap items-center justify-between px-2 py-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between" >
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start cursor-pointer" >
            <Link
              className="text-lg font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-gray-600"
              to="home" smooth={true} duration={1000} onClick={()=>scroll.scrollToTop()}
            >
              CODEURZ
            </Link>
            <button
              type="button"
              className="text-gray-600 cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden focus:outline-none"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <svg
                className="fill-current stroke-current stroke-1 text-gray-500 cursor-pointer"
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
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id=""
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center text-md uppercase font-bold leading-snug text-gray-600 hover:opacity-75 cursor-pointer"
                  to="home" smooth={true} duration={1000}
                >
                  <span className="ml-2">Home</span>
                </Link>
              </li>
              <li className="">
                <Link
                  className="px-3 py-2 flex items-center text-md uppercase font-bold leading-snug text-gray-600 hover:opacity-75 cursor-pointer"
                  to="aboutus" smooth={true} duration={1000}
                >
                  <span className="ml-2">About</span>
                </Link>
              </li>
              <li className="">
                <Link
                  className="px-3 py-2 flex items-center text-md uppercase font-bold leading-snug text-gray-600 hover:opacity-75 cursor-pointer"
                  to="work" smooth={true} duration={1000}
                >
                 <span className="ml-2">Work</span>
                </Link>
              </li>
              <li className="">
                <Link
                  className="px-3 py-2 flex items-center text-md uppercase font-bold leading-snug text-gray-600 hover:opacity-75 cursor-pointer"
                  to="process" smooth={true} duration={1000}
                >
                 <span className="ml-2">Process</span>
                </Link>
              </li>
              <li className="">
                <Link
                  className="px-3 py-2 flex items-center text-md uppercase font-bold leading-snug text-gray-600 hover:opacity-75 cursor-pointer"
                  to="services" smooth={true} duration={1000}
                >
                 <span className="ml-2">Services</span>
                </Link>
              </li>
              <li className="">
                <Link
                  className="px-3 py-2 flex items-center text-md uppercase font-bold leading-snug text-gray-600 hover:opacity-75 cursor-pointer"
                  to="testimonial" smooth={true} duration={1000}
                >
                 <span className="ml-2">testimonials</span>
                </Link>
              </li>
              <li className="">
                <Link
                  className="px-3 py-2 flex items-center text-md uppercase font-bold leading-snug text-gray-600 hover:opacity-75 cursor-pointer"
                  to="form" smooth={true} duration={1000}
                >
                 <span className="ml-2">Contact</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}