import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type SellYourHomeContainerType = {
  imageId?: string;
  actionText?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propMargin?: CSSProperties["margin"];
};

const SellYourHomeContainer: NextPage<SellYourHomeContainerType> = ({
  imageId,
  actionText,
  propWidth,
  propMargin,
}) => {
  const sellYourHomeStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const sellYourHome1Style: CSSProperties = useMemo(() => {
    return {
      margin: propMargin,
    };
  }, [propMargin]);

  return (
    <div
      className="rounded bg-white shadow-[0px_24px_68px_rgba(59,_77,_129,_0.08)] flex flex-col items-start justify-start p-[22px] box-border min-w-[300px] max-w-[340px] text-left text-base text-gray-700 font-body-large-400"
      style={sellYourHomeStyle}
    >
      <div className="flex flex-col items-start justify-start gap-[24px]">
        <img
          className="relative w-[78px] h-[78px] overflow-hidden shrink-0"
          alt=""
          src={imageId}
        />
        <div className="flex flex-col items-start justify-start gap-[24px]">
          <h3
            className="m-0 relative text-5xl leading-[32px] font-semibold font-inherit text-center"
            style={sellYourHome1Style}
          >
            {actionText}
          </h3>
          <div className="relative leading-[24px] text-gray-400 flex items-end w-[268px]">
            We do a free evaluation to be sure you want to start selling.
          </div>
          <div className="relative leading-[24px] text-red">Read more</div>
        </div>
      </div>
    </div>
  );
};

export default SellYourHomeContainer;
