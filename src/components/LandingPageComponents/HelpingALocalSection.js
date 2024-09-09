import React from "react";
import LocalBusiness1 from "../../assets/images/Icon (3).png";
import LocalBusiness2 from "../../assets/images/Icon (4).png";
import LocalBusiness3 from "../../assets/images/Icon (5).png";
import LocalBusiness4 from "../../assets/images/Icon (6).png";

const HelpingALocalSection = () => {
  return (
    <section>
      <div className=" bg-[#F5F7FA] py-16 ">
        <div className=" bg-[#F5F7FA] py-16 container mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 px-4">
          <div className="lg:w-1/2 w-full flex flex-col items-center">
            <h2 className="text-[36px] font-semibold leading-[44px] text-left text-[#4D4D4D]">
              Helping a local <br />
              <span className="text-[#4CAF4F]">business reinvent itself</span>
            </h2>
            <p className="mt-4 text-[16px] font-normal leading-[24px] text-left text-[#18191F]">
              We reached here with our hard work and dedication.
            </p>
          </div>

          <div className="lg:w-1/2 w-full  grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="flex items-center">
              <img
                src={LocalBusiness1}
                alt="Unseen Pixelgrade"
                className="w-[48] h-[48]"
              />
              <div className="ml-4">
                <h3 className="text-[28px] font-bold leading-[36px] text-[#4D4D4D]">
                  2,245,341
                </h3>
                <p className="text-[16px] font-normal leading-[24px] text-[#717171]">
                  Members
                </p>
              </div>
            </div>

            <div className="flex items-center">
              <img
                src={LocalBusiness2}
                alt="Unseen Pixelgrade"
                className="w-[48] h-[48]"
              />
              <div className="ml-4">
                <h3 className="text-[28px] font-bold leading-[36px] text-[#4D4D4D]">
                  828,867
                </h3>
                <p className="text-[16px] font-normal leading-[24px] text-[#717171]">
                  Event Bookings
                </p>
              </div>
            </div>

            <div className="flex items-center">
              <img
                src={LocalBusiness3}
                alt="Unseen Pixelgrade"
                className="w-[48] h-[48]"
              />

              <div className="ml-4">
                <h3 className="text-[28px] font-bold leading-[36px] text-[#4D4D4D]">
                  46,328
                </h3>
                <p className="text-[16px] font-normal leading-[24px] text-[#717171]">
                  Clubs
                </p>
              </div>
            </div>

            <div className="flex items-center">
              <img
                src={LocalBusiness4}
                alt="Unseen Pixelgrade"
                className="w-[48] h-[48]"
              />

              <div className="ml-4">
                <h3 className="text-[28px] font-bold leading-[36px] text-[#4D4D4D]">
                  1,926,436
                </h3>
                <p className="text-[16px] font-normal leading-[24px] text-[#717171]">
                  Payments
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HelpingALocalSection;
