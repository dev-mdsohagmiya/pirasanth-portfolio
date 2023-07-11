import React from "react";
import Image from "next/image";
import Header from "assets/Skills.png";
import { Icon } from "@iconify/react";
import { useGlitch } from "react-powerglitch";

interface Skill {
  _key: string;
  altText: string;
  imgSrc: string;
  order?: number;
  title: string;
}
interface Props {
  skills: Skill[];
}

function Skills({ skills }: Props) {
  const glitch = useGlitch();
  return (
    <section id="skills" className="bg-secondary-shaded -mx-8 relative top-24">
      <div className="max-w-7xl mx-auto">
        <Image
          className="md:ml-12 relative -top-20 max-w-7xl mx-auto"
          src={Header}
          alt="Skills Section"
          ref={glitch.ref}
        />
        <div className="pb-2 sm:pb-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 items-center gap-x-8 gap-y-10  sm:grid-cols-3 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {skills.map((skill) => (
                <div key={skill._key} className="flex items-center">
                  <Icon
                    className=" col-span-2 object-contain lg:col-span-1"
                    color="red"
                    icon={skill.imgSrc}
                    width="70"
                  />
                  <div className="text-primary text-xl ml-10">
                    {skill.title}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
