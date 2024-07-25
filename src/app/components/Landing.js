import React from "react";
import Image from "next/image";
const Landing = () => {
  return (
    <div className="bg-gray-100 md:min-h-screen min-h-96 ">
      <div className="absolute">
        <Image
          alt="gallery"
          class="md:mx-20"
          src="/logo.png"
          width={90}
          height={90}
        />
      </div>
      <div className="md:flex gap-8 inline-block">
        <div className="inline-block h-full md:w-2/4 w-full md:ml-20 ml-0 md:p-0 px-10 mt-44">
          <div
            className="2xl:  2xl:text-7xl text-4xl items-center font-bold  align-middle text-center  md:text-left  md:text-5xl mb-3 md:pt-6 text-darkgreen w-full "
            data-aos="fade-down"
          >
            <h1>
              Curating the Best{" "}
              <span className="text-yellow-800">Properties</span> That You Truly
              Deserve{" "}
            </h1>
            <span className="text-green-700"></span>
          </div>

          <div
            className="text-sm md:w-2/3 w-full md:text-left text-center mt-5"
            data-aos-delay="1000"
            data-aos="fade-down"
          >
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it overin a piece of making it over
          </div>
          <div className="mt-8 " data-aos="fade-down">
            <input
              type="email"
              id="email"
              aria-describedby="helper-text-explanation"
              class="bg-gray-50 border md:w-2/4 w-full border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="example@email.com"
            />

            <p
              id="helper-text-explanation"
              class="mt-2 text-sm text-gray-500 dark:text-gray-400"
            >
              We’ll never share your details. Read our{" "}
              <a
                href="#"
                class="font-medium text-blue-600 hover:underline dark:text-blue-500"
              >
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </div>
        <div
          className="min-h-screen w-2/4 hidden md:flex "
          data-aos="fade-left"
          data-aos-delay="500"
        >
          <video autoPlay loop muted className="  object-cover w-full ">
            <source src="/Landing.mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default Landing;
