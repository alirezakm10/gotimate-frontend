import Image from 'next/image'

const Footer = () => {
  return (
  <section className="flex flex-col items-center my-[100px]" >
      <section className="flex flex-col items-center md:items-start md:flex-row p-10 gap-[100px]">
      {/* section one */}
      <div className="md:w-1/4 flex flex-col gap-5 " >
        <Image
          src="/gotimate-logo.png"
          layout='responsive'
          width='100'
          height='100'
          alt="gotimate Logo"
        />
        <p className="text-gray-500" >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor inci quis nostrud exercitation.
        </p>
        <div className="flex gap-3">
          <svg
            width="33"
            height="37"
            viewBox="0 0 33 37"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.7853 19.0725H17.2505V29.3487H13.41V19.0725H11.5834V15.461H13.41V13.124C13.41 11.4528 14.1274 8.83582 17.2847 8.83582L20.1294 8.84899V12.3545H18.0654C17.7268 12.3545 17.2507 12.5417 17.2507 13.3389V15.4644H20.1208L19.7853 19.0725Z"
              fill="#CDCCCC"
            />
          </svg>

          <svg
            width="34"
            height="37"
            viewBox="0 0 34 37"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M26.7629 13.301C26.0659 13.643 25.316 13.8744 24.5296 13.9777C25.3325 13.4454 25.9487 12.6031 26.2395 11.5978C25.4883 12.091 24.6558 12.4488 23.7705 12.6416C23.0613 11.8058 22.0508 11.2834 20.9318 11.2834C18.7849 11.2834 17.0437 13.2102 17.0437 15.5859C17.0437 15.9231 17.0782 16.2513 17.1449 16.5664C13.9136 16.3871 11.0485 14.6743 9.13068 12.0705C8.79606 12.7058 8.60411 13.4454 8.60411 14.2337C8.60411 15.7261 9.29103 17.0435 10.3337 17.8149C9.69668 17.7928 9.09675 17.5993 8.57279 17.2762C8.5725 17.2945 8.5725 17.3127 8.5725 17.3307C8.5725 19.4154 9.91328 21.1541 11.6916 21.5491C11.3657 21.6479 11.0215 21.7002 10.6675 21.7002C10.4164 21.7002 10.1731 21.6736 9.9359 21.6236C10.4306 23.3325 11.8662 24.5765 13.568 24.6114C12.237 25.7656 10.5608 26.4532 8.73865 26.4532C8.42549 26.4532 8.11523 26.433 7.81165 26.3929C9.5314 27.6141 11.5756 28.3261 13.7712 28.3261C20.9228 28.3261 24.8338 21.7702 24.8338 16.0842C24.8338 15.8977 24.83 15.712 24.8225 15.5278C25.5828 14.9213 26.2419 14.1638 26.7629 13.301Z"
              fill="#CDCCCC"
            />
          </svg>

          <svg
            width="33"
            height="37"
            viewBox="0 0 33 37"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M26.0509 19.8131V27.2341H22.1628V20.3105C22.1628 18.572 21.6014 17.3848 20.1936 17.3848C19.1193 17.3848 18.4811 18.1841 18.1993 18.958C18.0969 19.2346 18.0705 19.6187 18.0705 20.0066V27.2338H14.1821C14.1821 27.2338 14.2343 15.5074 14.1821 14.2936H18.0708V16.1273C18.063 16.1418 18.052 16.1559 18.045 16.1697H18.0708V16.1273C18.5875 15.2475 19.509 13.9897 21.575 13.9897C24.1331 13.9897 26.0509 15.8392 26.0509 19.8131ZM10.1145 8.05591C8.78443 8.05591 7.91425 9.02204 7.91425 10.2914C7.91425 11.5338 8.7592 12.5278 10.0635 12.5278H10.0887C11.4448 12.5278 12.2881 11.5338 12.2881 10.2914C12.2623 9.02204 11.4448 8.05591 10.1145 8.05591ZM8.14535 27.2341H12.0323V14.2936H8.14535V27.2341Z"
              fill="#CDCCCC"
            />
          </svg>
        </div>
      </div>

{/* section two */}
      <div className="md:w-1/4 flex flex-col gap-5" >
        <h1 className=" text-1xl font-bold">Subscribe</h1>
        <p className="text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>
        <form className="flex flex-col items-center">
          <input
            className=" my-4 h-[60px] appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Your email here ..."
          />
          <button
            className="bg-black hover:bg-white-700 w-[180px] h-[60px] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Subscribe
          </button>
        </form>
    
      </div>

{/* section three */}
      <div className="md:w-1/4 flex flex-col gap-5 " >
      <h1 className=" text-1xl font-bold">Subscribe</h1>
      <ul className="text-sm text-gray-500 leading-8" >
        <li>About Us</li>
        <li>Help</li>
        <li>New item here</li>
        <li>Learn About</li>
        <li>Support</li>
      </ul>
      </div>

      {/* section four */}
      <div className="md:w-1/4 flex flex-col gap-5" >
      <h1 className=" text-1xl font-bold">Subscribe</h1>
      <ul className="text-sm text-gray-500 leading-8" >
        <li>Home</li>
        <li>About us</li>
        <li>Contact</li>
        <li>Partnershop</li>
        <li>Support</li>
      </ul>
      </div>
      
    </section>
    <hr class="h-px w-[90%] bg-gray-200 border-0 dark:bg-gray-700" />
    <p className="text-center my-4 text-gray-500 text-sm">
    &copy;2023 Gotimate Platform. All Rights Reserved.
  </p>
  </section>
  );
};

export default Footer;
