import React from "react";
import Card from "./Card";
import Button from "./Button";

const Latest = () => {
  return (
    <>
      <div className="max-w-6xl m-auto">
        <div className="flex justify-between align-middle items-center">
          <div className="">
            <div className="text-4xl font-bold ">Latest Projects</div>
            <div className="text-sm w-1/2 pt-4">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it overin a piece of making it over
            </div>
          </div>
          <button className="text-sm mt-8 px-5 py-3 bg-yellow-500 text-white font-semibold ">
            Products
          </button>
        </div>
        <div className="mt-20 max-w-7xl m-auto">
          <div className="md:flex inline-block p-10 md:p-0 w-full gap-5">
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
