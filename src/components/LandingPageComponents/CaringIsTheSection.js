import React from "react";

import Button from "../Buttons/Button";

import BlogImage1 from "../../assets/images/image 18.png";
import BlogImage2 from "../../assets/images/image 19.png";
import BlogImage3 from "../../assets/images/image 20.png";

const CaringIsTheSection = () => {
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
    <section className="py-16 bg-white">
      <div className="container pb-16 mx-auto px-4">
        <h2 className="text-[36px] font-semibold leading-[44px] text-center text-[#4D4D4D] mb-4">
          Caring is the new marketing
        </h2>

        <p className="text-[16px] font-normal leading-[24px] text-center text-[#717171] mb-12">
          The Nexcent blog is the best place to read about the latest membership
          insights,<br></br> trends, and more. See who's joining the community,
          read about how our community <br></br>is increasing their membership
          income, and lots more.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-14 flex-wrap">
          <div className="w-ful h-[386px] ">
            <div className="relative ">
              <img
                src={BlogImage1}
                alt="Blog Post "
                className=" rounded-md object-cover"
              />
              <div className="absolute w-[317px] p-4 bg-[#F5F7FA] rounded-lg shadow-lg flex flex-col items-center left-1/2 transform -translate-x-1/2 top-2/2 -mt-16">
                <h4 className="text-[20px] font-semibold leading-[28px] text-center text-[#717171] mb-4">
                  Creating Streamlined Safeguarding Processes with OneRen
                </h4>
                <Button
                  text="Read more"
                  textColor="#4CAF4F"
                  icon={buttonicondark}
                  iconPosition="right"
                />
              </div>
            </div>
          </div>
          <div className="w-ful h-[386px] ">
            <div className="relative w-full ">
              <img
                src={BlogImage2}
                alt="Blog Post "
                className=" rounded-md object-cover"
              />
              <div className="absolute w-[317px] p-4 bg-[#F5F7FA] rounded-lg shadow-lg flex flex-col items-center left-1/2 transform -translate-x-1/2 top-2/2 -mt-16">
                <h4 className="text-[20px] font-semibold leading-[28px] text-center text-[#717171] mb-4">
                  What are your safeguarding responsibilities and how can you
                  manage them?
                </h4>
                <Button
                  text="Read more"
                  textColor="#4CAF4F"
                  icon={buttonicondark}
                  iconPosition="right"
                />
              </div>
            </div>
          </div>
          <div className="w-ful h-[386px] ">
            <div className="relative w-full ">
              <img
                src={BlogImage3}
                alt="Blog Post "
                className="rounded-md object-cover"
              />
              <div className="absolute w-[317px] p-4 bg-[#F5F7FA] rounded-lg shadow-lg flex flex-col items-center left-1/2 transform -translate-x-1/2 top-2/2 -mt-16">
                <h4 className="text-[20px] font-semibold leading-[28px] text-center text-[#717171] mb-4">
                  Revamping the Membership<br></br> Model with Triathlon
                  <br></br> Australia
                </h4>
                <Button
                  text="Read more"
                  textColor="#4CAF4F"
                  icon={buttonicondark}
                  iconPosition="right"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaringIsTheSection;
