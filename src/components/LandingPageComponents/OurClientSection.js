import React from "react";
import Slider from "react-slick";
import ClientImage1 from "../../assets/images/Logo (1).png";
import ClientImage2 from "../../assets/images/Logo (2).png";
import ClientImage3 from "../../assets/images/Logo (3).png";
import ClientImage4 from "../../assets/images/Logo (4).png";
import ClientImage5 from "../../assets/images/Logo (5).png";
import ClientImage6 from "../../assets/images/Logo (6).png";
import ClientImage7 from "../../assets/images/Logo (7).png";

const OurClientSection = () => {
  const settingsOurClient = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-[36px] font-semibold leading-[44px] text-[#4D4D4D]">
          Our Clients
        </h2>
        <p className="mt-4 text-[16px] font-normal leading-[24px] text-[#717171]">
          We have been working with some Fortune 500+ clients
        </p>

        <div className="mt-12">
          <Slider {...settingsOurClient}>
            <div className="flex justify-center items-center p-2">
              <img
                src={ClientImage1}
                alt="Client 1"
                className="w-[48px] h-[48px] p-1 rounded-[8px] opacity-100"
              />
            </div>
            <div className="flex justify-center items-center p-2">
              <img
                src={ClientImage2}
                alt="Client 2"
                className="w-[48px] h-[48px] p-1 rounded-[8px] opacity-100"
              />
            </div>
            <div className="flex justify-center items-center p-2">
              <img
                src={ClientImage3}
                alt="Client 3"
                className="w-[48px] h-[48px] p-1 rounded-[8px] opacity-100"
              />
            </div>
            <div className="flex justify-center items-center p-2">
              <img
                src={ClientImage4}
                alt="Client 4"
                className="w-[48px] h-[48px] p-1 rounded-[8px] opacity-100"
              />
            </div>
            <div className="flex justify-center items-center p-2">
              <img
                src={ClientImage5}
                alt="Client 5"
                className="w-[48px] h-[48px] p-1 rounded-[8px] opacity-100"
              />
            </div>
            <div className="flex justify-center items-center p-2">
              <img
                src={ClientImage6}
                alt="Client 6"
                className="w-[48px] h-[48px] p-1 rounded-[8px] opacity-100"
              />
            </div>
            <div className="flex justify-center items-center p-2">
              <img
                src={ClientImage7}
                alt="Client 7"
                className="w-[48px] h-[48px] p-1 rounded-[8px] opacity-100"
              />
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default OurClientSection;
