import React from "react";
import { initialData } from "@/initialData";
import Link from 'next/link'

const Hero = () => {
  const { hero } = initialData

  console.log('this is hero header guids: ', hero.userGuid[0])
  return (
    <div className="flex flex-col md:z-[1]
    ">  
       {/* place of dotted illustration */}

       <div className="absolute top-[100px] right-[190px] w-[300px] h-[300px] sky-gradient" ></div>
       <div className="absolute top-[250px] right-[250px] w-[300px] h-[300px] purple-gradient" ></div>
       <div className="absolute top-[150px] right-[150px] w-[300px] h-[300px] hero-illustration" ></div>
  

      <section className="flex flex-col justify-center gap-5 relative  h-[500px] ">
        <h1 className="text-5xl text-[#1F2D3D]  font-bold">{hero.title}</h1>
        <p className="text-gray-500 py-4 md:w-1/2">
          {hero.content}
        </p>
        <div className="flex gap-2 my-6">
          <Link href={hero.buttons[0].url} >
          <button
            type="button"
            className="text-white w-[162px] h-[57px] bg-cyan-800 hover:bg-gray-400 transition-all focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
          >
            {hero.buttons[0].title}
          </button>
          </Link>
          <Link href={hero.buttons[1].url} >
          <button
            type="button"
            className="w-[162px] h-[57px] text-[#1F2D3D] flex items-center gap-3  hover:text-cyan-800 transition-all  font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
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
                stroke="#637381"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          </Link>
        </div>
      </section>

      {/* cards container */}
      <section className="rounded-3xl h-auto p-8 md:flex items-center md:h-[350px] hero-pic ">
        
        
        {/* card */}
        {hero.userGuid.map((card, i) => (
        <div className="flex flex-col brightness-125 saturate-100 mb-10 md:mb-0">
          <h1 className="text-bluegot text-4xl font-bold ">{card.num}</h1>
          <div className="relative" >
          <h2 className="text-white text-2xl my-2">{card.title}</h2>
            <span className="absolute hidden md:block right-10 top-0" >
            <svg width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.125 10.625L34 25.5L19.125 40.375" stroke="#FAFAFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

            </span>
          </div>
          <p className="text-gray-200 leading-8 w-[65%]">{card.content}</p>
        </div>
        ))}

 
      </section>
    </div>
  );
};

export default Hero;
