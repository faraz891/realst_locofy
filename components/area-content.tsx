import type { NextPage } from "next";
import SellYourHomeContainer from "./sell-your-home-container";

const AreaContent: NextPage = () => {
  return (
    <div className="self-stretch flex flex-col items-center justify-start pt-[75px] px-0 pb-0 box-border gap-[54px] max-w-[95%px] text-center text-21xl text-primary-800 font-body-large-400">
      <div className="self-stretch flex flex-col items-center justify-start py-0 px-[30px] box-border gap-[24px] max-w-[95%px]">
        <div className="self-stretch relative leading-[48px] font-semibold">
          Properties by Area
        </div>
        <div className="self-stretch relative text-xl leading-[28px] text-gray-400">
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia curae; Proin sodales ultrices nulla blandit volutpat.
        </div>
      </div>
      <div className="self-stretch flex flex-row flex-wrap items-center justify-center gap-[86px] text-left text-base text-gray-700">
        <SellYourHomeContainer
          imageId="/icon.svg"
          actionText="Sell your home"
        />
        <SellYourHomeContainer
          imageId="/icon1.svg"
          actionText="Rent your home"
          propWidth="312px"
          propMargin="0"
        />
        <SellYourHomeContainer
          imageId="/icon2.svg"
          actionText="Buy a home"
          propWidth="unset"
          propMargin="unset"
        />
        <SellYourHomeContainer
          imageId="/icon3.svg"
          actionText="Free marketing"
          propWidth="312px"
          propMargin="unset"
        />
      </div>
    </div>
  );
};

export default AreaContent;
