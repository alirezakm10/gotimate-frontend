import Link from "next/link";
import { useTranslation } from 'react-i18next'

const privacy = () => {
  const { t } = useTranslation()

  return (
    <section className="flex flex-col justify-center py-3 text-darkgot">
      <section className="blured-headpage">
        <nav className="flex justify-between pt-3" aria-label="Breadcrumb">
          <p>Privacy policy</p>
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
                {t('home')}
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
                <p
                  className="ml-1 text-sm font-medium text-gray-700 hover:text-blueloan md:ml-2 dark:text-gray-400 dark:hover:text-white"
                >
                  {t('privacySlug')}
                </p>
              </div>
            </li>
          </ol>
        </nav>
      </section>
      <section className="flex flex-col items-center justify-center my-[30px]">
        <h1 className="text-3xl text-darkgot">{t('privacyTitle')}</h1>
        <p className="text-md text-center leading-8 py-3">
          {t('privacySubtitle')}
        </p>
      </section>
      <p className='text-dimgot' >Effective date: {t('privacyDate')}</p>

      {/* these are cards */}
      <section className="my-3">
        <h1 className="text-lg">{t('privacy1Title')}</h1>
        <p className=" text-sm text-dimgot leading-8">
          {t('privacy1Content')}
        </p>
      </section>
      <section className="my-3">
        <h1 className="text-lg">{t('privacy2Title')}</h1>
        <p className=" text-sm text-dimgot leading-8">
          {t('privacy2Content')}
        </p>
      </section>
      <section className="my-3">
        <h1 className="text-lg">{t('privacy3Title')}</h1>
        <p className=" text-sm text-dimgot leading-8">
          {t('privacy3Content')}
        </p>
      </section>
      <section className="my-3">
        <h1 className="text-lg">{t('privacy4Title')}</h1>
        <p className=" text-sm text-dimgot leading-8">
          {t('privacy4Content')}
        </p>
      </section>
      <section className="my-3">
        <h1 className="text-lg">{t('privacy5Title')}</h1>
        <p className=" text-sm text-dimgot leading-8">
          {t('privacy5Content')}
        </p>
      </section>
      <section className="my-3">
        <h1 className="text-lg">{t('privacy6Title')}</h1>
        <p className=" text-sm text-dimgot leading-8">
          {t('privacy6Content')}
        </p>
      </section>
    </section>
  );
};

export default privacy;
