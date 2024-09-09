import React from "react";
import Button from "../Buttons/Button";

const PellentesqueSuscipitSection = () => {
  const buttoniconlight = (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.2503 11.0001L13.7201 8.53039C14.013 8.23749 14.013 7.7626 13.7201 7.4697L11.2503 4.99997M13.5004 8.00004L2.50012 8.00004"
        stroke="white"
        stroke-width="1.1"
        stroke-linecap="round"
      />
    </svg>
  );

  return (
    <section className="flex flex-col items-center justify-center py-16 bg-[#F5F7FA]">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6 text-center text-[#263238]">
        Pellentesque suscipit <br /> fringilla libero eu.
      </h1>
      <Button
        text="Get a Demo"
        bgColor="#4CAF4F"
        textColor="#ffffff"
        icon={buttoniconlight}
        iconPosition="right"
      />
    </section>
  );
};

export default PellentesqueSuscipitSection;
