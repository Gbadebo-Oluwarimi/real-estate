import React from "react";
import Link from "next/link";
const Navbar = () => {
  return (
    <div>
      <>
        {/* {box ? <Phonenav locale={locale} /> : ""} */}
        <div className="main2 fixed w-full bg-green-50 z-10 my-5 ">
          <div className=" relative m-auto max-w-7xl w-full lg:max-w-full  px-5 flex justify-between items-center align-middle">
            <div className="flex justify-between items-center ">
              <div className="mr-20 font-bold flex items-center align-middle ">
                <Link href="/">
                  {/* <Image
                    src="/logo.png"
                    width={100}
                    height={100}
                    alt="logo"
                    className="font-bold"
                  /> */}
                </Link>
              </div>

              <ul className=" hidden md:flex justify-between items-center text-gray-800">
                <Link href="/">
                  {" "}
                  <li className="mr-7">Home</li>
                </Link>
                <Link href="/#products">
                  <li className="mr-7">Products</li>
                </Link>
                <Link href="">
                  <li className="mr-7">Team </li>
                </Link>
                <Link href="">
                  <li className="mr-7">Contact</li>
                </Link>
                <Link href="">
                  <li className="mr-7">About </li>
                </Link>
                <Link href="">
                  <li className="mr-7">Press</li>
                </Link>
              </ul>
            </div>
            <ul className="flex justify-between text-center items-center ">
              <div className="md:hidden inline-block px-10">
                <svg
                  // onClick={() => updatebox()}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 cursor-pointer"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </div>
            </ul>
          </div>
        </div>
      </>
    </div>
  );
};

export default Navbar;
