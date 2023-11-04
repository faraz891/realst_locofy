import type { NextPage } from "next";
import AreaContent from "./area-content";

const PropertiesByArea: NextPage = () => {
  return (
    <div className="self-stretch bg-primary-50 flex flex-col items-center justify-start py-[70px] px-0 text-center text-21xl text-primary-800 font-body-large-400">
      <AreaContent />
    </div>
  );
};

export default PropertiesByArea;
