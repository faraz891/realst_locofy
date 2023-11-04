import type { NextPage } from "next";
import LinkCard from "./link-card";

const AreaCards: NextPage = () => {
  return (
    <div className="self-stretch flex-1 flex flex-row flex-wrap items-start justify-center py-0 px-2.5 box-border max-w-[95%px] text-left text-5xl text-white font-body-large-400">
      <div className="self-stretch flex-1 flex flex-col items-center justify-start gap-[24px] max-w-[1300px]">
        <div className="self-stretch flex flex-row items-start justify-center gap-[26px] lg:flex-row md:flex-col">
          <LinkCard linkTarget="_blank" />
          <LinkCard propBackgroundImage="url('/card-2@3x.png')" />
          <input
            className="[border:none] font-semibold font-body-large-400 text-5xl bg-[transparent] flex-1 rounded-lg h-[241px] flex flex-row items-start justify-start bg-[url('/card-3@3x.png')] bg-cover bg-no-repeat bg-[top] md:flex-[unset] md:self-stretch"
            type="text"
          />
        </div>
        <div className="self-stretch flex flex-row items-start justify-center gap-[24px] lg:flex-row md:flex-col">
          <div className="flex-1 rounded-lg h-[241px] flex flex-row items-start justify-start p-2.5 box-border relative bg-[url('/card-4@3x.png')] bg-cover bg-no-repeat bg-[top] md:flex-[unset] md:self-stretch">
            <div className="my-0 mx-[!important] absolute top-[16px] left-[16px] flex flex-col items-start justify-start gap-[11px] z-[0]">
              <div className="relative leading-[32px] font-semibold">
                Arlington
              </div>
              <div className="relative text-base leading-[24px] text-center">
                25 listings
              </div>
            </div>
          </div>
          <div className="flex-1 rounded-lg h-[241px] flex flex-row items-start justify-start p-2.5 box-border relative bg-[url('/card-5@3x.png')] bg-cover bg-no-repeat bg-[top] md:flex-[unset] md:self-stretch">
            <div className="my-0 mx-[!important] absolute top-[16px] left-[16px] flex flex-col items-start justify-start gap-[11px] z-[0]">
              <div className="relative leading-[32px] font-semibold">
                Centerville
              </div>
              <div className="relative text-base leading-[24px] text-center">
                25 listings
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AreaCards;
