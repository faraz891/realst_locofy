import type { NextPage } from "next";
import { Button } from "@mui/material";

const ContactUs: NextPage = () => {
  return (
    <div className="self-stretch bg-primary-50 flex flex-row flex-wrap items-start justify-center py-[86px] px-[5px] text-center text-21xl text-primary-800 font-body-large-400">
      <div className="flex-1 flex flex-col items-center justify-start py-0 px-2.5 box-border gap-[40px] max-w-[900px]">
        <div className="w-[688px] flex flex-col items-center justify-start gap-[24px] max-w-[95%px] lg:max-w-[95%] md:self-stretch md:w-auto">
          <div className="self-stretch relative leading-[48px] font-semibold">
            Contact us
          </div>
          <div className="self-stretch relative text-xl leading-[28px] text-gray-400">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Proin sodales ultrices nulla blandit
            volutpat.
          </div>
        </div>
        <div className="self-stretch rounded-xl bg-white shadow-[0px_0px_24px_rgba(0,_0,_0,_0.03)] flex flex-col items-center justify-start py-7 px-[30px] gap-[17px] text-left text-5xl text-darkslategray font-poppins">
          <div className="self-stretch flex flex-col items-center justify-start gap-[6px]">
            <h3 className="m-0 self-stretch relative text-inherit leading-[36px] font-bold font-inherit">
              Enquiry Form
            </h3>
            <div className="self-stretch relative text-lg leading-[30px] font-components-input-text text-slategray">
              Are you looking for details about a certain property? Ask us a
              question using the form below.
            </div>
          </div>
          <div className="self-stretch flex flex-col items-center justify-start gap-[10px] text-base text-darkgray font-components-input-text">
            <div className="self-stretch flex flex-row items-start justify-center gap-[10px] md:flex-col md:gap-[10px] md:items-start md:justify-center">
              <div className="self-stretch flex-1 rounded flex flex-col items-start justify-start py-4 px-3 border-[1px] border-solid border-gray1 md:flex-[unset] md:self-stretch">
                <div className="relative tracking-[0.15px] leading-[24px]">
                  First name
                </div>
              </div>
              <div className="self-stretch flex-1 rounded flex flex-col items-start justify-center py-4 px-3 border-[1px] border-solid border-gray1 md:flex-[unset] md:self-stretch">
                <div className="relative tracking-[0.15px] leading-[24px]">
                  Last name
                </div>
              </div>
            </div>
            <div className="self-stretch rounded flex flex-col items-start justify-start py-4 px-3 border-[1px] border-solid border-gray1">
              <div className="relative tracking-[0.15px] leading-[24px]">
                Email id
              </div>
            </div>
            <div className="self-stretch rounded box-border h-[105px] flex flex-col items-start justify-start p-3 border-[1px] border-solid border-gray1">
              <div className="relative tracking-[0.15px] leading-[24px]">
                Comments or questions
              </div>
            </div>
            <Button
              sx={{ width: 222 }}
              color="primary"
              size="medium"
              variant="contained"
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
