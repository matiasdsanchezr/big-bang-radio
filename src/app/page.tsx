import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

import Hero from "./Hero";
import ContactForm from "./ContactForm";
import InteracionObserver from "./InteractionObserver";

import bigbangBanner1 from "../assets/images/banner-big-bang.png";
import bigbangBanner2 from "../assets/images/banner-big-bang-2.png";

import logoBambino from "../assets/sponsors/bambino.jpeg";
import logoADosStudio from "../assets/sponsors/ados-studio.jpeg";
import logoCompanyDesign from "../assets/sponsors/company-design.jpeg";
import logoLasRosasBar from "../assets/sponsors/las-rosas-bar.jpeg";
import logoMotorepuestosGonzales from "../assets/sponsors/motorepuestos-gonzales.jpeg";
import logoParadiso from "../assets/sponsors/paradiso.jpeg";
import logoParqueDeTierras from "../assets/sponsors/parque-de-tierras.jpeg";
import logoPuebloGrafico from "../assets/sponsors/pueblo-grafico.jpeg";
import logoStarCar from "../assets/sponsors/star-car.jpeg";
import InstallPWA from "./InstallPWA";

const SponsorLogo = ({
  imgSrc,
  className,
}: {
  imgSrc: StaticImport;
  className?: string;
}) => {
  return (
    <div
      className={`w-[250px] h-[250px] overflow-hidden flex flex-grow-1 flex-shrink-0 basis-auto items-center ${className}`}
    >
      <Image
        src={imgSrc}
        alt="logo de bambino"
        sizes="(max-width: 768px) 250px"
        className={`object-cover w-full h-min origin-top-right`}
      />
    </div>
  );
};

export default function Home() {
  return (
    <main>
      <InteracionObserver name="home">
        <Hero />
      </InteracionObserver>
      <InstallPWA />
      <section
        id="banners"
        className="flex flex-wrap justify-center gap-20 px-5 py-12 mx-auto bg-black/40 rounded-lg md:w-4/6 md:p-20 md:my-10"
      >
        <p>
          ¡Bienvenidos a Big Bang Radio, el epicentro de la música que hace
          temblar el universo! Sumérgete en un mundo donde el rock choca con la
          electrónica para crear explosiones sonoras que te dejarán sin aliento.
          En Big Bang Radio, cada canción es un viaje emocionante que te lleva a
          través de los géneros y las épocas, desde los clásicos del rock hasta
          los ritmos electrónicos más vanguardistas. Únete a nuestra comunidad
          de amantes de la música y déjate llevar por la potencia y la pasión de
          nuestros sonidos. ¡Prepárate para experimentar el Big Bang musical en
          Big Bang Radio!
        </p>
        <Image
          src={bigbangBanner1}
          alt="banner de radio big bang 1"
          className="w-full max-w-96"
        />
        <Image
          src={bigbangBanner2}
          alt="banner de radio big bang 2"
          className="w-full max-w-96"
        />
      </section>
      <hr className="w-4/6 m-auto border-1 border-primary" />
      <InteracionObserver name="contact">
        <ContactForm />
      </InteracionObserver>
      <hr className="w-4/5 m-auto border-1 border-primary" />
      <InteracionObserver name="sponsors">
        <section className="flex flex-wrap justify-center gap-5 py-20 px-10 max-w-6xl m-auto bg-[#222]">
          <h2 className="w-full font-light text-center">PATROCINADORES</h2>
          <SponsorLogo imgSrc={logoBambino} />
          <SponsorLogo imgSrc={logoADosStudio} />
          <SponsorLogo imgSrc={logoCompanyDesign} />
          <SponsorLogo imgSrc={logoLasRosasBar} />
          <SponsorLogo
            imgSrc={logoMotorepuestosGonzales}
            className="bg-white"
          />
          <SponsorLogo imgSrc={logoParadiso} className="bg-white" />
          <SponsorLogo imgSrc={logoStarCar} />
          <SponsorLogo imgSrc={logoPuebloGrafico} />
          <SponsorLogo imgSrc={logoParqueDeTierras} className="bg-black" />
        </section>
      </InteracionObserver>
    </main>
  );
}
