import type { NextPage } from "next";
import TopMenuContainer from "./top-menu-container";

const Header: NextPage = () => {
  return (
    <header
      className="self-stretch bg-white h-[98px] flex flex-row items-center justify-center py-[22px] px-20 box-border sticky w-full top-[0] [background:white] z-[2] lg:pl-10 lg:pr-10 lg:box-border md:pl-6 md:pr-6 md:box-border"
      id="header"
    >
      <TopMenuContainer />
    </header>
  );
};

export default Header;
