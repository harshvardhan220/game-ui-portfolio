"use client";
import { Big_Shoulders_Text, Iceland } from "next/font/google";
import { useRouter } from "next/navigation";

const big_shoulders = Big_Shoulders_Text({ subsets: ["latin"] });
const iceland = Iceland({
  weight: "400",
  subsets: ["latin"],
});
export default function Home() {
  const router = useRouter();
  return (
    <div className="flex  xxs:text-center xxs:flex-col xs:flex-col lg:flex-row sm:flex-col justify-center items-center lg:text-left sm:text-center bg-[#000003] h-[100vh] w-[100vw] lg:gap-[84px] sm:gap-[42px]">
      <div className="">
        <h1
          className={`lg:text-[350px] sm:text-[210px] xs:text-[100px] xxs:text-[90px] tracking-[-0.06em] font-big-shoulders font-extrabold text-[#E84A4A] ${big_shoulders.className} `}
        >
          HI!
        </h1>
      </div>
      <div className=" max-w-[623px] flex flex-wrap border border-[#000000]">
        <h1
          className={`text-[26px]  lg:ml-0 sm:ml-[20%] text-[#FFFFFF] uppercase ${iceland.className}`}
        >
          Welcome to My personal website.
        </h1>
        <div className="flex flex-col text-[#FFFFFF] uppercase gap-5 leading-[130%] tracking-[7.5%] mt-[46px]">
          <span className={`text-[20px]  ${iceland.className}`}>
            {" "}
            I have created this website to feel like a game/sci-fi interface.
            All text inside tries to reflect this.
          </span>
          <span className={`text-[20px] ${iceland.className}`}>
            You will find ‘achievements’ or ‘quests’ that show the progress in
            my professional life and are related to what I am working on.
          </span>
        </div>
        <div className={`text-white mt-[50px] ${big_shoulders.className}`}>
          <button
            onClick={() => router.push("/hero")}
            className="text-[22px] xxs:ml-[55px] xs:ml-[180px] lg:ml-0 sm:ml-[75%] tracking-[0.075em] leading-[26px] uppercase w-[256px] h-[55px] text-[#E84A4A]"
          >
            Enter the System
          </button>
        </div>
      </div>
    </div>
  );
}
