import React from "react";
import {Link} from "react-scroll"
import { animateScroll as scroll } from "react-scroll";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="absolute z-50 w-full bg-transparent flex flex-wrap items-center justify-between px-2 py-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between" >
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start" >
            <Link
              className="text-lg font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
              to="home" smooth={true} duration={1000} onClick={()=>scroll.scrollToTop()}
            >
              CODEURZ
            </Link>
            <button
              type="button"
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden focus:outline-none"
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
                  className="px-3 py-2 flex items-center text-md uppercase font-bold leading-snug text-white hover:opacity-75"
                  to="home" smooth={true} duration={1000}
                >
                  <span className="ml-2">Home</span>
                </Link>
              </li>
              <li className="">
                <Link
                  className="px-3 py-2 flex items-center text-md uppercase font-bold leading-snug text-white hover:opacity-75"
                  to="aboutus" smooth={true} duration={1000}
                >
                  <span className="ml-2">About</span>
                </Link>
              </li>
              <li className="">
                <Link
                  className="px-3 py-2 flex items-center text-md uppercase font-bold leading-snug text-white hover:opacity-75"
                  to="work" smooth={true} duration={1000}
                >
                 <span className="ml-2">Work</span>
                </Link>
              </li>
              <li className="">
                <Link
                  className="px-3 py-2 flex items-center text-md uppercase font-bold leading-snug text-white hover:opacity-75"
                  to="process" smooth={true} duration={1000}
                >
                 <span className="ml-2">Process</span>
                </Link>
              </li>
              <li className="">
                <Link
                  className="px-3 py-2 flex items-center text-md uppercase font-bold leading-snug text-white hover:opacity-75"
                  to="services" smooth={true} duration={1000}
                >
                 <span className="ml-2">Services</span>
                </Link>
              </li>
              <li className="">
                <Link
                  className="px-3 py-2 flex items-center text-md uppercase font-bold leading-snug text-white hover:opacity-75"
                  to="testimonial" smooth={true} duration={1000}
                >
                 <span className="ml-2">testimonials</span>
                </Link>
              </li>
              <li className="">
                <Link
                  className="px-3 py-2 flex items-center text-md uppercase font-bold leading-snug text-white hover:opacity-75"
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
// import React from "react";
// import { useState } from "react";
// import logo from '../../assets/images/logo.png'

// export default function Navbar() {

//   const [navbarOpen, setNavbarOpen] = useState(false);

//   return (
//     <div>
//       <nav className="flex flex-wrap items-center justify-between  px-2 py-0 navbar-expand-lg ">
//         <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
//           <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
//             <a
//               className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-white"
//               to="/"
//             />
//               <img src={logo} alt="Logo" className="object-contain w-16" />
//             <button
//               type="button"
//               className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden focus:outline-none"
//               onClick={() => setNavbarOpen(!navbarOpen)}
//             >
//               <svg
//                 className="fill-current stroke-current stroke-1 text-green-500 cursor-pointer"
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="20"
//                 height="20"
//                 viewBox="0 0 20 20"
//               >
//                 <title>menu</title>
//                 <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
//               </svg>
//             </button>
//           </div>
//           <div
//             style={{
//               backgroundColor: navbarOpen
//                 ? "rgba(255, 255, 255, 1)"
//                 : "transparent",
//             }}
//             className={
//               "lg:flex flex-col absolute top-0 right-0 left-0 pl-0 lg:py-4 lg:px-8 z-20 items-center" +
//               (navbarOpen ? " flex" : " hidden")
//             }
//           >
//             <ul className="flex flex-col py-14 lg:py-0 text-green-700 lg:flex-row lg:ml-auto">
//               <li className={'lg:hidden absolute text-2xl text-green-700 font-bold top-6 right-10'} onClick={() => setNavbarOpen(!navbarOpen)} style={{}}>
//                 X
//               </li>
//               <li className="flex justify-center items-center">
//               </li>
//               <li>
//                 <a
//                   to="/"
//                   className="md:p-2 py-2 font-sans font-medium text-lg leading-7 px-0 border-b-4 border-transparent hover:border-green-500 lg:px-4 block"
//                   onClick={() => setNavbarOpen(!navbarOpen)}
//                 >
//                   Home
//                 </a>
//               </li><li>
//                 <a
//                   to="/"
//                   className="md:p-2 py-2 font-sans font-medium text-lg leading-7 px-0 border-b-4 border-transparent hover:border-green-500 lg:px-4 block"
//                   onClick={() => setNavbarOpen(!navbarOpen)}
//                 >
//                   About
//                 </a>
//               </li><li>
//                 <a
//                   to="/"
//                   className="md:p-2 py-2 font-sans font-medium text-lg leading-7 px-0 border-b-4 border-transparent hover:border-green-500 lg:px-4 block"
//                   onClick={() => setNavbarOpen(!navbarOpen)}
//                 >
//                   Work
//                 </a>
//               </li><li>
//                 <a
//                   to="/"
//                   className="md:p-2 py-2 font-sans font-medium text-lg leading-7 px-0 border-b-4 border-transparent hover:border-green-500 lg:px-4 block"
//                   onClick={() => setNavbarOpen(!navbarOpen)}
//                 >
//                   Process
//                 </a>
//               </li>
//               <li className="">
//                 <a
//                   to="/Products"
//                   className="md:p-2 py-2 font-sans font-medium text-lg leading-7 border-b-4 border-transparent hover:border-green-500 lg:px-4 px-0 block"
//                   onClick={() => setNavbarOpen(!navbarOpen)}
//                 >
//                   Services
//                 </a>
//               </li>
//               <li>
//                 <a
//                   to="/gallery"
//                   className="md:p-2 py-2 font-sans font-medium text-lg leading-7 border-b-4 border-transparent hover:border-green-500 lg:px-4 px-0 block"
//                   onClick={() => setNavbarOpen(!navbarOpen)}
//                 >
//                   Testimonials
//                 </a>
//               </li>
//               <li>
//                 <a
//                   to="/contact"
//                   className="md:p-2 py-2 font-sans font-medium text-lg leading-7 border-b-4 border-transparent hover:border-green-500 lg:px-4 px-0 block"
//                   onClick={() => setNavbarOpen(!navbarOpen)}
//                 >
//                   Contact
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// }
// import React, { useState } from "react";
// import { Transition } from "@headlessui/react";

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   return (
//     <div>
//       <nav className="bg-gray-800">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-16">
//             <div className="flex items-center">
//               <div className="flex-shrink-0">
//                 <img
//                   className="h-8 w-8"
//                   src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
//                   alt="Workflow"
//                 />
//               </div>
//               <div className="hidden md:block">
//                 <div className="ml-10 flex items-baseline space-x-4">
//                   <a
//                     href="#"
//                     className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
//                   >
//                     Dashboard
//                   </a>

//                   <a
//                     href="#"
//                     className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
//                   >
//                     Team
//                   </a>

//                   <a
//                     href="#"
//                     className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
//                   >
//                     Projects
//                   </a>

//                   <a
//                     href="#"
//                     className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
//                   >
//                     Calendar
//                   </a>

//                   <a
//                     href="#"
//                     className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
//                   >
//                     Reports
//                   </a>
//                 </div>
//               </div>
//             </div>
//             <div className="-mr-2 flex md:hidden">
//               <button
//                 onClick={() => setIsOpen(!isOpen)}
//                 type="button"
//                 className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
//                 aria-controls="mobile-menu"
//                 aria-expanded="false"
//               >
//                 <span className="sr-only">Open main menu</span>
//                 {!isOpen ? (
//                   <svg
//                     className="block h-6 w-6"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                     aria-hidden="true"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M4 6h16M4 12h16M4 18h16"
//                     />
//                   </svg>
//                 ) : (
//                   <svg
//                     className="block h-6 w-6"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                     aria-hidden="true"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M6 18L18 6M6 6l12 12"
//                     />
//                   </svg>
//                 )}
//               </button>
//             </div>
//           </div>
//         </div>

//         <Transition
//           show={isOpen}
//           enter="transition ease-out duration-100 transform"
//           enterFrom="opacity-0 scale-95"
//           enterTo="opacity-100 scale-100"
//           leave="transition ease-in duration-75 transform"
//           leaveFrom="opacity-100 scale-100"
//           leaveTo="opacity-0 scale-95"
//         >
//           {(ref) => (
//             <div className="md:hidden" id="mobile-menu">
//               <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//                 <a
//                   href="#"
//                   className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
//                 >
//                   Dashboard
//                 </a>

//                 <a
//                   href="#"
//                   className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
//                 >
//                   Team
//                 </a>

//                 <a
//                   href="#"
//                   className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
//                 >
//                   Projects
//                 </a>

//                 <a
//                   href="#"
//                   className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
//                 >
//                   Calendar
//                 </a>

//                 <a
//                   href="#"
//                   className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
//                 >
//                   Reports
//                 </a>
//               </div>
//             </div>
//           )}
//         </Transition>
//       </nav>

//       <header className="bg-white shadow">
//         <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
//           <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
//         </div>
//       </header>
//       <main>
//         <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
//           {/* <!-- Replace with your content --> */}
//           <div className="px-4 py-6 sm:px-0">
//             <div className="border-4 border-dashed border-gray-200 rounded-lg h-96"></div>
//           </div>
//           {/* <!-- /End replace --> */}
//         </div>
//       </main>
//     </div>
//   );
// }

// export default Navbar;