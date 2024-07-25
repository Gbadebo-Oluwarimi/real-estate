import React from "react";
import Gallery from "./Subcomponents/Gallery";

const Projects = () => {
  return (
    <div className="w-full  min-h-80 text-gray-700 mt-20 ">
      <div
        className="text-center text-5xl  pt-5 font-bold"
        data-aos="fade-down"
      >
        Some of Our Works
      </div>
      <div className="text-xl text-center mt-4">
        Contrary to popular belief, Lorem Ipsum is not <br />
        simply random text. It has roots in a piece
      </div>
      <div className="max-w-7xl m-auto mt-16 mb-2">
        <Gallery />
      </div>
    </div>
  );
};

export default Projects;
