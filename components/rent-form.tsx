import type { NextPage } from "next";
import { Button } from "@mui/material";
import Latestforrent from "./latestforrent";

const RentForm: NextPage = () => {
  return (
    <form className="self-stretch flex flex-col items-center justify-start py-[86px] px-0 gap-[39px]">
      <Latestforrent />
      <Button color="primary" size="medium" variant="contained">
        Load more listing
      </Button>
    </form>
  );
};

export default RentForm;
