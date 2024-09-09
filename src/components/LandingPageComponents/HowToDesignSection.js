import React from "react";
import Button from "../Buttons/Button";
import mobile from "../../assets/images/mobile.png";

const HowToDesignSection = () => {
  return (
    <section>
      <div className=" bg-white py-16 container mx-auto flex flex-col items-center justify-center  lg:flex-row items-start gap-8 px-4">
        <div className="lg:w-[40%] w-full">
          <img src={mobile} alt="Unseen Pixelgrade" className="w-full h-auto" />
        </div>

        <div className="lg:w-[60%] w-full">
          <h2 className="text-[36px] font-semibold leading-[44px] text-[#4D4D4D] text-left">
            How to design your site footer like <br></br> we did
          </h2>
          <p className="mt-4 mb-6 text-[14px] font-normal leading-[20px] text-[#717171] text-left">
            Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
            augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
            elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
            habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
            facilisis finibus. In euismod augue vitae nisi ultricies, non
            aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus
            efficitur quis massa. Praesent felis est, finibus et nisi ac,
            hendrerit venenatis libero. Donec consectetur faucibus ipsum id
            gravida.
          </p>
          <Button text="Learn More" bgColor="#4CAF4F" textColor="#FFFFFF" />
        </div>
      </div>
    </section>
  );
};

export default HowToDesignSection;
