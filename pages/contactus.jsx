import Link from "next/link";
import Image from "next/image";
import Map from "./Map";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useAxios } from "@/hooks/useAxios";
import { useTranslation } from 'react-i18next'

const contactus = () => {
  const { t } = useTranslation()
  const { postData } = useAxios();
  const formik = useFormik({
    initialValues: {
      email: "",
      first_name: "",
      last_name: "",
      message: "",
    },
    //form validation
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address.")
        .required("Emaill is required."),
      first_name: Yup.string()
        .max(20, "less than 20 character")
        .required("first name is required."),
      last_name: Yup.string()
        .max(20, "less than 20 character")
        .required("last name is required."),
      message: Yup.string().required("Please type somthing!"),
    }),
    // submit form
    onSubmit: (values) => {
      postData(process.env.contactUs, values);
    },
  });
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
          <form onSubmit={formik.handleSubmit} className="flex flex-col gap-3">
            <div className="flex flex-col items-start">
              <h1 className="text-[52px]">{t('cuTitleP')}</h1>
              <p className="text-sm py-3 leading-8 ">
                {t('cuSubtitlep')}
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-3 w-[100%]">
              <div className="relative w-full">
                <input
                  id="first_name"
                  type="text"
                  name="first_name"
                  className={`text-[14px] placeholder-gray-500
                pl-4
                pr-4
                rounded-[6px]
                 border border-[#e0e0e0]
                w-full
                h-[40px]
                py-2
                focus:outline-none focus:border-blue-400
                ${
                  formik.touched.first_name &&
                  formik.errors.first_name &&
                  "border-red-500"
                }
              `}
                  placeholder={t('cuFirstnamePlaceholder')}
                  value={formik.values.first_name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {/* text error place */}
                {formik.touched.first_name && formik.errors.first_name && (
                  <span className="absolute z-[10] transition-all bg-white p-1 rounded-md border border-red-500 left-0 top-[40px] text-sm text-red-500">
                    {formik.errors.first_name}
                  </span>
                )}
              </div>

              <div className="relative w-full">
                <input
                  id="last_name"
                  type="text"
                  name="last_name"
                  className={`text-[14px] placeholder-gray-500
                pl-4
                pr-4
                rounded-[6px]
                 border border-[#e0e0e0]
                w-full
                h-[40px]
                py-2
                focus:outline-none focus:border-blue-400
                ${
                  formik.touched.last_name &&
                  formik.errors.last_name &&
                  "border-red-500"
                }
              `}
              placeholder={t('cuLastnamePlaceholder')}
                  value={formik.values.last_name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {/* text error place */}
                {formik.touched.last_name && formik.errors.last_name && (
                  <span className="absolute z-[10] transition-all bg-white p-1 rounded-md border border-red-500 left-0 top-[40px] text-sm text-red-500">
                    {formik.errors.last_name}
                  </span>
                )}
              </div>
            </div>

            <div className="relative w-[100%]">
              <input
                id="email"
                type="email"
                name="email"
                className={`text-[14px] placeholder-gray-500
              pl-4
              pr-4
              rounded-[6px]
               border border-[#e0e0e0]
              w-full
              h-[40px]
              py-2
              focus:outline-none focus:border-blue-400
              ${formik.touched.email && formik.errors.email && "border-red-500"}
            `}
                placeholder={t('cuEmailPlaceholder')}
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {/* text error place */}
              {formik.touched.email && formik.errors.email && (
                <span className="absolute z-[10] transition-all bg-white p-1 rounded-md border border-red-500 left-0 top-[40px] text-sm text-red-500">
                  {formik.errors.email}
                </span>
              )}
            </div>

            <div className="relative w-[100%]">
              <textarea
                value={formik.values.message}
                className={`text-[14px] placeholder-gray-500
              bg-middarkloan
                    pl-4
                    rounded-[6px]
                    border border-[#e0e0e0]
                    w-full
                    py-2
                    focus:outline-none focus:border-blueloan
                    card-hover
                  `}
                name="message"
                id="message"
                cols="30"
                rows="4"
                placeholder={t('cuDescPlaceholder')}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              ></textarea>
              {/* text error place */}
              {formik.touched.message && formik.errors.message && (
                <span className="absolute z-[10] transition-all bg-white p-1 rounded-md border border-red-500 left-0 top-[40px] text-sm text-red-500">
                  {formik.errors.message}
                </span>
              )}
            </div>

            <div className="flex w-[100%]">
              <button
                type="submit"
                className="w-full flex justify-center items-center gap-1 bg-gotimate transition-all hover:bg-darkgot text-white h-[40px] rounded-md mx-auto"
              >
                {t('submitBtn')}
              </button>
            </div>
          </form>
        </div>

        {/* image illustration */}
        <div className=" relative w-full">
          <img
            src="/contactus.svg"
            width="100%"
            height="100%"
            alt="contact us illuatration"
          />
        </div>
      </section>

      {/* call and contacts */}
      <section className="flex flex-col gap-3">
        <div className="flex flex-col items-center mt-[70px] mb-[40px]">
          <h1 className="text-3xl">{t('cuDetailTitle')}</h1>
          <p className="text-sm py-3">
            {t('cuDetailSubtitle')}
          </p>
        </div>
        <section className="w-full flex flex-col md:flex-row justify-center items-center">
          <a
            href="mailto:contact@gotimate.com"
            className="flex gap-7 items-center w-[90%] md:w-[60%]"
          >
            <div className="flex justify-center items-center bg-dimdarkloan rounded-full w-[50px] h-[50px] dark-icon-container">
              <Image
                src="/icons/mail.svg"
                priority
                width="30"
                height="30"
                alt="email"
              />
            </div>
            <div className="flex flex-col">
              <h1 className="text-lg my-0">{t('emailText')}</h1>
              <p className="text-[12px]">{t('emailAddress')}</p>
            </div>
          </a>
          {/* card end */}
          <a
            href="tel:+98125325658"
            className="flex gap-7 items-center w-[90%] md:w-[60%]"
          >
            <div className="flex justify-center items-center bg-dimdarkloan rounded-full w-[50px] h-[50px] dark-icon-container">
              <Image
                src="/icons/phone.svg"
                priority
                width="30"
                height="30"
                alt="phone number"
              />
            </div>
            <div className="flex flex-col">
              <h1 className="text-lg my-0">{t('phoneText')}</h1>
              <p className="text-[12px]">{t('phoneNumber')}</p>
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
                alt="address"
              />
            </div>
            <div className="flex flex-col">
              <h1 className="text-lg my-0">{t('addressText')}</h1>
              <p className="text-[12px]">{t('address')}</p>
            </div>
          </section>
          {/* card end */}
        </section>
        {/* map structure */}

        <section className="flex flex-col justify-center items-center w-full text-center my-[30px]">
          <h1 className="text-3xl py-2">{t('cuMapTitle')}</h1>
          <Map />
        </section>
      </section>
    </section>
  );
};

export default contactus;
