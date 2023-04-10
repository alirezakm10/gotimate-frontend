import React, { useState } from "react";
import AccordionItem from "./AccordionItem";

const Faq = () => {
  const [open, setOpen] = useState(false);
  const toggle = (index) => {
    if (open === index) {
      return setOpen(null);
    }
    setOpen(true);
  };

  const accordionData = [
    {
      title: "Lorem ipsum dolor sit amet ?",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      title: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet?",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      title: "Lorem ipsum dolor sit amet a part ?",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      title: "Witch Lorem ipsum dolor sit amet a part ?",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];

  return (
    <section className="relative my-[100px] py-4 z-[1]">
      {/* top right illustration */}
      <div className="absolute top-[0px] left-[0px] ">
        <svg
          width="110"
          height="110"
          viewBox="0 0 110 110"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.1" clip-path="url(#clip0_30_1123)">
            <path
              d="M110 48.6447L110 0L61.1255 -4.27274e-06L61.1255 48.6447L110 48.6447Z"
              fill="#637381"
            />
            <path
              opacity="0.5"
              d="M110 110L110 61.3552L61.1255 61.3552L61.1255 110L110 110Z"
              fill="#637381"
            />
            <path
              d="M48.8744 110L48.8745 61.3552L-1.14441e-05 61.3552L-1.56967e-05 110L48.8744 110Z"
              fill="#637381"
            />
          </g>
          <defs>
            <clipPath id="clip0_30_1123">
              <rect
                width="110"
                height="110"
                fill="white"
                transform="translate(110 110) rotate(-180)"
              />
            </clipPath>
          </defs>
        </svg>
      </div>

      <section className="flex flex-col md:flex-row h-auto gap-2 relative overflow-hidden items-start  ">
        {/* start of faq details */}
        <div className="md:w-1/2">
          <h1 className="text-5xl py-8 font-bold">Got Question ?</h1>
          <p className="text-gray-500 py-4 leading-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <button
            type="button"
            class="text-black flex items-center gap-3  hover:text-cyan-800 transition-all  font-medium rounded-lg text-sm px-4 py-5 text-center mr-3 md:mr-0 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
          >
            Learn About
            <svg
              width="7"
              height="11"
              viewBox="0 0 7 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.625 1.125L6 5.5L1.625 9.875"
                stroke="#637381"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
        {/* end of faq details */}

        {/* start of accordions contariner */}
        <div className="md:w-1/2">
          {accordionData.map((data, index) => {
            return (
              <AccordionItem
                key={index}
                open={index === open}
                toggle={() => toggle(index)}
                title={data.title}
                desc={data.desc}
              />
            );
          })}
        </div>
        {/* end of accordions container */}
      </section>
    </section>
  );
};

export default Faq;
