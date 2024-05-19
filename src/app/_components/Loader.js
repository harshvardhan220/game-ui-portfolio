"use client";
import React from "react";
import "../globals.css";

export default function Loader() {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-gradient-to-tr from-gray-800 to-red-800">
      <div className="spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
