import React from "react";
import Image from "next/image";
const Gallery = () => {
  return (
    <div class="container mx-auto px-5 py-2 lg:px-26 lg:pt-24">
      <div class="-m-1 flex flex-wrap md:-m-2">
        <div class="flex w-1/2 flex-wrap">
          <div class="w-1/2 p-1 md:p-2" data-aos="fade-down">
            <Image
              alt="gallery"
              class="block h-full w-full rounded-lg object-cover object-center"
              src="/house-a.jpg"
              width={1000}
              height={1000}
            />
          </div>
          <div class="w-1/2 p-1 md:p-2" data-aos="fade-left">
            <Image
              alt="gallery"
              class="block h-full w-full rounded-lg object-cover object-center"
              src="/house-a.jpg"
              width={1000}
              height={1000}
            />
          </div>
          <div class="w-full p-1 md:p-2" data-aos="fade-right">
            <Image
              alt="gallery"
              class="block h-full w-full rounded-lg object-cover object-center"
              src="/house-a.jpg"
              width={1000}
              height={1000}
            />
          </div>
        </div>
        <div class="flex w-1/2 flex-wrap" data-aos="fade-up">
          <div class="w-full p-1 md:p-2">
            <Image
              alt="gallery"
              class="block h-full w-full rounded-lg object-cover object-center"
              src="/house-a.jpg"
              width={1000}
              height={1000}
            />
          </div>
          <div class="w-1/2 p-1 md:p-2" data-aos="fade-down">
            <Image
              alt="gallery"
              class="block h-full w-full rounded-lg object-cover object-center"
              src="/house-a.jpg"
              width={1000}
              height={1000}
            />
          </div>
          <div class="w-1/2 p-1 md:p-2" data-aos="fade-right">
            <Image
              alt="gallery"
              class="block h-full w-full rounded-lg object-cover object-center"
              src="/house-a.jpg"
              width={1000}
              height={1000}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
