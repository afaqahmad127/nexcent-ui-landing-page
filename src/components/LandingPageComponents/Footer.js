import React from "react";
import logo2 from "../../assets/images/Logo2.png";
import SocialIcon from "../../assets/images/Social Icons.png";
import SocialIcon1 from "../../assets/images/Social Icons1.png";
import SocialIcon2 from "../../assets/images/Social Icons2.png";
import SocialIcon3 from "../../assets/images/Social Icons3.png";

const Footer = () => {
  return (
    <footer className="bg-[#263238] py-12">
      <div className="container mx-auto px-4 flex flex-row flex-wrap justify-between">
        <div className="lg:w-[40%] mb-8 lg:mb-0">
          <img src={logo2} alt="Logo" className="mb-6" />
          <p className="text-[14px] font-normal leading-[20px] text-left text-[#F5F7FA] mb-2">
            Copyright © 2020 Nexcent ltd.
          </p>
          <p className="text-[14px] font-normal leading-[20px] text-left text-[#F5F7FA] mb-6">
            All rights reserved.
          </p>
          <div className="flex space-x-4">
            <img
              src={SocialIcon}
              alt="Social Icon 1"
              className="w-[32px] h-[32px]"
            />
            <img
              src={SocialIcon1}
              alt="Social Icon 2"
              className="w-[32px] h-[32px]"
            />
            <img
              src={SocialIcon2}
              alt="Social Icon 3"
              className="w-[32px] h-[32px]"
            />
            <img
              src={SocialIcon3}
              alt="Social Icon 4"
              className="w-[32px] h-[32px]"
            />
          </div>
        </div>

        <div className="lg:w-[15%] mb-8 lg:mb-0">
          <h3 className="text-[20px] font-semibold leading-[28px] text-left text-white mb-4">
            Company
          </h3>
          <ul>
            <li className="text-[14px] font-normal leading-[20px] text-left text-[#F5F7FA] mb-2">
              About us
            </li>
            <li className="text-[14px] font-normal leading-[20px] text-left text-[#F5F7FA] mb-2">
              Blog
            </li>
            <li className="text-[14px] font-normal leading-[20px] text-left text-[#F5F7FA] mb-2">
              Contact us
            </li>
            <li className="text-[14px] font-normal leading-[20px] text-left text-[#F5F7FA] mb-2">
              Pricing
            </li>
            <li className="text-[14px] font-normal leading-[20px] text-left text-[#F5F7FA]">
              Testimonials
            </li>
          </ul>
        </div>

        <div className="lg:w-[15%] mb-8 lg:mb-0">
          <h3 className="text-[20px] font-semibold leading-[28px] text-left text-white mb-4">
            Company
          </h3>
          <ul>
            <li className="text-[14px] font-normal leading-[20px] text-left text-[#F5F7FA] mb-2">
              About us
            </li>
            <li className="text-[14px] font-normal leading-[20px] text-left text-[#F5F7FA] mb-2">
              Blog
            </li>
            <li className="text-[14px] font-normal leading-[20px] text-left text-[#F5F7FA] mb-2">
              Contact us
            </li>
            <li className="text-[14px] font-normal leading-[20px] text-left text-[#F5F7FA] mb-2">
              Pricing
            </li>
            <li className="text-[14px] font-normal leading-[20px] text-left text-[#F5F7FA]">
              Testimonials
            </li>
          </ul>
        </div>

        <div className="lg:w-[30%]">
          <h3 className="text-[20px] font-semibold leading-[28px] text-left text-white mb-4">
            Stay up to date
          </h3>

          <div className="relative ">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full h-[40px] pl-4 pr-10 text-[14px] font-normal leading-[20px] text-left text-[#D9DBE1] bg-[#515b60] rounded-md"
            />
            <button className="absolute inset-y-0 right-0 flex items-center justify-center w-[40px] h-[40px]">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_431_89)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17.0303 0.969691C17.2341 1.17342 17.3031 1.47584 17.2079 1.74778L11.9579 16.7478C11.8563 17.038 11.5878 17.2369 11.2806 17.2494C10.9733 17.2619 10.6895 17.0856 10.5646 16.8046L7.6818 10.3182L1.1954 7.43538C0.91439 7.31049 0.738092 7.02671 0.750627 6.71945C0.763163 6.41219 0.961991 6.14371 1.25224 6.04213L16.2522 0.792127C16.5242 0.696948 16.8266 0.765962 17.0303 0.969691ZM9.14456 9.91612L11.1671 14.4667L14.7064 4.35429L9.14456 9.91612ZM13.6457 3.29362L3.53331 6.83297L8.0839 8.85546L13.6457 3.29362Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_431_89">
                    <rect width="18" height="18" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
