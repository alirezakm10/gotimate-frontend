import { useState } from "react";
import Link from 'next/link'

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <nav className=" border-gray-200 dark:bg-gray-900 md:px-[100px]">
      <div className="max-w-screen flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://gotimate.com/" className="flex items-center">
          <img
            src="/gotimate-logo.png"
            className="h-10 mr-3 hidden md:block"
            alt="gotimate Logo"
          />
          {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Flowbite
          </span> */}
        </a>
        <div className="flex md:order-2">
          <div className="gap-2 hidden md:flex">
            <button
              type="button"
              className="text-black   hover:text-cyan-800 transition-all  font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
            >
              login
            </button>
            <button
              type="button"
              className="text-white bg-cyan-800 hover:bg-gray-400 transition-all focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
            >
              Sign up
            </button>
          </div>

          {/* hamburger menu logo and user icon in mobile mode */}
     <div className="w-screen flex md:hidden justify-between" >
     <button
            data-collapse-toggle="navbar-cta"
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-cta"
            aria-expanded="false"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span class="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <img src="/gotimate-logo.png" class="h-10 mr-3" alt="gotimate Logo" />
          <button
            type="button"
            className="rounded-lg text-sm px-6 py-2 text-center mr-3 md:mr-0 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
          >
            <svg
              width="32"
              height="33"
              viewBox="0 0 32 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.7712 13.6046C20.7714 12.6044 21.3333 11.2478 21.3333 9.83333C21.3333 8.41885 20.7714 7.06229 19.7712 6.0621C18.771 5.0619 17.4144 4.5 16 4.5C14.5855 4.5 13.2289 5.0619 12.2287 6.0621C11.2285 7.06229 10.6666 8.41885 10.6666 9.83333C10.6666 11.2478 11.2285 12.6044 12.2287 13.6046C13.2289 14.6048 14.5855 15.1667 16 15.1667C17.4144 15.1667 18.771 14.6048 19.7712 13.6046Z"
                stroke="#637381"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9.4003 21.9003C11.1506 20.15 13.5246 19.1667 16 19.1667C18.4753 19.1667 20.8493 20.15 22.5996 21.9003C24.35 23.6507 25.3333 26.0246 25.3333 28.5H6.66663C6.66663 26.0246 7.64996 23.6507 9.4003 21.9003Z"
                stroke="#637381"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
     </div>

          {/* this div is for mobile nav items container */}
          <div className={`${isNavOpen ? "showMenuNav" : "hideMenuNav"}`}>
            <div
              className="CROSS-ICON absolute top-0 right-0 px-8 py-8 cursor-pointer"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]">
              <li className="border-b border-gray-400 my-8 uppercase">
              <Link href='/' >
              Home
              </Link>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <Link href="/portfolio">PLinkrtnership</Link>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <Link href="/contact">About</Link>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <Link href="/contact">Contact us</Link>
              </li>
            </ul>
          </div>
        </div>
        <div
          class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-cta"
        >
          <ul className="flex flex-col font-normal p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                href="/"
                className="block py-2 pl-3 pr-4 text-gray-800  rounded md:bg-transparent  md:p-0 md:dark:text-blue-500"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/partnership"
                className="block py-2 pl-3 pr-4 text-gray-800 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Partnership
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="block py-2 pl-3 pr-4 text-gray-800 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="block py-2 pl-3 pr-4 text-gray-800 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Contact us
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* these styles is for mobile menu navbar */}
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </nav>
  );
};

export default Navbar;
