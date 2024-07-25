"use client";
import Image from "next/image";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import localFont from "next/font/local";
import Landing from "./components/Landing";
import Sublanding from "./components/Sublanding";
import Section from "./components/Section";
import Sectionb from "./components/Sectionb";
import Latest from "./components/Latest";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Sponsors from "./components/Sponsors";
import AOS from "aos";
import "aos/dist/aos.css";
import Testimonial from "./components/Testimonial";

const myfont2 = localFont({
  src: "./font/Figtree-Light.ttf",
});
export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <div style={myfont2.style} className="bg-gray-100 overflow-x-hidden">
      {/* <Navbar /> */}
      <Landing />
      <Sponsors />
      <Section />
      <Sectionb />
      <Latest />
      <Sublanding />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}
