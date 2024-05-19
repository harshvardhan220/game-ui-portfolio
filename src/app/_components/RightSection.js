"use client";
import React, { useState } from "react";
import "../globals.css";
import { Big_Shoulders_Text, Iceberg, Iceland } from "next/font/google";
import { rewards, beginning } from "../constants/constants.js";
import { useRouter } from "next/navigation";
import Image from 'next/image'

const big_shoulders = Big_Shoulders_Text({ subsets: ["latin"] });
const iceberg = Iceberg({ weight: "400", subsets: ["latin"] });
const iceland = Iceland({
  weight: "400",
  subsets: ["latin"],
});

const RightSection = () => {
  return (
    <>
      <div className="w-[196px] relative h-auto ">
        <div className="absolute h-[389px] w-[2px] left-[-2px] bg-[#E84A4A] z-20"></div>
        <div className="flex]">
          <div className="flex items-center absolute">
            <Image src="/assets/subtract.png" className=" " width={230} height={100} alt="" />
            <p
              className={`text-[#FFFFFF] text-[16px] pl-[8px] absolute tracking-[0.075em] font-bold uppercase ${big_shoulders.className}`}
            >
              Active Quest
            </p>
          </div>
          <div className="h-[23px] absolute top-[23px] w-[196px] left-[-2px]  bg-[#270C0F] flex pl-[8px] justify-between items-center">
            <span
              className={` text-white opacity-50 uppercase text-[14px]  ${iceland.className}`}
            >
              the react skill-up line
            </span>
          </div>
          <div className="absolute top-[68px]">
            <p
              className={`text-white uppercase text-[14px] pl-[8px] ${iceland.className}`}
            >
              quest name
            </p>
            <p
              className={`text-[#E84A4A] pl-[8px] uppercase text-[18px] tracking-[0.075em] font-bold ${big_shoulders.className}`}
            >
              Portfolio website
            </p>
            <p
              className={`text-[#FFFFFF] pl-[8px] mt-[23px] uppercase text-[14px] tracking-[0.075em] font-bold ${iceland.className}`}
            >
              GOAL
            </p>
            <p
              className={`text-[#7A7A7A] pl-[8px] uppercase text-[14px] tracking-[0.075em] font-bold ${iceland.className} h-auto`}
            >
              Build this website. Implement a full react website with multiple
              routers, UI elements and tricky styling. Make it all work great!
            </p>
            <p
              className={`text-[#FFFFFF] pl-[8px] mt-[23px] uppercase text-[14px] tracking-[0.075em] font-bold ${iceland.className}`}
            >
              Rewards
            </p>
            <div className="flex flex-wrap gap-[8px] mt-[12px] ml-[8px]">
              {rewards?.map((el, index) => {
                return (
                  <div key={index} className="text-center cursor-pointer">
                    <Image
                      className=" animate-pulse"
                      width={40}
                      height={40}
                      src={"/" + el?.src}
                      alt=""
                    />
                    <span
                      className={`text-[#7A7A7A] text-[16px] ${iceland.className}`}
                    >
                      {el?.points ?? 0}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RightSection;
