import type { NextPage } from "next";
import { Button } from "@mui/material";
import LatestProperties from "./latest-properties";

const LatestPropertiesOfRent: NextPage = () => {
  return (
    <div className="self-stretch flex flex-col items-center justify-start py-[86px] px-0 gap-[39px] text-center text-21xl text-primary-800 font-body-large-400">
      <div className="self-stretch flex flex-col items-center justify-start gap-[40px] max-w-[95%px]">
        <div className="w-[688px] flex flex-col items-center justify-start gap-[24px] max-w-[95%px] lg:max-w-[95%] md:self-stretch md:w-auto">
          <div className="self-stretch relative leading-[48px] font-semibold">
            Latest Properties of Rent
          </div>
          <div className="self-stretch relative text-xl leading-[28px] text-gray-400">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Proin sodales ultrices nulla blandit
            volutpat.
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[40px] text-left text-base text-white">
          <LatestProperties />
          <LatestProperties propBackgroundImage="url('/card-21@3x.png')" />
          <LatestProperties propBackgroundImage="url('/card-31@3x.png')" />
          <LatestProperties propBackgroundImage="url('/card-41@3x.png')" />
        </div>
      </div>
      <Button color="primary" size="medium" variant="contained">
        Load more listing
      </Button>
    </div>
  );
};

export default LatestPropertiesOfRent;
