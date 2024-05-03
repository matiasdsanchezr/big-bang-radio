import Image from "next/image";
import BigBangLogo from "../assets/logo.svg";
import HeroImage from "../assets/images/hero.jpg";

import dynamic from "next/dynamic";
const AudioPlayer = dynamic(() => import("./AudioPlayer"), { ssr: false });

const Hero = () => {
  return (
    <div className="min-h-screen relative flex">
      <div className="h-full w-full max-w-[max(70vh,240px)] p-5 pt-[80px] overflow-hidden relative flex flex-col gap-1 items-center justify-center m-auto">
        <BigBangLogo className="w-full fill-white animate-playing" />
        <span className="self-end text-sm md:text-lg text-primary bottom-0 font-semibold">
          EN VIVO
        </span>
        <AudioPlayer />
      </div>
      <Image
        src={HeroImage}
        alt="portada de una guitarra"
        className="h-full w-full object-cover absolute z-[-1] top-0"
        width={100}
        height={100}
        priority={true}
      />
    </div>
  );
};
export default Hero;
