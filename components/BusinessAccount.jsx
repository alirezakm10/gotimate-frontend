import React from "react";
import Image from 'next/image'
import teamwork from '../public/teamwork.jpg'

const BusinessAccount = () => {
  return (
    <section className="relative my-[100px] py-1" >
{/* top right illustration */}
<div className="absolute bottom-[-70px] right-[-61px] ">
     
<svg width="110" height="110" viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.1" clip-path="url(#clip0_93_2057)">
<path d="M0 61.3553L0 110H48.8745L48.8745 61.3553L0 61.3553Z" fill="#637381"/>
<path opacity="0.5" d="M0 5.34058e-05L0 48.6448L48.8745 48.6448L48.8745 5.34058e-05L0 5.34058e-05Z" fill="#637381"/>
<path d="M61.1255 5.34058e-05L61.1255 48.6448L110 48.6448V5.34058e-05L61.1255 5.34058e-05Z" fill="#637381"/>
</g>
<defs>
<clipPath id="clip0_93_2057">
<rect width="110" height="110" fill="white"/>
</clipPath>
</defs>
</svg>
      </div>

      
    <section className="flex flex-col md:flex-row h-auto gap-3">
      <div className="flex flex-1 flex-col gap-[30px]">
        <h1 className=" text-5xl md:text-6xl text-[#1F2D3D] py-4 font-bold">Own a business ?</h1>
        <h2 className="text-2xl md:text-3xl text-[#1F2D3D]  leading-8 font-bold">
          Create A business Account with
          <span className="text-cyan-800"> 0$</span>
        </h2>
        <p className="text-gray-500 leading-8 ">
          Lorem ipsum dolor sit amet, labore et dolore magna aliqua.Lorem ipsum
          dolor sit amet, labore et dolore magna aliqua.
        </p>

        {/* buttons on desktop mode */}
        <div className="gap-8 hidden md:flex justify-start">
        <button
              type="button"
              className="flex items-center justify-center gap-3 w-[286px] h-[57px] text-white bg-cyan-800 hover:bg-gray-800 transition-all focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-[2rem] text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
            >
                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.875 12.3025C18.3125 11.7087 17.5625 11.3962 16.75 11.3962C16.125 11.3962 15.5625 11.5837 15.0625 11.9587C15 11.99 14.9688 12.0212 14.9062 12.0837C14.8438 12.0525 14.8125 11.99 14.75 11.9587C14.25 11.5837 13.6875 11.3962 13.0625 11.3962C12.9062 11.3962 12.7812 11.3962 12.6562 11.4275C11.7188 10.365 10.5625 9.61499 9.3125 9.27124C10.625 8.61499 11.5312 7.27124 11.5312 5.73999C11.5312 3.55249 9.75 1.80249 7.59375 1.80249C5.40625 1.80249 3.65625 3.58374 3.65625 5.73999C3.65625 7.30249 4.5625 8.64624 5.875 9.27124C4.5625 9.64624 3.40625 10.3962 2.4375 11.5212C1.125 13.0837 0.375 15.2712 0.3125 17.6462C0.3125 17.8962 0.4375 18.115 0.65625 18.2087C1.5 18.615 4.4375 19.9587 7.59375 19.9587C9.28125 19.9587 10.8438 19.6775 10.9062 19.6775C11.25 19.615 11.4688 19.3025 11.4062 18.9587C11.3438 18.615 11.0312 18.3962 10.6875 18.4587C10.6875 18.4587 9.15625 18.74 7.59375 18.74C5.0625 18.7087 2.65625 17.74 1.5625 17.24C1.65625 15.3025 2.3125 13.5837 3.375 12.3025C4.46875 10.99 5.96875 10.2712 7.59375 10.2712C9.03125 10.2712 10.375 10.865 11.4375 11.8962C11.2812 12.0212 11.125 12.1462 11 12.2712C10.4688 12.8337 10.1875 13.615 10.1875 14.4587C10.1875 15.3025 10.5 16.0837 11.1562 16.865C11.6875 17.5212 12.4375 18.1462 13.2812 18.865L13.3125 18.8962C13.5937 19.115 13.9062 19.3962 14.2188 19.6775C14.4062 19.865 14.6875 19.9587 14.9375 19.9587C15.1875 19.9587 15.4687 19.865 15.6562 19.6775C16 19.3962 16.3125 19.115 16.5938 18.865C17.4375 18.1462 18.1875 17.5212 18.7188 16.865C19.375 16.0837 19.6875 15.3025 19.6875 14.4587C19.6875 13.6462 19.4062 12.8962 18.875 12.3025ZM4.875 5.73999C4.875 4.23999 6.09375 3.05249 7.5625 3.05249C9.0625 3.05249 10.25 4.27124 10.25 5.73999C10.25 7.23999 9.03125 8.42749 7.5625 8.42749C6.09375 8.42749 4.875 7.20874 4.875 5.73999ZM17.75 16.0837C17.2812 16.6462 16.5938 17.24 15.7812 17.9275C15.5312 18.1462 15.2188 18.3962 14.9062 18.6462C14.625 18.3962 14.3438 18.1462 14.0938 17.9587L14.0625 17.9275C13.25 17.24 12.5625 16.6462 12.0938 16.0837C11.625 15.5212 11.4062 15.0212 11.4062 14.49C11.4062 13.9587 11.5938 13.49 11.9062 13.1462C12.2188 12.8025 12.6563 12.615 13.0938 12.615C13.4375 12.615 13.75 12.7087 14 12.9275C14.125 13.0212 14.2188 13.115 14.3125 13.24C14.5938 13.5837 15.1875 13.5837 15.5 13.24C15.5938 13.115 15.7187 13.0212 15.8125 12.9275C16.0937 12.7087 16.4062 12.615 16.7188 12.615C17.1875 12.615 17.5938 12.8025 17.9062 13.1462C18.2188 13.49 18.4062 13.9587 18.4062 14.49C18.4375 15.0525 18.2188 15.5212 17.75 16.0837Z" fill="white"/>
</svg>

              Create an account
            </button>
        <button
            type="button"
            class="text-[#1F2D3D] flex items-center gap-3 h-[57px] hover:text-cyan-800 transition-all  font-medium rounded-lg text-sm px-4 py-5 text-center mr-3 md:mr-0 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
          >
            Partnership conditions
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
      </div>

      <div className="realtive overflow-hidden flex-1 rounded-tl-[80px] rounded-tr-[10px] rounded-br-[80px] rounded-bl-[10px]">
        <Image src={teamwork} layout='responsive' width='100' height='100' />
      </div>

      {/* buttons container in mobile mode */}
      <div className="gap-8 flex md:hidden py-5 justify-center">
        <button
              type="button"
              className="flex gap-3 items-center justify-center  flex-1 h-[57px] text-white bg-cyan-800 hover:bg-gray-800 transition-all focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-[2rem] text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
            >
                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.875 12.3025C18.3125 11.7087 17.5625 11.3962 16.75 11.3962C16.125 11.3962 15.5625 11.5837 15.0625 11.9587C15 11.99 14.9688 12.0212 14.9062 12.0837C14.8438 12.0525 14.8125 11.99 14.75 11.9587C14.25 11.5837 13.6875 11.3962 13.0625 11.3962C12.9062 11.3962 12.7812 11.3962 12.6562 11.4275C11.7188 10.365 10.5625 9.61499 9.3125 9.27124C10.625 8.61499 11.5312 7.27124 11.5312 5.73999C11.5312 3.55249 9.75 1.80249 7.59375 1.80249C5.40625 1.80249 3.65625 3.58374 3.65625 5.73999C3.65625 7.30249 4.5625 8.64624 5.875 9.27124C4.5625 9.64624 3.40625 10.3962 2.4375 11.5212C1.125 13.0837 0.375 15.2712 0.3125 17.6462C0.3125 17.8962 0.4375 18.115 0.65625 18.2087C1.5 18.615 4.4375 19.9587 7.59375 19.9587C9.28125 19.9587 10.8438 19.6775 10.9062 19.6775C11.25 19.615 11.4688 19.3025 11.4062 18.9587C11.3438 18.615 11.0312 18.3962 10.6875 18.4587C10.6875 18.4587 9.15625 18.74 7.59375 18.74C5.0625 18.7087 2.65625 17.74 1.5625 17.24C1.65625 15.3025 2.3125 13.5837 3.375 12.3025C4.46875 10.99 5.96875 10.2712 7.59375 10.2712C9.03125 10.2712 10.375 10.865 11.4375 11.8962C11.2812 12.0212 11.125 12.1462 11 12.2712C10.4688 12.8337 10.1875 13.615 10.1875 14.4587C10.1875 15.3025 10.5 16.0837 11.1562 16.865C11.6875 17.5212 12.4375 18.1462 13.2812 18.865L13.3125 18.8962C13.5937 19.115 13.9062 19.3962 14.2188 19.6775C14.4062 19.865 14.6875 19.9587 14.9375 19.9587C15.1875 19.9587 15.4687 19.865 15.6562 19.6775C16 19.3962 16.3125 19.115 16.5938 18.865C17.4375 18.1462 18.1875 17.5212 18.7188 16.865C19.375 16.0837 19.6875 15.3025 19.6875 14.4587C19.6875 13.6462 19.4062 12.8962 18.875 12.3025ZM4.875 5.73999C4.875 4.23999 6.09375 3.05249 7.5625 3.05249C9.0625 3.05249 10.25 4.27124 10.25 5.73999C10.25 7.23999 9.03125 8.42749 7.5625 8.42749C6.09375 8.42749 4.875 7.20874 4.875 5.73999ZM17.75 16.0837C17.2812 16.6462 16.5938 17.24 15.7812 17.9275C15.5312 18.1462 15.2188 18.3962 14.9062 18.6462C14.625 18.3962 14.3438 18.1462 14.0938 17.9587L14.0625 17.9275C13.25 17.24 12.5625 16.6462 12.0938 16.0837C11.625 15.5212 11.4062 15.0212 11.4062 14.49C11.4062 13.9587 11.5938 13.49 11.9062 13.1462C12.2188 12.8025 12.6563 12.615 13.0938 12.615C13.4375 12.615 13.75 12.7087 14 12.9275C14.125 13.0212 14.2188 13.115 14.3125 13.24C14.5938 13.5837 15.1875 13.5837 15.5 13.24C15.5938 13.115 15.7187 13.0212 15.8125 12.9275C16.0937 12.7087 16.4062 12.615 16.7188 12.615C17.1875 12.615 17.5938 12.8025 17.9062 13.1462C18.2188 13.49 18.4062 13.9587 18.4062 14.49C18.4375 15.0525 18.2188 15.5212 17.75 16.0837Z" fill="white"/>
</svg>

              Create an account
            </button>
        <button
            type="button"
            class="text-black flex items-center gap-3 flex-1 h-[57px] hover:text-cyan-800 transition-all  font-medium rounded-lg text-sm px-4 py-5 text-center mr-3 md:mr-0 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
          >
            Partnership conditions
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
    </section>
  );
};

export default BusinessAccount;
