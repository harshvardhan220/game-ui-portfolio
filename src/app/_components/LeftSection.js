"use client";
import React, { useState } from "react";
import "../globals.css";
import { Big_Shoulders_Text, Iceberg, Iceland } from "next/font/google";
import { useRouter } from "next/navigation";
import Image from "next/image";

const big_shoulders = Big_Shoulders_Text({ subsets: ["latin"] });
const iceberg = Iceberg({ weight: "400", subsets: ["latin"] });
const iceland = Iceland({
  weight: "400",
  subsets: ["latin"],
});

const LeftSection = () => {
  return (
    <>
      <div className="w-[194px] mr-[16px] relative h-auto  mb-[20px]  ">
        <div
          className="w-[194px] h-[175px] flex justify-center items-center relative border mb-[20px] border-[#212121] 
          "
        >
          <Image
            width={194}
            height={175}
            src="/assets/profile-img.png"
            alt="/"
          />

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
              bottom: "-2px",
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
              bottom: "-2px",
            }}
          ></div>
        </div>
        <div className="mb-[22px] uppercase">
          <div>
            <p className={`text-white text-[14px] ${iceberg.className}`}>
              Name
            </p>
          </div>
          <div>
            <p className={`text-[#E84A4A] text-[18px] ${iceberg.className}`}>
              Harshvardhan Shete
            </p>
          </div>
        </div>
        <div className="mb-[22px] uppercase">
          <div>
            <p className={`text-white text-[14px] ${iceberg.className}`}>
              OCCUPATION
            </p>
          </div>
          <div>
            <p className={`text-[#E84A4A] text-[18px] ${iceberg.className}`}>
              web developer
            </p>
          </div>
        </div>
        <div className="mb-[22px] uppercase">
          <div>
            <p className={`text-white text-[14px] ${iceberg.className}`}>
              corporation
            </p>
          </div>
          <div>
            <p className={`text-[#E84A4A] text-[18px] ${iceberg.className}`}>
              Legacy
            </p>
          </div>
        </div>
        <div className="mb-[22px] uppercase">
          <div>
            <p className={`text-white text-[14px] ${iceberg.className}`}>
              availability
            </p>
          </div>
          <div>
            <p className={`text-[#E84A4A] text-[18px] ${iceberg.className}`}>
              Open to hire
            </p>
          </div>
        </div>
        <div className="mb-[22px] uppercase">
          <div>
            <p className={`text-white text-[14px] ${iceberg.className}`}>
              Social
            </p>
          </div>
          <div>
            <p className={`text-[#E84A4A] text-[18px] ${iceberg.className}`}>
              Open connection
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftSection;
