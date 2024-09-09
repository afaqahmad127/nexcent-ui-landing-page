import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import ServiceImage1 from "../assets/images/Icon.png";
import ServiceImage2 from "../assets/images/Icon (1).png";
import ServiceImage3 from "../assets/images/Icon (2).png";
import UnseenImage from "../assets/images/Frame 35.png";
import mobile from "../assets/images/mobile.png";
import LocalBusiness1 from "../assets/images/Icon (3).png";
import LocalBusiness2 from "../assets/images/Icon (4).png";
import LocalBusiness3 from "../assets/images/Icon (5).png";
import LocalBusiness4 from "../assets/images/Icon (6).png";
import Image7 from "../assets/images/image 9.png";
import Logo1 from "../assets/images/Logo (8).png";
import Logo2 from "../assets/images/Logo (9).png";
import Logo3 from "../assets/images/Logo (10).png";
import Logo4 from "../assets/images/Logo (11).png";
import Logo5 from "../assets/images/Logo (12).png";
import Logo6 from "../assets/images/Logo (13).png";
import BlogImage1 from "../assets/images/image 18.png";
import BlogImage2 from "../assets/images/image 19.png";
import BlogImage3 from "../assets/images/image 20.png";
import Slider from "react-slick";
import Illustration from "../assets/images/Illustration.png";
import ClientImage1 from "../assets/images/Logo (1).png";
import ClientImage2 from "../assets/images/Logo (2).png";
import ClientImage3 from "../assets/images/Logo (3).png";
import ClientImage4 from "../assets/images/Logo (4).png";
import ClientImage5 from "../assets/images/Logo (5).png";
import ClientImage6 from "../assets/images/Logo (6).png";
import ClientImage7 from "../assets/images/Logo (7).png";
const LandingPage = () => {
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
    <div>
      <Header />
      {/* Banner Section */}
      <section className="bg-gray-100 py-20 ">
        <div className="container mx-auto py-0 lg:py-20 px-10">
          <Slider {...settings}>
            <div>
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 items-center">
                <div className="lg:col-span-3 flex flex-col justify-center px-4 lg:px-8">
                  <h1 className="text-[32px] lg:text-[64px] font-bold leading-[40px] lg:leading-[76px] text-[#4D4D4D]">
                    Lessons and insights <br />
                    <span className="text-[#4CAF4F]">from 8 years</span>
                  </h1>
                  <p className="mt-4 text-[14px] lg:text-[16px] font-normal leading-[20px] lg:leading-[24px] text-[#717171]">
                    Another important lesson from our experiences in the
                    industry.
                  </p>
                  <button className="mt-8 bg-[#4CAF4F] w-[128px] text-center text-white font-medium py-[10px] lg:py-[14px] px-[24px] lg:px-[32px] rounded-lg">
                    Register
                  </button>
                </div>

                <div className="lg:col-span-2 flex items-center justify-center px-4 lg:px-8">
                  <img
                    src={Illustration}
                    alt="Slide"
                    className="max-w-full max-h-full"
                  />
                </div>
              </div>
            </div>

            <div>
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 items-center">
                <div className="lg:col-span-3 flex flex-col justify-center px-4 lg:px-8">
                  <h1 className="text-[32px] lg:text-[64px] font-bold leading-[40px] lg:leading-[76px] text-[#4D4D4D]">
                    Lessons and insights <br />
                    <span className="text-[#4CAF4F]">from 8 years</span>
                  </h1>
                  <p className="mt-4 text-[14px] lg:text-[16px] font-normal leading-[20px] lg:leading-[24px] text-[#717171]">
                    Another important lesson from our experiences in the
                    industry.
                  </p>
                  <button className="mt-8 bg-[#4CAF4F] w-[128px] text-center text-white font-medium py-[10px] lg:py-[14px] px-[24px] lg:px-[32px] rounded-lg">
                    Register
                  </button>
                </div>

                <div className="lg:col-span-2 flex items-center justify-center px-4 lg:px-8">
                  <img
                    src={Illustration}
                    alt="Slide"
                    className="max-w-full max-h-full"
                  />
                </div>
              </div>
            </div>

            <div>
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 items-center">
                <div className="lg:col-span-3 flex flex-col justify-center px-6 lg:px-12">
                  <h1 className="text-[32px] lg:text-[64px] font-bold leading-[40px] lg:leading-[76px] text-[#4D4D4D]">
                    Lessons and insights <br />
                    <span className="text-[#4CAF4F]">from 8 years</span>
                  </h1>
                  <p className="mt-4 text-[14px] lg:text-[16px] font-normal leading-[20px] lg:leading-[24px] text-[#717171]">
                    Discover how to make the most of your business.
                  </p>
                  <button className="mt-8 bg-[#4CAF4F] w-[128px] text-center text-white font-medium py-[10px] lg:py-[14px] px-[24px] lg:px-[32px] rounded-lg">
                    Register
                  </button>
                </div>

                <div className="lg:col-span-2 flex items-center justify-center px-4 lg:px-8">
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
      {/* Our Client Section */}
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
      {/* Manage your entire community in a single system Section */}
      <section>
        <div className="bg-white py-16 container mx-auto text-center px-4">
          <h2 className="text-[36px] font-semibold leading-[44px] text-[#4D4D4D]">
            Manage your entire community <br></br>in a single system
          </h2>
          <p className="mt-4 text-[16px] font-normal leading-[24px] text-[#717171]">
            Who is Nextcent suitable for?
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-12">
            <div className="flex flex-col items-center text-center w-[299px] h-[260px] p-[24px] gap-[8px] rounded-tl-[8px] shadow-[0px_2px_4px_0px_#ABBED133] opacity-100">
              <img
                src={ServiceImage1}
                alt="Membership Organizations"
                className="w-[65px] h-[56px]"
              />
              <h3 className="text-[28px] font-bold leading-[36px] text-[#4D4D4D]">
                Membership <br></br>Organisations
              </h3>
              <p className="text-[14px] font-normal leading-[20px] text-[#717171]">
                Our membership management software provides full automation of
                membership renewals and payments
              </p>
            </div>

            <div className="flex flex-col items-center text-center w-[299px] h-[260px] p-[24px] gap-[8px] rounded-tl-[8px] shadow-[0px_2px_4px_0px_#ABBED133] opacity-100">
              <img
                src={ServiceImage2}
                alt="Another Service"
                className="w-[65px] h-[56px]"
              />
              <h3 className="text-[28px] font-bold leading-[36px] text-[#4D4D4D]">
                National <br></br> Associations
              </h3>
              <p className="text-[14px] font-normal leading-[20px] text-[#717171]">
                Our membership management software provides full automation of
                membership renewals and payments
              </p>
            </div>

            <div className="flex flex-col items-center text-center w-[299px] h-[260px] p-[24px] gap-[8px] rounded-tl-[8px] shadow-[0px_2px_4px_0px_#ABBED133] opacity-100">
              <img
                src={ServiceImage3}
                alt="Additional Service"
                className="w-[65px] h-[56px]"
              />
              <h3 className="text-[28px] font-bold leading-[36px] text-[#4D4D4D]">
                Clubs And <br></br> Groups
              </h3>
              <p className="text-[14px] font-normal leading-[20px] text-[#717171]">
                Our membership management software provides full automation of
                membership renewals and payments
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* The unseen of spending three years at Pixelgrade Section */}
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
            <p className="mt-4 text-[14px] font-normal leading-[20px] text-[#717171] text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
              amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
              Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
              tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
              Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
              elementum pulvinar odio.
            </p>

            <button className="mt-8 bg-[#4CAF4F] text-white text-[16px] font-normal leading-[24px] py-[14px] px-[32px] rounded-lg">
              Learn More
            </button>
          </div>
        </div>
      </section>
      {/* Helping a local business Section */}
      <section>
        <div className=" bg-[#F5F7FA] py-16 ">
          <div className=" bg-[#F5F7FA] py-16 container mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 px-4">
            <div className="lg:w-1/2 w-full">
              <h2 className="text-[36px] font-semibold leading-[44px] text-left text-[#4D4D4D]">
                Helping a local <br />
                <span className="text-[#4CAF4F]">business reinvent itself</span>
              </h2>
              <p className="mt-4 text-[16px] font-normal leading-[24px] text-left text-[#18191F]">
                We reached here with our hard work and dedication.
              </p>
            </div>

            <div className="lg:w-1/2 w-full  grid grid-cols-1 lg:grid-cols-2 gap-8">
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
      {/* How to design your site footer like we did Section */}
      <section>
        <div className=" bg-white py-16 container mx-auto flex flex-col items-center justify-center  lg:flex-row items-start gap-8 px-4">
          <div className="lg:w-[40%] w-full">
            <img
              src={mobile}
              alt="Unseen Pixelgrade"
              className="w-full h-auto"
            />
          </div>

          <div className="lg:w-[60%] w-full">
            <h2 className="text-[36px] font-semibold leading-[44px] text-[#4D4D4D] text-left">
              How to design your site footer like <br></br> we did
            </h2>
            <p className="mt-4 text-[14px] font-normal leading-[20px] text-[#717171] text-left">
              Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
              augue nec tincidunt molestie, massa nunc varius arcu, at
              scelerisque elit erat a magna. Donec quis erat at libero ultrices
              mollis. In hac habitasse platea dictumst. Vivamus vehicula leo
              dui, at porta nisi facilisis finibus. In euismod augue vitae nisi
              ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla
              commodo faucibus efficitur quis massa. Praesent felis est, finibus
              et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus
              ipsum id gravida.
            </p>

            <button className="mt-8 bg-[#4CAF4F] text-white text-[16px] font-normal leading-[24px] py-[14px] px-[32px] rounded-lg">
              Learn More
            </button>
          </div>
        </div>
      </section>
      {/* Tim Smith Section */}
      <section className=" bg-[#F5F7FA] py-16 ">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 px-4">
          <div className="lg:w-[30%] w-full py-12 flex flex-col">
            <img
              src={Image7}
              alt="Customer "
              className="w-[326px] h-[326px]  rounded-md"
            />
          </div>

          <div className="lg:w-[70%] w-full w-full">
            <p className="text-[16px] font-medium leading-[24px] text-left text-[#717171] mb-4">
              Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
              lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
              enim metus. Vivamus sed libero ornare, tristique quam in, gravida
              enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet
              elit at ligula molestie, nec molestie mi blandit. Suspendisse
              cursus tellus sed augue ultrices, quis tristique nulla sodales.
              Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse
              potenti. Quisque malesuada enim sapien, vitae placerat ante
              feugiat eget. Quisque vulputate odio neque, eget efficitur libero
              condimentum id. Curabitur id nibh id sem dignissim finibus ac sit
              amet magna.
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
              <button className="flex items-center gap-4 text-[#4CAF4F] font-semibold text-[20px] leading-[28px]">
                Meet all customers
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
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Caring is the new marketing Section */}
      <section className="py-16 bg-white">
        <div className="container  mx-auto px-4">
          <h2 className="text-[36px] font-semibold leading-[44px] text-center text-[#4D4D4D] mb-4">
            Caring is the new marketing
          </h2>

          <p className="text-[16px] font-normal leading-[24px] text-center text-[#717171] mb-12">
            The Nexcent blog is the best place to read about the latest
            membership insights,<br></br> trends, and more. See who's joining
            the community, read about how our community <br></br>is increasing
            their membership income, and lots more.
          </p>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-14 flex-wrap">
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
                  <button className="text-[20px] flex items-center justify-center gap-4 font-semibold leading-[28px] text-[#4CAF4F]">
                    Read more
                    <svg
                      width="25"
                      height="25"
                      viewBox="0 0 25 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.5 16.399L19.7929 13.1062C20.1834 12.7156 20.1834 12.0825 19.7929 11.6919L16.5 8.39905M19.5 12.399L5.5 12.399"
                        stroke="#4CAF4F"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      />
                    </svg>
                  </button>
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
                  <button className="text-[20px] flex items-center justify-center gap-4 font-semibold leading-[28px] text-[#4CAF4F]">
                    Read more
                    <svg
                      width="25"
                      height="25"
                      viewBox="0 0 25 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.5 16.399L19.7929 13.1062C20.1834 12.7156 20.1834 12.0825 19.7929 11.6919L16.5 8.39905M19.5 12.399L5.5 12.399"
                        stroke="#4CAF4F"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      />
                    </svg>
                  </button>
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
                  <button className="text-[20px] flex items-center justify-center gap-4 font-semibold leading-[28px] text-[#4CAF4F]">
                    Read more
                    <svg
                      width="25"
                      height="25"
                      viewBox="0 0 25 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.5 16.399L19.7929 13.1062C20.1834 12.7156 20.1834 12.0825 19.7929 11.6919L16.5 8.39905M19.5 12.399L5.5 12.399"
                        stroke="#4CAF4F"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Pellentesque suscipit fringilla libero eu. */}
      <section className="flex flex-col items-center justify-center py-16 bg-[#F5F7FA]">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-center text-[#263238]">
          Pellentesque suscipit <br /> fringilla libero eu.
        </h1>

        <button className="mt-8  bg-[#4CAF4F] text-white flex items-center justify-center gap-4 font-inter font-medium text-[16px] leading-[24px] text-center rounded-[4px] py-[14px] px-[32px] gap-[8px]">
          Get a Demo
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
        </button>
      </section>
      <Footer />
    </div>
  );
};

export default LandingPage;
