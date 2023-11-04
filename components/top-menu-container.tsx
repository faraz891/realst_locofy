import type { NextPage } from "next";

const TopMenuContainer: NextPage = () => {
  return (
    <header className="flex-1 flex flex-row items-center justify-between text-center text-5xl text-red font-body-large-400 lg:flex">
      <div className="flex flex-row items-center justify-center gap-[8px]">
        <img className="relative w-11 h-11" alt="" src="/houseline.svg" />
        <div className="flex flex-col items-start justify-start">
          <h2 className="m-0 relative text-inherit leading-[24px] font-semibold font-inherit">
            REIS
          </h2>
          <div className="relative text-sm leading-[16px] font-medium">
            Real State
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-end gap-[36px] text-sm text-primary-900 sm:flex">
        <div className="flex flex-row items-start justify-start gap-[30px] lg:hidden">
          <div className="relative leading-[22px]">HOME</div>
          <div className="relative leading-[22px]">ABOUT US</div>
          <div className="relative leading-[22px]">OUR AGENTS</div>
          <div className="relative leading-[22px] font-semibold">
            PROPERTIES
          </div>
          <div className="relative leading-[22px]">GALLERY</div>
          <div className="relative leading-[22px]">BLOG</div>
          <div className="relative leading-[22px]">CONTACT US</div>
          <div className="relative leading-[22px]">SEARCH</div>
        </div>
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-center justify-center">
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0 md:flex"
            alt=""
            src="/notification.svg"
          />
        </button>
      </div>
    </header>
  );
};

export default TopMenuContainer;
