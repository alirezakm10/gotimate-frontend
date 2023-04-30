import { useState } from "react";
import Link from "next/link";
import { initialData } from "@/initialData";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { logo, navbar, socialNetworks } = initialData;

  return (
    <nav className="border-gray-200">
      <div className="overflow-hidden flex flex-wrap items-center justify-between ">
        <a href="https://gotimate.com/" className="flex items-center">
          <div className="h-10  hidden lg:flex">
            {logo}
          </div>
        </a>
        <div className="md:order-2 ">
          <div className="hidden lg:flex">
            <Link href='https://dashboard.gotimate.com/login' >
            <button
              type="button"
              className="text-darkgot text-[14px] w-[100px] h-[40px] hover:text-gotimate transition-all rounded-[10px]"
            >
              Login
            </button>
            </Link>
            <Link href='https://dahsboard.gotimate.com/signup' >
            <button
              type="button"
              className="text-white text-[14px] bg-gotimate w-[100px] h-[40px] hover:bg-gray-400 transition-all  focus:outline-none rounded-[10px]"
            >
              Sign up
            </button>
            </Link>
          </div>

          {/* hamburger menu logo and user icon in mobile mode */}
          <div className="w-screen bg-transparent flex lg:hidden justify-between">
            <button
              data-collapse-toggle="navbar-cta"
              type="button"
              className="flex items-center focus:outline-none"
              aria-controls="navbar-cta"
              aria-expanded="false"
              onClick={() => setIsNavOpen((prev) => !prev)}
            >
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="#1F2D3D"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
         {logo}
            <Link href='https://dashboard.gotimate.com'  className="flex items-center stroke-darkgot mr-10" >
        
              <svg
                width="25"
                height="25"
                viewBox="0 0 32 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.7712 13.6046C20.7714 12.6044 21.3333 11.2478 21.3333 9.83333C21.3333 8.41885 20.7714 7.06229 19.7712 6.0621C18.771 5.0619 17.4144 4.5 16 4.5C14.5855 4.5 13.2289 5.0619 12.2287 6.0621C11.2285 7.06229 10.6666 8.41885 10.6666 9.83333C10.6666 11.2478 11.2285 12.6044 12.2287 13.6046C13.2289 14.6048 14.5855 15.1667 16 15.1667C17.4144 15.1667 18.771 14.6048 19.7712 13.6046Z"
                  stroke="inherit"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.4003 21.9003C11.1506 20.15 13.5246 19.1667 16 19.1667C18.4753 19.1667 20.8493 20.15 22.5996 21.9003C24.35 23.6507 25.3333 26.0246 25.3333 28.5H6.66663C6.66663 26.0246 7.64996 23.6507 9.4003 21.9003Z"
                  stroke="inherit"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
          {/* this div is for mobile nav items container */}
          <div
            className={`${
              isNavOpen ? "showMenuNav" : "hideMenuNav"
            } overflow-hidden`}
          >
            {/* mobile close button container */}
            <div
              className="CROSS-ICON absolute top-0 right-0 p-8 cursor-pointer"
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

            {/* this is collapsible menu container in mobile */}
            <div className="container px-sm flex flex-col gap-6">
              {logo}

              {/* login signup buttons in mobile menu */}
              <div className="gap-2 flex mx-auto">
                <Link href='https://dashboard.gotimate.com/signup' >
                <button
                  type="button"
                  className="text-white text-[14px] bg-gotimate w-[100px] h-[40px] hover:bg-gray-400 transition-all  focus:outline-none rounded-[10px]"
                >
                  Sign up
                </button>
                </Link>
                <Link href='https://dashboard.gotimate.com/login' >
                <button
                  type="button"
                  className="text-darkgot text-[14px] w-[100px] h-[40px] shadow-sm hover:text-gotimate transition-all rounded-[10px]"
                >
                  Login
                </button>
                </Link>
              </div>

              <ul className="MENU-LINK-MOBILE-OPEN text-lg font-light text-gray-800 flex flex-col gap-8 items-start justify-around min-h-[250px] w-full">
                {navbar.links.map((link, i) => (
                  <Link onClick={() => setIsNavOpen(false)} key={i} href={link.route} className="hover:text-gotimate" >{link.title}</Link>
                ))}
              </ul>
              <div className="flex flex-col items-center gap-3 absolute bottom-[100px] left-0 right-0">
                <div className="flex gap-3">
                <Link href={socialNetworks.facebook.href} >
      {socialNetworks.facebook.icon}
         </Link>
         <Link href={socialNetworks.twitter.href} >
      {socialNetworks.twitter.icon}
         </Link>
         <Link href={socialNetworks.linkdin.href} >
      {socialNetworks.linkdin.icon}
         </Link>
                </div>
                <p className="text-sm text-gray-300">Gotimate on Socials</p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="items-center justify-between hidden w-full lg:flex md:w-auto md:order-1"
          id="navbar-cta"
        >
          <div className="flex flex-col font-normal p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
             {navbar.links.map((link, i) => (
              <Link
              key={i}
                href={link.route}
                className="block custom-visited py-2 pl-3 pr-4 text-[#1F2D3D] hover:text-gotimate rounded md:bg-transparent focus:text-gotimate md:p-0 "
                aria-current="page"
              >
                {link.title}
              </Link>
             ))}
          </div>
        </div>
      </div>

      {/* these styles is for mobile menu navbar */}
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        padding:30px 10px;
      }
    `}</style>
    </nav>
  );
};

export default Navbar;
