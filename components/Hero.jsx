import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col  relative md:z-[1] 
    ">  
       {/* place of dotted illustration */}
  
      <section className="flex flex-col justify-center gap-5 relative hero-illustration h-[500px] ">
        <h1 className="text-5xl font-bold">Earn easy money!</h1>
        <p className="text-gray-500 py-4 md:w-1/2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="flex gap-2 my-6">
          <button
            type="button"
            class="text-white w-[162px] h-[57px] bg-cyan-800 hover:bg-gray-400 transition-all focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
          >
            Start Here
          </button>
          <button
            type="button"
            class="w-[162px] h-[57px] text-black flex items-center gap-3  hover:text-cyan-800 transition-all  font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
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
      </section>

      {/* cards container */}
      <section className="bg-gray-600  rounded-3xl h-auto p-8 md:flex items-center md:h-[350px] hero-pic ">
        {/* card */}
        <div className="flex flex-col mb-10">
          <h1 className="text-blue-500 text-4xl font-bold ">01</h1>
          <h2 className="text-white text-2xl my-2">Create Account</h2>
          <p className="text-gray-200 leading-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod
          </p>
        </div>

        {/* card */}
        <div className="flex flex-col mb-10">
          <h1 className="text-blue-500 text-4xl font-bold ">02</h1>
          <h2 className="text-white text-2xl my-2">Create Account</h2>
          <p className="text-gray-200 leading-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod
          </p>
        </div>

        {/* card */}
        <div className="flex flex-col mb-10">
          <h1 className="text-blue-500 text-4xl font-bold ">03</h1>
          <h2 className="text-white text-2xl my-2">Create Account</h2>
          <p className="text-gray-200 leading-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod
          </p>
        </div>
      </section>
    </div>
  );
};

export default Hero;
