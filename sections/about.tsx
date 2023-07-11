"use client";

import AboutPhotoCard from "../components/AboutPhotoCard";
import AboutTextCard from "../components/AboutTextCard";

function About() {
  return (
    <section id="about" className=" max-w-7xl mx-auto">
      <div className="md:translate-y-36">
        <div className="md:grid gap-4 grid-cols-12 ">
          <div className="col-span-12 md:col-span-6 ">
            <AboutTextCard />
          </div>
          <div className="col-span-12 md:col-span-6">
            <AboutPhotoCard />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
