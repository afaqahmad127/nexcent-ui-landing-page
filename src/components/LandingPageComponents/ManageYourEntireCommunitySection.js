import React from "react";
import ServiceImage1 from "../../assets/images/Icon.png";
import ServiceImage2 from "../../assets/images/Icon (1).png";
import ServiceImage3 from "../../assets/images/Icon (2).png";

const ManageYourEntireCommunitySection = () => {
  return (
    <section>
      <div className="bg-white py-16 container mx-auto text-center px-4">
        <h2 className="text-[36px] font-semibold leading-[44px] text-[#4D4D4D]">
          Manage your entire community <br></br>in a single system
        </h2>
        <p className="mt-4 text-[16px] font-normal leading-[24px] text-[#717171]">
          Who is Nextcent suitable for?
        </p>

        <div className="mt-12 flex flex-col sm:flex-row items-center flex-wrap justify-center gap-12">
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
  );
};

export default ManageYourEntireCommunitySection;
