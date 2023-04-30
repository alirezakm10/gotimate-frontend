import Link from "next/link";
import Image from "next/image";
import Map from "./Map";

const aboutus = () => {
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
        <div className="flex flex-col justify-start w-full">
          <h1 className="text-[52px]">About us</h1>
          <p className="text-sm py-3 md:w-3/4 leading-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. nisi ut aliquip ex ea commodo
            consequat Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <Link href="/contactus">
            <button
              type="button"
              className="flex gap-2 items-center text-darkgot text-[14px] w-[119px] h-[40px] stroke-darkgot hover:stroke-gotimate hover:text-gotimate transition-all rounded-[10px]"
            >
              have a question
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

        {/* image illustration */}
        <div className=" relative w-full">
          <img src="/aboutus.svg" width="90%" height="90%" />
        </div>
      </section>

      <section className="my-3">
        <h1 className="text-3xl">Our Mission</h1>
        <p className=" text-sm text-darkgot leading-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat
          odio facilisis mauris sit amet massa. Dui sapien eget mi proin sed
          libero enim sed faucibus. Nisl rhoncus mattis rhoncus urna neque
          viverra. Amet facilisis magna etiam tempor orci eu lobortis elementum
          nibh. Lobortis mattis aliquam faucibus purus. Sit amet mauris commodo
          quis imperdiet. Nisl purus in mollis nunc sed id semper. Lacus luctus
          accumsan tortor posuere ac ut consequat semper. Ut eu sem integer
          vitae justo eget magna fermentum. In hendrerit gravida rutrum quisque.
        </p>
      </section>

      {/* call and contacts */}
      <section className="flex flex-col gap-3">
        <div className="flex flex-col items-center mt-[70px] mb-[40px]">
          <h1 className="text-3xl">Our Team</h1>
          <p className="text-sm py-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </p>
        </div>
        <section className="w-full flex flex-col gap-3 md:flex-row justify-center items-center">
          {/* card start */}
          <section className=" relative flex flex-col gap-3 flex-1">
            <div className="relative overflow-hidden w-full h-auto max-h-[400px]">
              <Image src="/team/sample.jpg" width={300} height={300} />
            </div>
            <h1 className="text-lg">Sajad Karami</h1>
            <p className="text-sm text-dimgot pb-2 ">Direct manager</p>
            <p className="leading-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam .
            </p>
          </section>
          {/* card end */}
                   {/* card start */}
                   <section className=" relative flex flex-col gap-3 flex-1">
            <div className="relative overflow-hidden w-full h-auto max-h-[40%]">
              <img src="/team/sample.jpg" width="100%" height="100%" />
            </div>
            <h1 className="text-lg">Sajad Karami</h1>
            <p className="text-sm text-dimgot pb-2 ">Direct manager</p>
            <p className="leading-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam .
            </p>
          </section>
          {/* card end */}
                   {/* card start */}
                   <section className=" relative flex flex-col gap-3 flex-1">
            <div className="relative overflow-hidden w-full h-auto max-h-[40%]">
              <img src="/team/sample.jpg" width="100%" height="100%" />
            </div>
            <h1 className="text-lg">Sajad Karami</h1>
            <p className="text-sm text-dimgot pb-2 ">Direct manager</p>
            <p className="leading-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam .
            </p>
          </section>
          {/* card end */}
        </section>
      </section>
    </section>
  );
};

export default aboutus;
