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
  const rewards = [
    {
      src: "/assets/reward-1.png",
      points: "+25",
    },
    {
      src: "/assets/reward-2.png",
      points: "+5",
    },
  ];

  return (
    <>
      <div className="background">
        <div className=""></div>
      </div>
      {/* Header */}
      <div className="flex  justify-between pt-[27px] pb-[16px] pl-[78px] pr-[78px] text-[#FFFFFF] w-full h-auto">
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
          <img src="/assets/whale.png" className="h-[85vh] w-[62vw]" alt="" />
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
        <div className="w-[196px] relative h-auto ">
          <div className="absolute h-[389px] w-[2px] left-[-2px] bg-[#E84A4A] z-20"></div>
          <div className="flex]">
            <div className="flex items-center absolute">
              <img src="/assets/subtract.png" className=" " alt="" />
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
                      <img className="w-[40px] h-[40px]" src={el?.src} alt="" />
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
      </div>
    </>
  );
};

export default Hero;
