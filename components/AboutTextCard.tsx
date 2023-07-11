import Image from "next/image";
import { useGlitch } from "react-powerglitch";
import About from "../assets/About.png";
import Certified from "../assets/Certified.png";

const AboutTextCard = () => {
  const glitch = useGlitch();

  return (
    <div>
      <Image
        className="md:ml-12 relative -top-20 "
        src={About}
        alt="Skills Section"
        ref={glitch.ref}
      />
      <div className=" -translate-y-[115px]">
        <div className="text-[18px] md:text-[20px] lg:text-[20px]  text-white ">
          <p className="text-[24px] text-primary py-3">
            I love to program, write automation scripts, travel, and lift heavy
            things.
          </p>
          <p className="py-3">
            I have currently nestled myself into a niche for building automation
            script and still have an interest in developing web applications
          </p>
          <p className="py-3">
            I define myself by the work I want to do as skills can be taught and
            learnt but personality is inherent. I am eager to continue learning,
            continue challenging myself, and most importantly continue to
            succeed in every task I put myself into.
          </p>
        </div>
        <div className="mt-2 ml-[40px]">
          <Image className="w-48 h-48 " src={Certified} alt="Skills Section" />
        </div>
      </div>
    </div>
  );
};

export default AboutTextCard;
