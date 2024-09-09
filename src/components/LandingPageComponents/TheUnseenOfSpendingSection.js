import React from "react";
import Button from "../Buttons/Button";
import UnseenImage from "../../assets/images/Frame 35.png";

const TheUnseenOfSpendingSection = () => {
  return (
    <section>
      <div className=" bg-white py-16 container mx-auto flex flex-col items-center justify-center  lg:flex-row items-start gap-8 px-4">
        <div className="lg:w-[40%] w-full">
          <img
            src={UnseenImage}
            alt="Unseen Pixelgrade"
            className="w-full h-auto"
          />
        </div>

        <div className="lg:w-[60%] w-full">
          <h2 className="text-[36px] font-semibold leading-[44px] text-[#4D4D4D] text-left">
            The unseen of spending three <br></br>years at Pixelgrade
          </h2>
          <p className="mt-4 mb-6  text-[14px] font-normal leading-[20px] text-[#717171] text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
            Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
            tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
            Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
            elementum pulvinar odio.
          </p>

          <Button text="Learn More" bgColor="#4CAF4F" textColor="#FFFFFF" />
        </div>
      </div>
    </section>
  );
};

export default TheUnseenOfSpendingSection;
