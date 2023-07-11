"use client";
import { previewData } from "next/headers";
import Image from "next/image";

import About from "../../sections/about";
import "../../styles/globals.css";
import { useGlitch } from "react-powerglitch";
import Skills from "../../sections/skills";
import skills from "../../data/skills";
import Hero from "../../sections/hero";

import Header from "../../components/Header";

function HomePage() {
  return (
    <div className=" mx-10 justify-center ">
      {/* <section id="about" className="pt-20 pb-10  ">
        <div className="md:grid gap-4 grid-cols-2 md:right-0 md:w-screen md:absolute">
          <div className="relative ">
            <div className="bg-secondary-shaded rounded-lg ">
              <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <p className="text-primary text-xl ml-10">Hi!</p>
                <p>I'm Pirasanth - but call me PJ.</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <div className={`bg sticky top-0 z-20  bg-secondary   -mx-10`}>
        <Header />
      </div>
      <Hero />

      {/* <div className="md:-mx-10 mt-[120px] md:mt-[650px] md:h-[800px]  md:overflow-hidden">
        <About />
      </div> */}

      <div className="md:-mx-10 mt-[80px] md:mt-[650px]  md:overflow-hidden">
        <Skills skills={skills} />
      </div>

      {/* <div className="mt-[120px]">
        <Footer />
      </div> */}
    </div>
  );
}

export default HomePage;
