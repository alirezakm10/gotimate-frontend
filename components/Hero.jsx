import React from "react";
import { initialData } from "@/initialData";
import Link from 'next/link'

const Hero = () => {
  const { hero } = initialData

  
  return (
    <div className="flex flex-col">  
       {/* place of dotted illustration */}

       <div className="absolute md:top-[100px] right-[-300px] md:right-[100px] w-[300px] h-[300px] sky-gradient" ></div>
       <div className="absolute top-[300px] md:top-[290px] right-[-300px] md:right-[250px] w-[300px] h-[300px] purple-gradient" ></div>
       <div className="absolute md:top-[150px] md:right-[150px] w-[300px] h-[300px] hero-illustration" ></div>
  

      <section className="flex flex-col justify-center gap-5 relative  h-[500px] ">      
      <h1 className="text-5xl text-[#1F2D3D] font-bold ">
      {hero.title}
      </h1>
      <h1 className="text-5xl text-[#1F2D3D] font-bold ">
      {hero.breaktitle}
      </h1>
        <p className="text-gray-500 py-4 md:w-1/2">
          {hero.content}
        </p>
        <div className="flex gap-7 my-6">
          <Link href={hero.buttons[0].url} >
          <button
            type="button"
            className="text-white text-[17px] bg-gotimate w-[157px] h-[57px] hover:bg-gray-400 transition-all  focus:outline-none rounded-[10px]"
          >
            {hero.buttons[0].title}
          </button>
          </Link>
          <Link href={hero.buttons[1].url} >
          <button
            type="button"
            className="flex gap-2 items-center text-darkgot text-[17px] w-[157px] h-[57px] stroke-darkgot hover:stroke-gotimate hover:text-gotimate transition-all rounded-[10px]"
          >
            {hero.buttons[1].title}
            <svg
              width="7"
              height="11"
              viewBox="0 0 7 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.625 1.125L6 5.5L1.625 9.875"
                stroke="inherit"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          </Link>
        </div>
      </section>

      {/* cards container */}
      <section className="relative rounded-3xl h-auto  md:flex items-center justify-center md:h-[350px] hero-pic ">
        
        
        {/* card */}
        {hero.userGuid.map((card, i) => (
        <div className="flex flex-col justify-center p-8 brightness-125 saturate-100 mb-10 md:mb-0">
          <h1 className="text-bluegot text-4xl font-bold ">{card.num}</h1>
          <div className="relative flex" >
          <h2 className="text-white text-2xl my-2">{card.title}</h2>
            <span className="absolute hidden md:block right-[-30px]">
         {card.arrow}
            </span>
          </div>
          <p className="text-gray-200 leading-8 ">{card.content}</p>
        </div>
        ))}

 
      </section>
    </div>
  );
};

export default Hero;
