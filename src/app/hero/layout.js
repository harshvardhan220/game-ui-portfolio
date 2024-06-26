"use client";
import React, { useEffect, useState } from "react";
import "../globals.css";
import { Big_Shoulders_Text, Iceberg, Iceland } from "next/font/google";
import { rewards, beginning } from "../constants/constants.js";
import { usePathname, useRouter } from "next/navigation";
import Header from "../_components/Header.js";
import LeftSection from "../_components/LeftSection.js";
import RightSection from "../_components/RightSection.js";
import Loader from "../_components/Loader.js";
import Link from "next/link";
import Image from "next/image";

const big_shoulders = Big_Shoulders_Text({ subsets: ["latin"] });
const iceberg = Iceberg({ weight: "400", subsets: ["latin"] });
const iceland = Iceland({ weight: "400", subsets: ["latin"] });

export default function Layout({ children }) {
  const [selected, setSelected] = useState(0);
  const [width, setWidth] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();
  const pathName = usePathname();

  useEffect(() => {
    const savedSelected = localStorage.getItem("selected");
    if (savedSelected) {
      setSelected(parseInt(savedSelected, 10));
      const selectedItem = beginning[parseInt(savedSelected, 10)];
      if (selectedItem) {
        const route =
          selectedItem?.title === "BEGINNING"
            ? "/hero"
            : `/hero/${selectedItem?.title.toLowerCase()}`;
        router.replace(route);
      }
    }
  }, []);

  useEffect(() => {
    setIsClient(true);
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    handleResize(); // Set initial width
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (!isClient) {
    // Render nothing or a loading state during the initial server render
    return <Loader />;
  }

  return (
    <>
      {width < 394 && (
        <div className="bg-[#000000] w-full h-screen">
          {/* Introduction */}
          <div className="pt-[24px] pl-[7px] pr-[8px]">
            <h1
              className={`text-white text-[18px] tracking-[0.075em] uppercase text-center ${iceland.className}`}
            >
              swimming through a vast network of interconnected devices and
              servers, spreading joy and whimsy to users across the globe
            </h1>
          </div>
          {/* whale image  */}
          <div className="mt-[27px] text-center p-[8px]">
            <Image
              src="/assets/whale-mobile.png"
              alt=""
              height={350}
              width={350}
            />
          </div>
        </div>
      )}
      {width >= 394 && (
        <div className="h-auto overflow-scroll overflow-x-hidden">
          <Header />

          {/* Wrapper  */}
          <div className="flex pl-[75px] pr-[78px] tracking-[0.075em]">
            {/* Left Section  */}
            <LeftSection />
            {/* Middle Section  */}
            <div className="middle-section flex justify-center relative w-auto h-auto  mr-[16px] ">
              {children}
            </div>
            <div className=" bg-black absolute bottom-[35px] flex gap-[60px]  left-[23%]  w-[815px]  h-[65px] tabletToDesktop:w-[614px]">
              {beginning?.map((el, id) => {
                return (
                  <Link
                    href={
                      el?.title === "BEGINNING"
                        ? `/hero`
                        : `/hero/${el?.title.toLowerCase()}`
                    }
                    key={el?.name}
                  >
                    <div
                      onClick={(e) => {
                        setSelected(id);
                        localStorage.setItem("selected", id);
                      }}
                      className="cursor-pointer w-[151px] h-auto border flex flex-col  border-l-[#E84A4A] border-b-0 border-r-0 border-t-0 border-l-2"
                    >
                      <p
                        className={`subtract text-white relative z-20 uppercase ml-[8px] ${big_shoulders.className}`}
                      >
                        {el?.title ?? "Beginning"}
                      </p>
                      <Image
                        className={`absolute top-0 ${
                          id === selected ? "animate-pulse" : ""
                        }`}
                        src={
                          "/assets/subtract.png"
                          // id === selected
                          //   ? "assets/subtract.png"
                          //   : "assets/subtract-black.png"
                        }
                        alt=""
                        height={230}
                        width={190}
                      />
                      <p
                        className={`text-white ml-[8px] ${iceland.className} text-[11px]`}
                      >
                        Suscipit est consequatur nemo voluptatem est labore
                        saepe.
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
            {/* Right Section  */}
            <RightSection />
          </div>
        </div>
      )}
    </>
  );
}

// 1. Store the selected state in local storage.
// 2. Retrieve the selected state on component mount to initialize it.
// 3. Update both the state and the URL upon selection to ensure proper synchronization.
// 4. This approach ensures the selected state and the route persist even after refreshing the page.
