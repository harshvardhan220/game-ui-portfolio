"use client";
import React, { useState, useEffect } from "react";
import "../globals.css";
import { Big_Shoulders_Text, Iceberg, Iceland } from "next/font/google";
import { rewards, beginning } from "../constants/constants.js";
import { useRouter } from "next/navigation";

const big_shoulders = Big_Shoulders_Text({ subsets: ["latin"] });
const iceberg = Iceberg({ weight: "400", subsets: ["latin"] });
const iceland = Iceland({ weight: "400", subsets: ["latin"] });

const Header = () => {
  const [coinsAwarded, setCoinsAwarded] = useState(1425);
  const [currentTime, setCurrentTime] = useState({ hours: 0, minutes: 0, hours24: 0 });

  useEffect(() => {
    const now = new Date();
    setCurrentTime({
      hours: now.getHours() % 12,
      hours24: now.getHours(),
      minutes: now.getMinutes(),
    });
  }, []);

  return (
    <>
      <div className="background">
        <div className=""></div>
      </div>
      {/* Header */}
      <div className="flex justify-between pt-[27px] pb-[16px] pl-[75px] pr-[78px] text-[#FFFFFF] w-full h-auto">
        <div className="flex justify-center gap-[46px]">
          <div className="flex tracking-[0.075em]">
            <p className={`text-[26px] text-[#7DFF68] ${big_shoulders.className}`}>
              48 <span className="text-[#FFFFFF] text-[16px] opacity-80">LEVEL</span>
            </p>
          </div>
          <div className="flex">
            <div
              onClick={() => setCoinsAwarded((coins) => coins + 1)}
              className="flex justify-center items-center w-[33px] h-[33px] border border-[#FFFFFF]"
            >
              <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.147 10.595V6.448H0V4.147H4.147V0H6.461V4.147H10.608V6.448H6.461V10.595H4.147Z" fill="#E84A4A" />
              </svg>
            </div>
            <div className={`flex justify-center items-baseline pl-[13px] gap-[6px] tracking-[0.075em] ${big_shoulders.className}`}>
              <p className="text-[26px] text-[#7DFF68]">{coinsAwarded ?? "1,425"}</p>
              <span className="text-[16px] opacity-80">COINS AWARDED</span>
            </div>
          </div>
        </div>
        <div>
          <ul className={`flex items-baseline gap-[27px] list-none ${big_shoulders.className}`}>
            <li className={`text-[12px] tracking-[0.075em] ${iceberg.className}`}>CREDITS</li>
            <li className={`text-[14px] text-[#7A7A7A] tracking-[0.075em] ${iceberg.className}`}>
              SERVER TIME :
              <span className={`text-[#FFFFFF] tracking-[0.075em] ${iceberg.className}`}>
                &nbsp;{`${currentTime.hours24} : ${currentTime.minutes}`}
              </span>
            </li>
            <li className={`text-[14px] text-[#7A7A7A] tracking-[0.075em] ${iceberg.className}`}>
              LOCAL TIME :
              <span className={`text-[#FFFFFF] tracking-[0.075em] ${iceberg.className}`}>
                &nbsp;{`${currentTime.hours} : ${currentTime.minutes}`}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
