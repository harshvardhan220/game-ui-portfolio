"use client";
import React from "react";
import image from "../../../../public/assets/whale.png";
import { Big_Shoulders_Text, Iceberg, Iceland } from "next/font/google";
import { logs, olderLogs } from "../../constants/constants";

const iceland = Iceland({ weight: "400", subsets: ["latin"] });
const page = () => {
  return (
    <div
      //   style={{
      //     background:
      //       "linear-gradient(90deg, rgba(3,3,3,1) 4%, rgba(93,14,14,1) 49%, rgba(0,0,0,1) 100%)"
      //   }}
      className="h-[77vh] w-[63vw] text-center "
    >
      {/* <img src="https://img.pikbest.com/origin/10/13/04/38RpIkbEsTCJN.jpg!w700wp" className="h-[77vh] w-[64vw]" alt="assets/whale.png" /> */}
      {/* <img src="/assets/whale.png" className="h-[77vh] w-[64vw]" alt="assets/whale.png" /> */}

      <h1
        className={`text-white text-[18px] uppercase pt-[9px] pb-[9px] ${iceland.className}`}
      >
        data log dump initialized.
      </h1>
      <div className="bg-[#E84A4A] flex justify-between items-center max-w-[953px] ml-auto mr-auto">
        <h1
          className={`pl-2 text-[18px] text-black font-black  ${iceland.className}`}
        >
          LOG ENTRY: PROJECT DEVELOPMENT UPDATE
        </h1>
        <h1
          className={`pl-2 text-[18px] text-black font-black  ${iceland.className}`}
        >
          DATE: 2007.04.25
        </h1>
      </div>
      <div className="text-left  max-w-[953px] ml-auto mr-auto">
        <h1 className={`text-white uppercase ${iceland.className}`}>
          LOCATION:{" "}
          <span
            className={`text-white uppercase  opacity-50 text-[16px] ${iceland.className}`}
          >
            Research Facility, Planet X-17
          </span>{" "}
        </h1>
        <h1 className={`text-white uppercase ${iceland.className}`}>
          Project Status:{" "}
          <span
            className={`text uppercase -white opacity-50 text-[16px] ${iceland.className}`}
          >
            In Development
          </span>{" "}
        </h1>
      </div>
      {/* 4 Cards  */}
      <div className="flex flex-wrap gap-[15px] ml-[61px] mt-[10px] ">
        {logs?.map((el, i) => {
          return (
            <div
              key={i}
              className="border-dashed px-[18px] py-[15px] border w-[469px] tablet:w-[269px] tabletToDesktop:w-[350px] text-left"
            >
              <h1
                className={`text-[18px] uppercase text-[#E84A4A] ${iceland.className}`}
              >
                {el?.title ?? "Project update"}
              </h1>
              <p
                className={` text-[14px] text-white opacity-60 uppercase ${iceland.className}`}
              >
                {el?.description ??
                  "The development team has been working tirelessly on the latest iteration of the project. Significant progress has been made in the areas of neural interface integration, machine learning algorithms, and quantum computing."}
              </p>
            </div>
          );
        })}
      </div>
      <div className="text-left ml-[61px] ">
        <h1
          className={`${iceland.className} uppercase ml-[9px] mt-[53px] text-white`}
        >
          older logs:
        </h1>
      </div>
      <div className="mb-[127px] flex flex-col gap-5 text-left  ">
        {olderLogs?.map((el, i) => {
          return (
            <div className=" w-full pr-[5px] bg-black border  border-[#E84A4A] flex justify-between items-center max-w-[953px] ml-auto mr-auto">
              <h1
                className={`pl-2  text-[18px] text-[#E84A4A] uppercase font-black  ${iceland.className}`}
              >
                {el?.title ?? "LOG ENTRY: PROJECT DEVELOPMENT UPDATE"}
              </h1>
              <h1
                className={`pl-2 text-[18px] text-[#E84A4A] font-black  ${iceland.className}`}
              >
                {el?.date ?? "DATE: 2007.04.25"}
              </h1>
            </div>
          );
        })}
      </div>

      {/* Corner Borders  */}
      <div
        style={{
          position: "absolute",
          height: "20px",
          width: "20px",
          zIndex: "1",
          borderLeft: "3px solid #E8290B",
          borderTop: "3px solid #E84A4A",
          left: "-2px",
          top: "-2px",
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          height: "20px",
          width: "20px",
          zIndex: "1",
          borderLeft: "3px solid #E8290B",
          borderTop: "3px solid #E84A4A",
          right: "-2px",
          transform: "rotate(90deg)",
          top: "-2px",
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          height: "20px",
          width: "20px",
          zIndex: "1",
          borderLeft: "3px solid #E8290B",
          borderTop: "3px solid #E84A4A",
          left: "-2px",
          transform: "rotate(270deg)",
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          height: "20px",
          width: "20px",
          zIndex: "1",
          borderLeft: "3px solid #E8290B",
          borderTop: "3px solid #E84A4A",
          right: "-2px",
          transform: "rotate(180deg)",
        }}
      ></div>
    </div>
  );
};

export default page;
