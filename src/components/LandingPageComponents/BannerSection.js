import React from "react";
import Button from "../Buttons/Button";
import Slider from "react-slick";
import Illustration from "../../assets/images/Illustration.png";

const BannerSection = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (current, next) => setActiveIndex(next),
    customPaging: (i) => (
      <div
        className={`w-[10px] h-[10px] rounded-full transition-opacity duration-300 ${
          i === activeIndex ? "bg-opacity-100" : "bg-opacity-30"
        }`}
        style={{ background: "#4CAF4F", opacity: i === activeIndex ? 1 : 0.3 }}
      ></div>
    ),
    dotsClass: "slick-dots slick-thumb",
  };

  return (
    <section className="bg-gray-100 py-20 ">
      <div className="container mx-auto py-0 lg:py-20 px-10">
        <Slider {...settings}>
          <div>
            <div className="flex flex-col md:flex-row items-center justify-between md:justify-center gap-4 px-4 lg:px-8">
              <div className="flex flex-col items-center md:items-start justify-center w-full md:w-[60%] text-center md:text-left">
                <h1 className="text-[32px] lg:text-[64px] font-bold leading-[40px] lg:leading-[76px] text-[#4D4D4D]">
                  Lessons and insights <br />
                  <span className="text-[#4CAF4F]">from 8 years</span>
                </h1>
                <p className="mt-4 mb-6 text-[14px] lg:text-[16px] font-normal leading-[20px] lg:leading-[24px] text-[#717171]">
                  Another important lesson from our experiences in the industry.
                </p>
                <Button
                  text="Register"
                  bgColor="#4CAF4F"
                  textColor="#FFFFFF"
                  buttonwidth="128px"
                />
              </div>

              <div className="w-full md:w-[40%] flex items-center justify-center">
                <img
                  src={Illustration}
                  alt="Slide"
                  className="max-w-full max-h-full"
                />
              </div>
            </div>
          </div>

          <div>
            <div className="flex flex-col md:flex-row items-center justify-between md:justify-center gap-4 px-4 lg:px-8">
              <div className="flex flex-col items-center md:items-start justify-center w-full md:w-[60%] text-center md:text-left">
                <h1 className="text-[32px] lg:text-[64px] font-bold leading-[40px] lg:leading-[76px] text-[#4D4D4D]">
                  Lessons and insights <br />
                  <span className="text-[#4CAF4F]">from 8 years</span>
                </h1>
                <p className="mt-4 mb-6 text-[14px] lg:text-[16px] font-normal leading-[20px] lg:leading-[24px] text-[#717171]">
                  Another important lesson from our experiences in the industry.
                </p>
                <Button
                  text="Register"
                  bgColor="#4CAF4F"
                  textColor="#FFFFFF"
                  buttonwidth="128px"
                />
              </div>

              <div className="w-full md:w-[40%] flex items-center justify-center">
                <img
                  src={Illustration}
                  alt="Slide"
                  className="max-w-full max-h-full"
                />
              </div>
            </div>
          </div>

          <div>
            <div className="flex flex-col md:flex-row items-center justify-between md:justify-center gap-4 px-4 lg:px-8">
              <div className="flex flex-col items-center md:items-start justify-center w-full md:w-[60%] text-center md:text-left">
                <h1 className="text-[32px] lg:text-[64px] font-bold leading-[40px] lg:leading-[76px] text-[#4D4D4D]">
                  Lessons and insights <br />
                  <span className="text-[#4CAF4F]">from 8 years</span>
                </h1>
                <p className="mt-4 mb-6 text-[14px] lg:text-[16px] font-normal leading-[20px] lg:leading-[24px] text-[#717171]">
                  Another important lesson from our experiences in the industry.
                </p>
                <Button
                  text="Register"
                  bgColor="#4CAF4F"
                  textColor="#FFFFFF"
                  buttonwidth="128px"
                />
              </div>

              <div className="w-full md:w-[40%] flex items-center justify-center">
                <img
                  src={Illustration}
                  alt="Slide"
                  className="max-w-full max-h-full"
                />
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default BannerSection;
