import React from "react";
import Card from "./Card";
import Button from "./Button";

const Latest = () => {
  return (
    <>
      <div className="max-w-7xl m-auto px-6 mt-4">
        <div className="flex justify-between align-middle items-center">
          <div className="w-full md:w-1/2">
            <div className="text-4xl font-bold " data-aos="fade-down">
              Latest Projects
            </div>
            <div className="text-sm w-full pt-4" data-aos="fade-down">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it overin a piece of making it over
            </div>
          </div>
          <button className=" hidden md:flex text-sm mt-8 px-5 py-3 bg-yellow-500 text-white font-semibold ">
            Products
          </button>
        </div>
        <div className="mt-20 max-w-7xl m-auto">
          <div className="md:flex inline-block p-5 md:p-0 w-full gap-5">
            <Card />

            <Card />

            <Card />
          </div>
          <div className="m-auto w-full my-10"></div>
        </div>
      </div>
    </>
  );
};

export default Latest;
