import Image from "next/image";
import Link from "next/link";
import { initialData } from "@/initialData";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useAxios } from "@/hooks/useAxios";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation()
  const { postData } = useAxios();
  const { buttonsRoute } = initialData

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address.")
        .required("Email is required."),
    }),
    onSubmit: (values) => {
      postData(process.env.subscription, values);
    },
  });
  const { logo, footer, socialNetworks } = initialData;
  return (
    <section className=" relative overflow-hiddenflex flex-col items-center">
      <hr className="text-[14px]x w-[100%] bg-gray-200 border-0 my-[46px]" />
      <section className="flex flex-col md:flex-row items-center md:items-start py-6 gap-[100px]">
        {/* section one */}
        <div className="md:w-1/6 flex flex-col items-center md:items-start text-center md:text-start gap-5 ">
          <Link href="/">{logo}</Link>

          <p className="text-gray-500 leading-8 text-sm ">{t('footerUnderLogo')}</p>
          <div className="flex gap-3">
            <Link href={socialNetworks.facebook.href}>
              {socialNetworks.facebook.icon}
            </Link>
            <Link href={socialNetworks.twitter.href}>
              {socialNetworks.twitter.icon}
            </Link>
            <Link href={socialNetworks.linkdin.href}>
              {socialNetworks.linkdin.icon}
            </Link>
          </div>
        </div>

        {/* section two */}
        <div className="md:w-1/6 flex flex-col items-center md:items-start text-center md:text-start gap-2 mt-6 md:mt-0">
          <h1 className=" text-2xl font-bold text-darkgot">{t('footerSubsTitle')}</h1>
          <p className="text-gray-500 leading-8 text-sm">{t('footerSubsSubtitle')}</p>
          <form
            onSubmit={formik.handleSubmit}
            className="flex flex-col items-center"
          >
            <div className="relative w-full my-4">
              <div
                className="
                    inline-flex
                    items-center
                    justify-center
                    absolute
                    left-0
                    top-0
                    h-full
                    w-10
                    text-gray-400
                  "
              >
                <svg
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.8">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M3.83325 4.16667C3.37682 4.16667 2.99992 4.54357 2.99992 5V15C2.99992 15.4564 3.37682 15.8333 3.83325 15.8333H17.1666C17.623 15.8333 17.9999 15.4564 17.9999 15V5C17.9999 4.54357 17.623 4.16667 17.1666 4.16667H3.83325ZM1.33325 5C1.33325 3.6231 2.45635 2.5 3.83325 2.5H17.1666C18.5435 2.5 19.6666 3.6231 19.6666 5V15C19.6666 16.3769 18.5435 17.5 17.1666 17.5H3.83325C2.45635 17.5 1.33325 16.3769 1.33325 15V5Z"
                      fill="#637381"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M1.48396 4.52202C1.74789 4.14498 2.2675 4.05329 2.64454 4.31722L10.5 9.81603L18.3554 4.31722C18.7325 4.05329 19.2521 4.14498 19.516 4.52202C19.7799 4.89906 19.6883 5.41867 19.3112 5.6826L10.9779 11.5159C10.6909 11.7168 10.309 11.7168 10.0221 11.5159L1.68877 5.6826C1.31173 5.41867 1.22003 4.89906 1.48396 4.52202Z"
                      fill="#637381"
                    />
                  </g>
                </svg>
              </div>
              <input
                id="email"
                type="email"
                name="email"
                className="
                    text-sm
                    placeholder-gray-500
                    pl-10
                    pr-4
                    rounded-[6px]
                    shadow-sm
                    h-[40px]
                    w-full
                    py-2
                    focus:outline-none focus:border-blue-400
                  "
                placeholder={t('footerSubsPlaceholder')}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email && (
                <span className="absolute z-[10] transition-all bg-white p-1 rounded-md border border-red-500 left-0 top-[40px] text-sm text-red-500">
                  {formik.errors.email}
                </span>
              )}
            </div>
            <button
              className="bg-[#1F2D3D] hover:bg-cyan-800 w-[80%] md:w-[247px]  h-[40px] rounded-[10px] transition-all  text-white font-bold py-2 px-4  focus:outline-none focus:shadow-outline"
              type="submit"
            >
              {t('subscribeBtn')}
            </button>
          </form>
        </div>

        {/* section three */}
        <div className="md:w-1/6 flex flex-col items-center md:items-start text-center md:text-start gap-2 mt-6 md:mt-0">
          <h1 className=" text-2xl font-bold text-darkgot ">{t('footerHc')}</h1>
          <ul className="text-sm flex flex-col text-gray-500 leading-8">
              <Link
                href={buttonsRoute.contactus}
                className="hover:text-gotimate cursor-pointer"
              >
               {t('contactus')}
              </Link>
              <Link
                href={buttonsRoute.faq}
                className="hover:text-gotimate cursor-pointer"
              >
               {t('faq')}
              </Link>
              <Link
                href={buttonsRoute.privacypolicy}
                className="hover:text-gotimate cursor-pointer"
              >
               {t('privacy&policy')}
              </Link>
              <Link
                href={buttonsRoute.termsconditions}
                className="hover:text-gotimate cursor-pointer"
              >
               {t('terms&conditions')}
              </Link>
          </ul>
        </div>

        {/* section four */}
        <div className="md:w-1/6 flex flex-col items-center md:items-start text-center md:text-start gap-2 mt-6 md:mt-0">
          <h1 className=" text-2xl font-bold text-darkgot">{t('footerQa')}</h1>
          <div className="text-sm flex flex-col text-gray-500 leading-8">
        
              <Link
                href='/'
                className="hover:text-gotimate cursor-pointer"
              >
                {t('home')}
              </Link>
              <Link
                href={buttonsRoute.about}
                className="hover:text-gotimate cursor-pointer"
              >
                {t('about')}
              </Link>
              <Link
                href={buttonsRoute.partnership}
                className="hover:text-gotimate cursor-pointer"
              >
              {t('partnership')}
              </Link>
              
     
          </div>
        </div>
      </section>
      <hr className="text-[14px]x w-[100%] mt-[46px] bg-gray-200 border-0" />
      <p className="text-center mt-4 text-gray-500 text-sm">
        {footer.copyright.sign && <>&copy; </>}
        {t(footer.copyright.title)}
      </p>
    </section>
  );
};

export default Footer;
