"use client";
import React from "react";

const page = () => {
  return (
    <>
      <div className="text-white">I am Achievements</div>
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
    </>
  );
};

export default page;
