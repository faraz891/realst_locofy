import type { NextPage } from "next";
import AreaCards from "./area-cards";

const PropertiesByAreaImagesSection: NextPage = () => {
  return (
    <div className="self-stretch h-[787px] flex flex-col items-center justify-start py-[53px] px-[50px] box-border gap-[45px] text-center text-21xl text-primary-800 font-body-large-400">
      <div className="self-stretch flex flex-col items-center justify-start py-0 px-[30px] gap-[24px] md:self-stretch md:w-auto">
        <h1 className="m-0 self-stretch relative text-inherit leading-[48px] font-semibold font-inherit">
          Properties by Area
        </h1>
        <div className="self-stretch relative text-xl leading-[28px] text-gray-400">
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia curae; Proin sodales ultrices nulla blandit volutpat.
        </div>
      </div>
      <AreaCards />
    </div>
  );
};

export default PropertiesByAreaImagesSection;
