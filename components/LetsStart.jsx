import Link from 'next/link'
import Image from 'next/image'
import trapezium from '../public/trapezium.svg'
import { initialData } from "@/initialData";
import { useTranslation } from 'react-i18next'

const LetsStart = () => {
  const { t } = useTranslation()
  const { buttonsRoute } = initialData;

  
  return (
    <section className="relative my-[100px] py-10">
        {/* bottom left illustration */}
      <div className="absolute bottom-[0px] left-[-61px] ">
        <svg
          width="105"
          height="105"
          viewBox="0 0 105 105"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.1" clipPath="url(#clip0_30_1203)">
            <path
              d="M46.2658 0.364992L0.274475 0.36499L0.274473 46.5736L46.2658 46.5736L46.2658 0.364992Z"
              fill="#637381"
            />
            <path
              opacity="0.5"
              d="M104.274 0.364992L58.2831 0.36499L58.2831 46.5736L104.274 46.5736L104.274 0.364992Z"
              fill="#637381"
            />
            <path
              d="M104.274 58.1564L58.2831 58.1564L58.2831 104.365L104.274 104.365L104.274 58.1564Z"
              fill="#637381"
            />
          </g>
          <defs>
            <clipPath id="clip0_30_1203">
              <rect
                width="104"
                height="104"
                fill="white"
                transform="translate(104.274 0.36499) rotate(90)"
              />
            </clipPath>
          </defs>
        </svg>
      </div>
{/* top right illustration */}
      <div className="absolute top-[0px] right-[-61px] ">
        <svg
          width="166"
          height="146"
          viewBox="0 0 166 146"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.4">
            <g opacity="0.5">
              <ellipse
                cx="4.05955"
                cy="3.82539"
                rx="3.75968"
                ry="3.82539"
                fill="#637381"
              />
              <ellipse
                cx="4.05955"
                cy="26.7778"
                rx="3.75968"
                ry="3.82539"
                fill="#637381"
              />
              <ellipse
                cx="4.05955"
                cy="49.7302"
                rx="3.75968"
                ry="3.82539"
                fill="#637381"
              />
              <ellipse
                cx="4.05955"
                cy="72.6824"
                rx="3.75968"
                ry="3.82539"
                fill="#637381"
              />
              <ellipse
                cx="4.05955"
                cy="95.6348"
                rx="3.75968"
                ry="3.82539"
                fill="#637381"
              />
              <ellipse
                cx="4.05955"
                cy="118.587"
                rx="3.75968"
                ry="3.82539"
                fill="#637381"
              />
              <ellipse
                cx="4.05955"
                cy="141.54"
                rx="3.75968"
                ry="3.82539"
                fill="#637381"
              />
              <ellipse
                cx="26.617"
                cy="3.82539"
                rx="3.75968"
                ry="3.82539"
                fill="#637381"
              />
              <ellipse
                cx="26.617"
                cy="26.7778"
                rx="3.75968"
                ry="3.82539"
                fill="#637381"
              />
              <ellipse
                cx="26.617"
                cy="49.7302"
                rx="3.75968"
                ry="3.82539"
                fill="#637381"
              />
              <ellipse
                cx="26.617"
                cy="72.6824"
                rx="3.75968"
                ry="3.82539"
                fill="#637381"
              />
              <ellipse
                cx="26.617"
                cy="95.6348"
                rx="3.75968"
                ry="3.82539"
                fill="#637381"
              />
              <ellipse
                cx="26.617"
                cy="118.587"
                rx="3.75968"
                ry="3.82539"
                fill="#637381"
              />
              <ellipse
                cx="26.617"
                cy="141.54"
                rx="3.75968"
                ry="3.82539"
                fill="#637381"
              />
              <ellipse
                cx="49.1766"
                cy="3.82539"
                rx="3.75968"
                ry="3.82539"
                fill="#637381"
              />
              <ellipse
                cx="49.1766"
                cy="26.7778"
                rx="3.75968"
                ry="3.82539"
                fill="#637381"
              />
              <ellipse
                cx="49.1766"
                cy="49.7302"
                rx="3.75968"
                ry="3.82539"
                fill="#637381"
              />
              <ellipse
                cx="49.1766"
                cy="72.6824"
                rx="3.75968"
                ry="3.82539"
                fill="#637381"
              />
              <ellipse
                cx="49.1766"
                cy="95.6348"
                rx="3.75968"
                ry="3.82539"
                fill="#637381"
              />
              <ellipse
                cx="49.1766"
                cy="118.587"
                rx="3.75968"
                ry="3.82539"
                fill="#637381"
              />
              <ellipse
                cx="49.1766"
                cy="141.54"
                rx="3.75968"
                ry="3.82539"
                fill="#637381"
              />
              <ellipse
                cx="71.734"
                cy="3.82539"
                rx="3.75968"
                ry="3.82539"
                fill="#637381"
              />
              <ellipse
                cx="71.734"
                cy="26.7778"
                rx="3.75968"
                ry="3.82539"
                fill="#637381"
              />
              <ellipse
                cx="71.734"
                cy="49.7302"
                rx="3.75968"
                ry="3.82539"
                fill="#637381"
              />
              <ellipse
                cx="71.734"
                cy="72.6824"
                rx="3.75968"
                ry="3.82539"
                fill="#637381"
              />
              <ellipse
                cx="71.734"
                cy="95.6348"
                rx="3.75968"
                ry="3.82539"
                fill="#637381"
              />
              <ellipse
                cx="71.734"
                cy="118.587"
                rx="3.75968"
                ry="3.82539"
                fill="#637381"
              />
              <ellipse
                cx="71.734"
                cy="141.54"
                rx="3.75968"
                ry="3.82539"
                fill="#637381"
              />
              <ellipse
                cx="94.2915"
                cy="3.82539"
                rx="3.75968"
                ry="3.82539"
                fill="#637381"
              />
              <ellipse
                cx="94.2915"
                cy="26.7778"
                rx="3.75968"
                ry="3.82539"
                fill="#637381"
              />
              <ellipse
                cx="94.2915"
                cy="49.7302"
                rx="3.75968"
                ry="3.82539"
                fill="#637381"
              />
              <ellipse
                cx="94.2915"
                cy="72.6824"
                rx="3.75968"
                ry="3.82539"
                fill="#637381"
              />
              <ellipse
                cx="94.2915"
                cy="95.6348"
                rx="3.75968"
                ry="3.82539"
                fill="#637381"
              />
              <ellipse
                cx="94.2915"
                cy="118.587"
                rx="3.75968"
                ry="3.82539"
                fill="#637381"
              />
              <ellipse
                cx="94.2915"
                cy="141.54"
                rx="3.75968"
                ry="3.82539"
                fill="#637381"
              />
              <ellipse
                cx="116.851"
                cy="3.82539"
                rx="3.75968"
                ry="3.82539"
                fill="#637381"
              />
              <ellipse
                cx="116.851"
                cy="26.7778"
                rx="3.75968"
                ry="3.82539"
                fill="#637381"
              />
              <ellipse
                cx="116.851"
                cy="49.7302"
                rx="3.75968"
                ry="3.82539"
                fill="#637381"
              />
              <ellipse
                cx="116.851"
                cy="72.6824"
                rx="3.75968"
                ry="3.82539"
                fill="#637381"
              />
              <ellipse
                cx="116.851"
                cy="95.6348"
                rx="3.75968"
                ry="3.82539"
                fill="#637381"
              />
              <ellipse
                cx="116.851"
                cy="118.587"
                rx="3.75968"
                ry="3.82539"
                fill="#637381"
              />
              <ellipse
                cx="116.851"
                cy="141.54"
                rx="3.75968"
                ry="3.82539"
                fill="#637381"
              />
              <ellipse
                cx="139.408"
                cy="26.7778"
                rx="3.75968"
                ry="3.82539"
                fill="#637381"
              />
              <ellipse
                cx="139.408"
                cy="49.7302"
                rx="3.75968"
                ry="3.82539"
                fill="#637381"
              />
              <ellipse
                cx="139.408"
                cy="72.6824"
                rx="3.75968"
                ry="3.82539"
                fill="#637381"
              />
              <ellipse
                cx="139.408"
                cy="95.6348"
                rx="3.75968"
                ry="3.82539"
                fill="#637381"
              />
              <ellipse
                cx="139.408"
                cy="118.587"
                rx="3.75968"
                ry="3.82539"
                fill="#637381"
              />
              <ellipse
                cx="139.408"
                cy="141.54"
                rx="3.75968"
                ry="3.82539"
                fill="#637381"
              />
              <ellipse
                cx="161.966"
                cy="49.7302"
                rx="3.75968"
                ry="3.82539"
                fill="#637381"
              />
              <ellipse
                cx="161.966"
                cy="72.6824"
                rx="3.75968"
                ry="3.82539"
                fill="#637381"
              />
              <ellipse
                cx="161.966"
                cy="95.6348"
                rx="3.75968"
                ry="3.82539"
                fill="#637381"
              />
              <ellipse
                cx="161.966"
                cy="118.587"
                rx="3.75968"
                ry="3.82539"
                fill="#637381"
              />
              <ellipse
                cx="161.966"
                cy="141.54"
                rx="3.75968"
                ry="3.82539"
                fill="#637381"
              />
            </g>
          </g>
        </svg>
      </div>


      <section className="relative flex flex-col lg:flex-row lg:justify-between my-9 min-h-[211px]    bg-white shadow-md rounded-[50px] md:rounded-[75px] ">
        <div className="lg:px-[60px] py-6 lg:leading-8  text-center lg:text-left flex gap-5 flex-1 flex-col justify-center">
          <h1 className="  text-3xl px-2 text-[#1F2D3D]">{t('letsStart')}</h1>
          <p className="text-gray-500 px-2 leading-8 lg:w-auto">{t('letsStartContent')}</p>
        </div>


        <div className="flex flex-1 h-[100px] lg:bg-transparent rounded-[30px] ">
         <Image src={trapezium} responsive  className='absolute top-0  right-0 hidden lg:block object-fill' />
         {/* these same buttons is for desktop breakpoints */}
          <div className=" absolute top-[78px] right-[100px] hidden lg:flex gap-3" >
            <Link href={buttonsRoute.letsstart} >
          <button
            type="button"
            className="flex gap-2 items-center text-white hover:bg-gray-400 px-3 text-[14px] h-[40px] stroke-white hover:stroke-white hover:text-white transition-all rounded-[30px]"
          >
            {t('letsStartBtn')}
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
          <a
          href="#howStart"
            type="button"
            className="text-darkgot text-[14px] flex justify-center items-center hover:text-white bg-white w-[153px] h-[40px] hover:bg-gray-400 transition-all  focus:outline-none  font-medium rounded-[30px]"
          >
             {t("howtoStartBtn")}
          </a>
          </div>
          {/* these buttons is for mobile break point */}
          <div className="flex gap-3 bg-gotimate lg:hidden justify-center items-center w-[90%] mx-auto my-5 h-[117px] rounded-[75px]">
              <a
                href="#howStart"
                type="button"
                className="text-darkgot text-[14px] flex justify-center items-center bg-white w-[123px] h-[40px] hover:bg-gray-400 transition-all  focus:outline-none  font-medium rounded-[30px]"
              >
                {t("howtoStartBtn")}
              </a>
              <Link href={buttonsRoute.letsstart} >
              <button
                type="button"
                className="flex gap-2 px-6 items-center text-white hover:bg-gray-400 text-[14px] h-[40px] stroke-white hover:stroke-white hover:text-white transition-all rounded-[30px]"
              >
                {t("letsStartBtn")}
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
        </div>
      </section>
    </section>
  );
};

export default LetsStart;
