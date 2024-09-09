import React from "react";
import Button from "../Buttons/Button";
import Image7 from "../../assets/images/image 9.png";
import Logo1 from "../../assets/images/Logo (8).png";
import Logo2 from "../../assets/images/Logo (9).png";
import Logo3 from "../../assets/images/Logo (10).png";
import Logo4 from "../../assets/images/Logo (11).png";
import Logo5 from "../../assets/images/Logo (12).png";
import Logo6 from "../../assets/images/Logo (13).png";

const TimSmithSection = () => {
  const buttonicondark = (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16 16.399L19.2929 13.1062C19.6834 12.7156 19.6834 12.0825 19.2929 11.6919L16 8.39905M19 12.399L5 12.399"
        stroke="#4CAF4F"
        stroke-width="1.5"
        stroke-linecap="round"
      />
    </svg>
  );
  return (
    <section className=" bg-[#F5F7FA] py-16 ">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8 px-4">
        <div className="lg:w-[30%] md:w[40%] w-full py-12 flex flex-col items-center md:items-start">
          <img
            src={Image7}
            alt="Customer "
            className="w-[326px] h-[326px]  rounded-md md:text-center"
          />
        </div>

        <div className="lg:w-[70%] md:w[60%] w-full w-full">
          <p className="text-[16px] font-medium leading-[24px] text-left text-[#717171] mb-4">
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
            lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
            enim metus. Vivamus sed libero ornare, tristique quam in, gravida
            enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit
            at ligula molestie, nec molestie mi blandit. Suspendisse cursus
            tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse
            eget lorem eu turpis vestibulum pretium. Suspendisse potenti.
            Quisque malesuada enim sapien, vitae placerat ante feugiat eget.
            Quisque vulputate odio neque, eget efficitur libero condimentum id.
            Curabitur id nibh id sem dignissim finibus ac sit amet magna.
          </p>

          <h4 className="text-[20px] font-semibold leading-[28px] text-left text-[#4CAF4F] mb-2">
            Tim Smith
          </h4>

          <p className="text-[16px] font-normal leading-[24px] text-left text-[#89939E] mb-6">
            British Dragon Boat Racing Association
          </p>

          <div className="flex items-center justify-between gap-4 mb-6 flex-wrap">
            <img
              src={Logo1}
              alt="Customer 1"
              className="w-[48px] h-[48px] rounded-md bg-gray-200"
            />
            <img
              src={Logo2}
              alt="Customer 2"
              className="w-[48px] h-[48px] rounded-md "
            />
            <img
              src={Logo3}
              alt="Customer 3"
              className="w-[48px] h-[48px] rounded-md "
            />
            <img
              src={Logo4}
              alt="Customer 4"
              className="w-[48px] h-[48px] rounded-md "
            />
            <img
              src={Logo5}
              alt="Customer 5"
              className="w-[48px] h-[48px] rounded-md "
            />
            <img
              src={Logo6}
              alt="Customer 6"
              className="w-[48px] h-[48px] rounded-md "
            />
            <Button
              text="Meet all customers"
              textColor="#4CAF4F"
              icon={buttonicondark}
              iconPosition="right"
            />
            <button className="flex items-center gap-4 text-[#4CAF4F] font-semibold text-[20px] leading-[28px]"></button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimSmithSection;
