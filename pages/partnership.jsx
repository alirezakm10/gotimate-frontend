import { useState } from 'react'
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { initialData } from "@/initialData";
import Image from "next/image";
import trapezium from '../public/trapezium.svg'
import AccordionItem from "@/components/AccordionItem";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import PlanCard from '@/components/PlanCard';



const partnership = () => {
  const { t } = useTranslation()
  const [selected, setSelected] = useState(false)
  const { bussiness,faq } = initialData;
  const [open, setOpen] = useState(false);
  const toggle = (index) => {
    if (open === index) {
      return setOpen(null);
    }
    setOpen(true);
  };

  const dummyPlans = [
    {
      selectId:1
    },
    {
      selectId:2
    },
    {
      selectId:3
    },
    {
      selectId:4
    },
  ]

  const guidBreakpoints = {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
    1280: {
      slidesPerView: 3,
    },
  };


  const plansBreakpoints = {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
    1280: {
      slidesPerView: 4,
    },
  };

  return (
    <section>
      {/* section 1 */}
      <section className="relative overflow-hidden rounded-[30px] h-[90vh] my-5 text-[#fafafa] flex flex-col items-center justify-center gap-[30px] partnership-pic">
        <div className="absolute w-full h-full hero-partial "></div>
        <div>
          <h1 className="text-4xl">Partnership</h1>
          <p>If you own a business or startup, this is for you</p>
        </div>
        {/* blured card */}
        <div className="flex flex-col md:w-[40%] p-6 items-center justify-center gap-6 blured-card">
          {/* top container */}
          <div className="flex justify-between w-full items-center">
            {/* left */}
            <div className="flex gap-2">
              <h1 className="text-lg">10,000</h1>
              <div className="flex flex-col text-[9px] ">
                <p>free</p>
                <p>GMT Token</p>
              </div>
            </div>
            {/* right */}
            <p>(10$)</p>
          </div>
          {/* bottom container */}
          <div className="flex flex-col gap-4">
            <h1 className="text-bluegot">For Business Accounts</h1>
            <p className="text-[12px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              exercitationem error, ipsam corrupti eum aperiam fugiat provident
              officiis aliquid vitae.
            </p>
            <Link href="/">
              <button
                type="button"
                className="text-darkgot text-[14px] hover:text-white bg-white w-[153px] h-[40px] hover:bg-gray-400 transition-all  focus:outline-none  font-medium rounded-[10px]"
              >
                {t("startHereBtn")}
              </button>
            </Link>
          </div>
        </div>
      </section>
      {/* section 2 */}
      <section className="relative my-[100px] py-1">

        {/* about process section */}
        <section className="flex flex-col">
          {/* top section */}
          <div className="flex flex-col md:flex-row h-auto gap-3 mb-6">
            <div className="flex md:w-1/2 flex-col gap-[30px]">
              <h1 className=" text-5xl md:text-6xl text-[#1F2D3D] py-4 font-bold">
                About Process
              </h1>

              <p className="text-gray-500 leading-8 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            <div className="realtive overflow-hidden  md:w-1/2 h-full my-auto rounded-tl-[80px] rounded-tr-[10px] rounded-br-[80px] rounded-bl-[10px]">
              <Image
                src={bussiness.imageData.src}
                alt={bussiness.imageData.alt}
                layout="responsive"
                width="100"
                height="100"
              />
            </div>
          </div>


          {/* bottom section */}
          {/* cards container */}
          <section className="relative text-darkgot overflow-hidden rounded-3xl h-auto  md:flex items-center justify-center md:h-[350px]">
          <Swiper
        breakpoints={guidBreakpoints}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
      
        <SwiperSlide >
             <div className="relative flex flex-col justify-center rounded-tl-[40px] rounded-bl-[40px] rounded-tr-[50%] rounded-br-[50%] p-8 mb-10 md:mb-0">
              <div className="absolute w-full left-0 right-0 top-0 bottpm-0 z-[-1] hidden md:block drop-shadow-sm">
                <svg
                  width="331"
                  height="201"
                  viewBox="0 0 359 220"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.583008 20.0377C0.583008 8.99203 9.53731 0.037735 20.583 0.037735H296.572C304.314 0.037735 311.361 4.50633 314.663 11.5095L356.895 101.094C359.441 106.495 359.441 112.75 356.895 118.151L314.663 207.736C311.361 214.739 304.314 219.208 296.572 219.208H20.583C9.53729 219.208 0.583008 210.253 0.583008 199.208V20.0377Z"
                    fill="#FAFAFA"
                  />
                </svg>
              </div>
              <h1 className="text-bluegot text-3xl font-bold ">
                {t("herocardOneNumber")}
              </h1>
              <div className="relative flex">
                <h2 className="text-lg my-2">{t("herocardOneTitle")}</h2>
              </div>
              <p className="text-dimgot text-sm leading-8">
                {t("herocardOneContent")}
              </p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="relative flex flex-col justify-center rounded-tl-[40px] rounded-bl-[40px] rounded-tr-[50%] rounded-br-[50%] p-8 mb-10 md:mb-0">
              <div className="absolute w-full left-0 right-0 top-0 bottpm-0 z-[-1] hidden md:block drop-shadow-sm">
                <svg
                  width="331"
                  height="201"
                  viewBox="0 0 359 220"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.583008 20.0377C0.583008 8.99203 9.53731 0.037735 20.583 0.037735H296.572C304.314 0.037735 311.361 4.50633 314.663 11.5095L356.895 101.094C359.441 106.495 359.441 112.75 356.895 118.151L314.663 207.736C311.361 214.739 304.314 219.208 296.572 219.208H20.583C9.53729 219.208 0.583008 210.253 0.583008 199.208V20.0377Z"
                    fill="#FAFAFA"
                  />
                </svg>
              </div>
              <h1 className="text-bluegot text-3xl font-bold ">
                {t("herocardTwoNumber")}
              </h1>
              <div className="relative flex">
                <h2 className="text-lg my-2">{t("herocardTwoTitle")}</h2>
              </div>
              <p className="text-dimgot text-sm leading-8">
                {t("herocardTwoContent")}
              </p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="relative flex flex-col justify-center rounded-tl-[40px] rounded-bl-[40px] rounded-tr-[50%] rounded-br-[50%] p-8 mb-10 md:mb-0">
              <div className="absolute w-full left-0 right-0 top-0 bottpm-0 z-[-1] hidden md:block drop-shadow-sm">
                <svg
                  width="331"
                  height="201"
                  viewBox="0 0 359 220"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.583008 20.0377C0.583008 8.99203 9.53731 0.037735 20.583 0.037735H296.572C304.314 0.037735 311.361 4.50633 314.663 11.5095L356.895 101.094C359.441 106.495 359.441 112.75 356.895 118.151L314.663 207.736C311.361 214.739 304.314 219.208 296.572 219.208H20.583C9.53729 219.208 0.583008 210.253 0.583008 199.208V20.0377Z"
                    fill="#FAFAFA"
                  />
                </svg>
              </div>
              <h1 className="text-bluegot text-3xl font-bold ">
                {t("herocardThreeNumber")}
              </h1>
              <div className="relative flex">
                <h2 className="text-lg my-2">{t("herocardThreeTitle")}</h2>
                <span className="absolute hidden md:block right-[-30px]"></span>
              </div>
              <p className="text-dimgot text-sm leading-8">
                {t("herocardThreeContent")}
              </p>
            </div>
        </SwiperSlide>
     
      </Swiper>

         

            
           
          </section>
        </section>
      </section>

      {/* section 3 */}
      {/* plans cards here */}
      <section>
      <Swiper
        breakpoints={plansBreakpoints}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {dummyPlans.map((plan, index) => (
        <SwiperSlide key='index' >
          <PlanCard />
        </SwiperSlide>
        ))}
      </Swiper>
      </section>

          {/* section 4 */}
    <section className="relative  my-[100px] py-4 z-[1]">
      {/* top right illustration */}
      <div className="absolute top-[-40px] left-[-61px] ">
        <svg
          width="110"
          height="110"
          viewBox="0 0 110 110"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.1" clipPath="url(#clip0_30_1123)">
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
          <h1 className="text-6xl text-[#1F2D3D] font-bold">{t('landingFaqTitle')}</h1>
          <h1 className="text-6xl text-[#1F2D3D] font-bold">{t('landingFaqSubtitle')}</h1>
          <p className="text-gray-500 pt-8 pb-4 leading-8">
            {t('faqSubtitleP')}
          </p>
          <Link href='/faq' >
          <button
            type="button"
            className="flex gap-2 items-center text-darkgot text-[14px] w-[157px] h-[40px] stroke-darkgot hover:stroke-gotimate hover:text-gotimate transition-all rounded-[10px]"
          >
            {t('faqBtn')}
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
        {/* end of faq details */}

        {/* start of accordions contariner */}
        <div className="md:w-1/2">
          {faq.accordionData.map((data, index) => {
            return (
             (18 < index && index <= 22) && <AccordionItem
                key={index}
                open={index === open}
                toggle={() => toggle(index)}
                question={t(data.question)}
                answer={t(data.answer)}
              />
            );
          })}
        </div>
        {/* end of accordions container */}
      </section>
    </section>

      {/* section 5 */}
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
          <h1 className="  text-3xl text-[#1F2D3D]">Do you want to earn money?</h1>
          <p className="text-gray-500 px-2 leading-8 lg:w-auto">Lorem ipsum dolor sit amet, labore et dolore magna aliqua.Lorem ipsum dolor sit amet, labore et dolore magna aliqua.</p>
        </div>


        <div className="flex flex-1 h-[100px] lg:bg-transparent rounded-[30px] ">
         <Image src={trapezium} responsive  className='absolute top-0  right-0 hidden lg:block object-fill' />
         {/* these same buttons is for desktop breakpoints */}
          <div className=" absolute top-[78px] right-[155px] hidden lg:flex gap-3" >
          <button
            type="button"
            className="text-darkgot text-[14px] hover:text-white bg-white w-[153px] h-[40px] hover:bg-gray-400 transition-all  focus:outline-none  font-medium rounded-[30px]"
          >
            {t('startHereBtn')}
          </button>
          </div>
          {/* these buttons is for mobile break point */}
          <div className="flex gap-3 bg-gotimate lg:hidden justify-center items-center w-[90%] mx-auto my-5 h-[117px] rounded-[75px]" >
          <button
            type="button"
            className="text-darkgot text-[14px] bg-white w-[123px] h-[40px] hover:bg-gray-400 transition-all  focus:outline-none  font-medium rounded-[30px]"
          >{t('startHereBtn')}</button>
</div>
        </div>
      </section>
    </section>
    </section>
  );
};

export default partnership;
