import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type LinkCardType = {
  linkTarget?: string;

  /** Style props */
  propBackgroundImage?: CSSProperties["backgroundImage"];
};

const LinkCard: NextPage<LinkCardType> = ({
  linkTarget,
  propBackgroundImage,
}) => {
  const card1Style: CSSProperties = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
    };
  }, [propBackgroundImage]);

  return (
    <a
      className="[text-decoration:none] flex-1 rounded-lg h-[241px] flex flex-row items-start justify-start relative bg-[url('/card-1@3x.png')] bg-cover bg-no-repeat bg-[top] text-left text-5xl text-white font-body-large-400 md:flex-[unset] md:self-stretch"
      target={linkTarget}
      style={card1Style}
    >
      <div className="my-0 mx-[!important] absolute top-[16px] left-[16px] flex flex-col items-start justify-start gap-[11px] z-[0]">
        <div className="relative leading-[32px] font-semibold">Centerville</div>
        <div className="relative text-base leading-[24px] text-center">
          25 listings
        </div>
      </div>
    </a>
  );
};

export default LinkCard;
