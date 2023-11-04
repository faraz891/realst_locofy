import type { NextPage } from "next";
import "antd/dist/antd.min.css";
import { Dropdown, Menu, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";

const FormContainer: NextPage = () => {
  return (
    <nav className="m-0 flex-1 rounded-lg bg-white flex flex-row items-center justify-between py-8 px-[62px] box-border max-w-[1400px] text-left text-base text-primary-700 font-body-large-400 md:w-[300px] md:flex-col md:gap-[20px] md:items-start md:justify-start md:ml-[auto] md:mr-[auto]">
      <div className="w-[137px] flex flex-col items-start justify-start gap-[16px] text-center">
        <div className="relative leading-[24px] capitalize font-semibold">
          Locations
        </div>
        <div className="flex flex-row items-center justify-start gap-[4px] text-left text-gray-400">
          <div className="relative leading-[24px]">Select your city</div>
          <img
            className="relative w-2.5 h-1.5 overflow-hidden shrink-0"
            alt=""
            src="/vector.svg"
          />
        </div>
      </div>
      <div className="w-[177px] flex flex-col items-start justify-start gap-[16px]">
        <div className="relative leading-[24px] capitalize font-semibold flex items-end w-[150px]">
          Property Type
        </div>
        <Dropdown
          className="self-stretch"
          overlay={
            <Menu>
              {(
                [
                  { value: "Studio apartments" },
                  { value: "One-bedroom apartments" },
                  { value: "Two-bedroom apartments" },
                  { value: "Three-bedroom apartments" },
                  { value: "Four or more bedroom apartments/houses" },
                ] as any
              ).map((option: any, index: number) => (
                <Menu.Item key={index}>
                  <a onClick={(e) => e.preventDefault()}>
                    {option.value || ""}
                  </a>
                </Menu.Item>
              ))}
            </Menu>
          }
          trigger={["hover"]}
        >
          <a onClick={(e) => e.preventDefault()}>
            {`Select property type `}
            <DownOutlined />
          </a>
        </Dropdown>
      </div>
      <div className="w-[155px] flex flex-col items-start justify-start gap-[16px]">
        <div className="relative leading-[24px] capitalize font-semibold flex items-end w-[150px]">
          Rent Range
        </div>
        <Dropdown
          className="self-stretch"
          overlay={
            <Menu>
              {(
                [
                  { value: "$500-$2000" },
                  { value: "$2500-$10000" },
                  { value: "$10000+" },
                ] as any
              ).map((option: any, index: number) => (
                <Menu.Item key={index}>
                  <a onClick={(e) => e.preventDefault()}>
                    {option.value || ""}
                  </a>
                </Menu.Item>
              ))}
            </Menu>
          }
          trigger={["hover"]}
        >
          <a onClick={(e) => e.preventDefault()}>
            {`Select rent range `}
            <DownOutlined />
          </a>
        </Dropdown>
      </div>
      <Button
        size="middle"
        shape="default"
        style={{ width: "102px" }}
        type="primary"
      >
        Search
      </Button>
    </nav>
  );
};

export default FormContainer;
