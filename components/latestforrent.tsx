import type { NextPage } from "next";
import ProprertyCard from "./proprerty-card";

const Latestforrent: NextPage = () => {
  return (
    <div className="self-stretch flex flex-col items-center justify-start gap-[40px] max-w-[95%px] text-center text-21xl text-primary-800 font-body-large-400 md:pl-[60px] md:pr-[60px] md:box-border">
      <div className="w-[688px] flex flex-col items-center justify-start gap-[24px] max-w-[95%px] lg:max-w-[95%] md:self-stretch md:w-auto">
        <div className="self-stretch relative leading-[48px] font-semibold">
          Latest Properties of Rent
        </div>
        <div className="self-stretch relative text-xl leading-[28px] text-gray-400">
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia curae; Proin sodales ultrices nulla blandit volutpat.
        </div>
      </div>
      <div className="self-stretch flex flex-row flex-wrap items-center justify-center py-0 px-2.5 gap-[32px] text-left text-[14.51px] text-gray-700">
        <ProprertyCard carDimensions="/property-image@2x.png" />
        <ProprertyCard carDimensions="/property-image1@2x.png" />
        <ProprertyCard carDimensions="/property-image2@2x.png" />
        <ProprertyCard carDimensions="/property-image3@2x.png" />
      </div>
    </div>
  );
};

export default Latestforrent;
