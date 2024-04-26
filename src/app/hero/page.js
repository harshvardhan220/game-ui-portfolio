"use client";
import React, { useState } from "react";
import "../globals.css";
import { Big_Shoulders_Text, Iceberg, Iceland } from "next/font/google";
import { rewards, beginning } from "../constants/constants.js";
import { useRouter } from "next/navigation";
import Header from "../_components/Header.js";
import LeftSection from "../_components/LeftSection.js";
import RightSection from "../_components/RightSection.js";

const big_shoulders = Big_Shoulders_Text({ subsets: ["latin"] });
const iceberg = Iceberg({ weight: "400", subsets: ["latin"] });
const iceland = Iceland({
  weight: "400",
  subsets: ["latin"],
});

const Hero = () => {
  const [selected, setSelected] = useState(0);
  const [coinsAwarded, setCoinsAwarded] = useState(1425);
  const router = useRouter();

  return (
    <>
      <Header />

      {/* Wrapper  */}
      <div className="flex pl-[75px] pr-[78px] tracking-[0.075em]">
        {/* Left Section  */}
        <LeftSection />
        {/* Middle Section  */}
        <div className="middle-section flex justify-center relative w-auto h-auto mr-[16px] ">
          <img src="assets/whale.png" className="h-[77vh] w-[64vw]" alt="" />
          <p
            className={`absolute top-0  mt-[10px] text-white w-[623px] text-[18px] uppercase text-center  ${iceland.className}`}
          >
            swimming through a vast network of interconnected devices and
            servers, spreading joy and whimsy to users across the globe
          </p>
          <p
            className={`absolute top-[30px]  mt-[29px] text-[#B2B7BA] w-[623px] text-[16px] uppercase text-center  ${iceland.className}`}
          >
            Artwork generated with midjourney
          </p>
          <div className="absolute bottom-4 flex gap-[60px]  left-auto  w-[815px]  h-[65px]">
            {beginning?.map((el, id) => {
              return (
                <div
                  onClick={(e) => {
                    setSelected(id);
                    // router.push(`/${el?.title.toLowerCase()}`);
                  }}
                  key={id}
                  className="cursor-pointer w-[151px] h-auto border flex flex-col  border-l-[#E84A4A] border-b-0 border-r-0 border-t-0 border-l-2"
                >
                  <p
                    className={`subtract text-white relative z-20 uppercase ml-[8px] ${big_shoulders.className}`}
                  >
                    {el?.title ?? "Beginning"}
                  </p>
                  <img
                    className={`absolute top-0 ${
                      id === selected ? "animate-pulse" : ""
                    }`}
                    src={
                      id === selected
                        ? "assets/subtract.png"
                        : "assets/subtract-black.png"
                    }
                    alt=""
                  />
                  <p
                    className={`text-white ml-[8px] ${iceland.className} text-[11px]`}
                  >
                    Suscipit est consequatur nemo voluptatem est labore saepe.
                  </p>
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
              bottom: "58px",
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
              bottom: "58px",
            }}
          ></div>
        </div>
        {/* Right Section  */}
        <RightSection />
      </div>
    </>
  );
};

export default Hero;
