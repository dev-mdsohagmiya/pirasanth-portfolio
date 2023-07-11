import Image from "next/image";
import Profile from "../assets/Profile.png";
import { useGlitch } from "react-powerglitch";

function AboutPhotoCard() {
  const glitch = useGlitch();
  return (
    <div
      className="md:w-[50vw]    bg-secondary-shaded rounded-lg  md:pb-4  -translate-y-10
       md:-translate-y-0 "
    >
      <div className="transform rotate-6 ">
        <Image
          className="  border-4 rounded-lg border-secondary-shaded   "
          src={Profile}
          alt="Profile Photo"
          ref={glitch.ref}
        />
      </div>
    </div>
  );
}

export default AboutPhotoCard;
