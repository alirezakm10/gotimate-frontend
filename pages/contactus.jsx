import Link from "next/link";
import Image from "next/image";
import Map from "./Map";

const contactus = () => {
  return (
    <section className="flex flex-col text-darkgot h-auto py-3">
      {/* this is blured header container */}
      <section className="blured-headpage">
        <nav className="flex justify-between pt-3" aria-label="Breadcrumb">
          <p>Contact us</p>
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-blueloan dark:text-gray-400 dark:hover:text-white"
              >
                <svg
                  width="15"
                  height="17"
                  viewBox="0 0 15 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.20833 6.08301C6.40417 6.08301 5.75 6.73717 5.75 7.54217C5.75 8.34634 6.40417 8.99968 7.20833 8.99968C8.0125 8.99968 8.66667 8.34634 8.66667 7.54217C8.66667 6.73717 8.0125 6.08301 7.20833 6.08301ZM7.20833 10.2497C5.715 10.2497 4.5 9.03551 4.5 7.54217C4.5 6.04801 5.715 4.83301 7.20833 4.83301C8.70167 4.83301 9.91667 6.04801 9.91667 7.54217C9.91667 9.03551 8.70167 10.2497 7.20833 10.2497Z"
                    fill="#BDBDBD"
                  />
                  <mask
                    id="mask0_93_4199"
                    style={{ maskType: "luminance" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="15"
                    height="17"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0.333008 0.666504H14.0826V16.9165H0.333008V0.666504Z"
                      fill="white"
                    />
                  </mask>
                  <g mask="url(#mask0_93_4199)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M7.20801 1.9165C4.10634 1.9165 1.58301 4.464 1.58301 7.594C1.58301 11.5765 6.26967 15.4565 7.20801 15.6632C8.14634 15.4557 12.833 11.5757 12.833 7.594C12.833 4.464 10.3097 1.9165 7.20801 1.9165ZM7.20801 16.9165C5.71301 16.9165 0.333008 12.2898 0.333008 7.594C0.333008 3.774 3.41717 0.666504 7.20801 0.666504C10.9988 0.666504 14.083 3.774 14.083 7.594C14.083 12.2898 8.70301 16.9165 7.20801 16.9165Z"
                      fill="#BDBDBD"
                    />
                  </g>
                </svg>
                Home
              </Link>
            </li>
            <li>
              <div className="flex items-center">
                <svg
                  aria-hidden="true"
                  className="w-6 h-6 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <a
                  href="#"
                  className="ml-1 text-sm font-medium text-gray-700 hover:text-blueloan md:ml-2 dark:text-gray-400 dark:hover:text-white"
                >
                  contact
                </a>
              </div>
            </li>
          </ol>
        </nav>
      </section>

      {/* contact form */}
      {/* full width card one */}
      <section className=" w-full mx-auto flex flex-col-reverse gap-[40px] md:flex-row my-[30px] ">
        <div className="flex flex-col justify-center w-full">
          <form className="flex flex-col gap-3">
            <div className="flex flex-col items-start">
              <h1 className="text-[52px]">Contact Us</h1>
              <p className="text-sm py-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing .
              </p>
            </div>
            <div className="w-full flex flex-col md:flex-row gap-3">
              <input
                id="firstname"
                type="text"
                name="firstname"
                className={`text-[14px] placeholder-gray-500
              bg-middarkloan
                pl-3
                    rounded-[6px]
                    border border-[#e0e0e0]
                    
                    w-full
                    h-[40px]
                    py-2
                    focus:outline-none focus:border-blueloan
                    card-hover
                  `}
                placeholder="First name"
              />
              <input
                id="lastname"
                type="text"
                name="lastname"
                className={`text-[14px] placeholder-gray-500
              bg-middarkloan
                pl-3
                    rounded-[6px]
                    border border-[#e0e0e0]
                    
                    w-full
                    h-[40px]
                    py-2
                    focus:outline-none focus:border-blueloan
                    card-hover
                  `}
                placeholder="Last name"
              />
            </div>
            <input
              id="email"
              type="email"
              name="email"
              className={`text-[14px] placeholder-gray-500
              bg-middarkloan
                    pl-3
                    rounded-[6px]
                    border border-[#e0e0e0]
                    
                    w-full
                    h-[40px]
                    py-2
                    focus:outline-none focus:border-blueloan
                    card-hover
                  `}
              placeholder="Email Address"
            />
            <textarea
              className={`text-[14px] placeholder-gray-500
              bg-middarkloan
                    pl-3
                    rounded-[6px]
                    border border-[#e0e0e0]
                    w-full
                    py-2
                    focus:outline-none focus:border-blueloan
                    card-hover
                  `}
              name=""
              id=""
              cols="30"
              rows="4"
            ></textarea>
            <div className="flex w-full">
              <button
                type="submit"
                className="w-full flex justify-center items-center gap-1 bg-[#05697E] transition-all hover:bg-darkgot text-white  h-[40px] rounded-md mx-auto"
              >
                Submit
              </button>
            </div>
          </form>
        </div>

        {/* image illustration */}
        <div className=" relative w-full">
          <img src="/contactus.svg" width='100%' height='100%' alt='contact us illuatration' />
        </div>
      </section>

      {/* call and contacts */}
      <section className="flex flex-col gap-3">
        <div className="flex flex-col items-center mt-[70px] mb-[40px]">
          <h1 className="text-3xl">Contact Detail</h1>
          <p className="text-sm py-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </p>
        </div>
        <section className="w-full flex flex-col md:flex-row justify-center items-center">
          <a href='mailto:contact@gotimate.com' className="flex gap-7 items-center w-[90%] md:w-[60%]">
            <div className="flex justify-center items-center bg-dimdarkloan rounded-full w-[50px] h-[50px] dark-icon-container">
              <Image src="/icons/mail.svg" priority width="30" height="30" alt="email" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-lg my-0">Email</h1>
              <p  className="text-[12px]">
              contact@gotimate.com
              </p>
            </div>
          </a>
          {/* card end */}
          <a href="tel:+98125325658" className="flex gap-7 items-center w-[90%] md:w-[60%]">
            <div className="flex justify-center items-center bg-dimdarkloan rounded-full w-[50px] h-[50px] dark-icon-container">
              <Image src="/icons/phone.svg" priority width="30" height="30" alt='phone number' />
            </div>
            <div className="flex flex-col">
              <h1 className="text-lg my-0">Phone</h1>
              <p className="text-[12px]">
              +98 912 635 0320
              </p>
            </div>
          </a>
          {/* card end */}
          <section className="flex gap-7 items-center w-[90%] md:w-[60%]">
            <div className="flex justify-center items-center bg-dimdarkloan rounded-full w-[50px] h-[50px] dark-icon-container">
              <Image
                src="/icons/location.svg"
                priority
                width="30"
                height="30"
                alt='address'
              />
            </div>
            <div className="flex flex-col">
              <h1 className="text-lg my-0">Address</h1>
              <p className="text-[12px]">
              No 12 , tehran , iran
              </p>
            </div>
          </section>
          {/* card end */}
        </section>
        {/* map structure */}

        <section className="flex flex-col justify-center items-center w-full text-center my-[30px]">
          <h1 className="text-3xl py-2">Where we are</h1>
          <Map />
        </section>
      </section>
    </section>
  );
};

export default contactus;
