"use client";
import React from "react";
import "../globals.css";
import { Big_Shoulders_Text, Iceberg, Iceland } from "next/font/google";

const big_shoulders = Big_Shoulders_Text({ subsets: ["latin"] });
const iceberg = Iceberg({ weight: "400", subsets: ["latin"] });
const iceland = Iceland({
  weight: "400",
  subsets: ["latin"],
});

const Hero = () => {
  return (
    <>
      <div className="background">
        <div className=""></div>
      </div>
      {/* Header */}
      <div className="flex  justify-between pt-[27px] pb-[34px] pl-[78px] pr-[78px] text-[#FFFFFF] w-full h-auto">
        <div className="flex justify-center   gap-[46px] ">
          <div className="flex tracking-[0.075em]">
            <p
              className={`text-[26px] text-[#7DFF68] ${big_shoulders.className} `}
            >
              48{" "}
              <span className="text-[#FFFFFF] text-[16px] opacity-80 ">
                LEVEL
              </span>
            </p>
          </div>
          <div className="flex">
            <div className=" flex justify-center items-center w-[33px] h-[33px] border border-[#FFFFFF]">
              <svg
                width="11"
                height="11"
                viewBox="0 0 11 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.147 10.595V6.448H0V4.147H4.147V0H6.461V4.147H10.608V6.448H6.461V10.595H4.147Z"
                  fill="#E84A4A"
                />
              </svg>
            </div>
            <div
              className={`flex justify-center items-baseline pl-[13px] gap-[6px] tracking-[0.075em] ${big_shoulders.className}`}
            >
              <p className="text-[26px] text-[#7DFF68]">1,425 </p>
              <span className="text-[16px] opacity-80 ">COINS AWARDED</span>
            </div>
          </div>
        </div>
        <div>
          <li
            className={`flex items-baseline gap-[27px] list-none ${big_shoulders.className}`}
          >
            <ul
              className={`text-[12px]  tracking-[0.075em] ${iceberg.className}`}
            >
              CREDITS
            </ul>
            <ul
              className={`text-[14px] text-[#7A7A7A] tracking-[0.075em]  ${iceberg.className}`}
            >
              SERVER TIME :{" "}
              <span
                className={`text-[#FFFFFF] tracking-[0.075em] ${iceberg.className}`}
              >
                &nbsp;8:42
              </span>
            </ul>
            <ul
              className={`text-[14px] text-[#7A7A7A] tracking-[0.075em]  ${iceberg.className}`}
            >
              LOCAL TIME :
              <span
                className={`text-[#FFFFFF] tracking-[0.075em] ${iceberg.className}`}
              >
                &nbsp;15:42
              </span>
            </ul>
          </li>
        </div>
      </div>

      {/* Wrapper  */}
      <div className="flex  pl-[78px] pr-[78px] tracking-[0.075em]">
        {/* Left Section  */}
        <div className="w-[194px] mr-[16px] relative h-auto  mb-[20px]  ">
          <div
            className="w-[194px] h-[175px] flex justify-center items-center relative border mb-[20px] border-[#212121] 
          "
          >
            <img src="/assets/profile-img.png" alt="" />

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
        {/* Middle Section  */}
        <div className="middle-section flex justify-center relative w-auto h-auto mr-[16px] ">
          <img
            src="/assets/whale.png"
            className="h-[85vh] w-[62vw]"
            alt=""
          />
          <p className={`absolute top-0  mt-[10px] text-white w-[623px] text-[18px] uppercase text-center  ${iceland.className}`}>swimming through a vast network of interconnected devices and servers, spreading joy and whimsy to users across the globe</p>
          <p className={`absolute top-[30px]  mt-[29px] text-[#B2B7BA] w-[623px] text-[16px] uppercase text-center  ${iceland.className}`}>Artwork generated with midjourney</p>
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
        {/* Right Section  */}
        <div className="w-[196px] h-auto border border-[#FFFFFF]">
          <div className="text-white">Shete</div>
          <div className="text-white">Shete</div>
          <div className="text-white">Shete</div>
          <div className="text-white">Shete</div>
          <div className="text-white">Shete</div>
        </div>
      </div>
    </>
  );
};

export default Hero;
