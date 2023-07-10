'use client';
import { previewData } from 'next/headers';
import Image from 'next/image';
import Header from 'assets/Skills.png';
import About from '../../sections/about';
import '../../styles/globals.css';
import { useGlitch } from 'react-powerglitch';
import Skills from '../../sections/skills';
import skills from '../../data/skills';
import Hero from '../../sections/hero';
import { NextPage } from 'next';

const HomePage: NextPage = () => {
  return (
    <div className="justify-center mx-8 ">
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
      <Hero />
      {/* <Skills skills={skills} /> */}
      {/* <About /> */}
    </div>
  );
};

export default HomePage;
