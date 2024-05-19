"use client";
import React, { useState } from "react";
import { Big_Shoulders_Text, Iceberg, Iceland } from "next/font/google";
import { rewards, beginning } from "../constants/constants.js";
import Image from 'next/image'


const big_shoulders = Big_Shoulders_Text({ subsets: ["latin"] });
const iceberg = Iceberg({ weight: "400", subsets: ["latin"] });
const iceland = Iceland({
  weight: "400",
  subsets: ["latin"],
});

const page = () => {

  return (
    <>
      <Image src="/assets/whale.png" width={983} height={535} className="h-[77vh] w-[64vw]" alt="" />
      <p
        className={`absolute top-0  mt-[10px] text-white max-w-[623px] text-[18px] uppercase text-center  ${iceland.className}`}
      >
        swimming through a vast network of interconnected devices and servers,
        spreading joy and whimsy to users across the globe
      </p>
      <p
        className={`absolute top-[30px]  mt-[29px] text-[#B2B7BA] max-w-[623px] text-[16px] uppercase text-center  ${iceland.className}`}
      >
        Artwork generated with midjourney
      </p>

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
          bottom: "0px",
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
          bottom: "0px",
        }}
      ></div>
    </>
  );
};

export default page;
