import type { NextPage } from "next";
import { Button } from "@mui/material";
import FormContainer from "./form-container";

const HeroSection: NextPage = () => {
  return (
    <section className="self-stretch flex flex-col items-center justify-start py-[120px] px-[30px] bg-[url('/hero-section@3x.png')] bg-cover bg-no-repeat bg-[top] text-center text-33xl text-white font-body-regular-400">
      <div className="self-stretch flex flex-col items-center justify-center gap-[62px] max-w-[95%px]">
        <div className="self-stretch flex flex-col items-center justify-start gap-[24px] md:max-w-full">
          <h1 className="m-0 self-stretch relative text-inherit leading-[72px] font-semibold font-inherit">
            Find Your Dream Home
          </h1>
          <div className="self-stretch relative text-xl leading-[28px] font-body-large-400 text-primary-50">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Proin sodales ultrices nulla blandit
            volutpat.
          </div>
        </div>
        <form className="self-stretch flex flex-col items-center justify-start gap-[17px]">
          <div className="flex flex-row items-start justify-start gap-[10px]">
            <button
              className="cursor-pointer [border:none] py-3 px-6 bg-red rounded overflow-hidden flex flex-row items-start justify-start"
              autoFocus={true}
              disabled={false}
            >
              <div className="relative text-base leading-[24px] font-medium font-body-large-400 text-white text-center">
                Rent
              </div>
            </button>
            <Button color="primary" size="medium" variant="contained">
              Sale
            </Button>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-start justify-center">
            <FormContainer />
          </div>
        </form>
      </div>
    </section>
  );
};

export default HeroSection;
