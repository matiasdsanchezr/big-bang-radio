import { MetadataRoute } from "next";
import { Manifest } from "next/dist/lib/metadata/types/manifest-types";

// Fix para el tipo Manifest por el cual no se puede agregar la propiedad form_factor a un screenshot
interface FixedManifest extends Manifest {
  screenshots?: {
    src: string;
    type?: string;
    sizes?: string;
    form_factor?: string;
  }[];
}

export default function manifest(): FixedManifest {
  return {
    name: "Big Bang Radio",
    short_name: "BigBang",
    description:
      "¡Disfruta de la vibrante energía de Radio Big Bang en cualquier momento del día! Sintoniza nuestra transmisión constante desde Catamarca con nuestra nueva aplicación.",
    theme_color: "#111",
    background_color: "#111",
    display: "standalone",
    orientation: "portrait",
    start_url: "/",
    icons: [
      {
        src: "/icons/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icons/icon-256x256.png",
        sizes: "256x256",
        type: "image/png",
      },
      {
        src: "/icons/icon-384x384.png",
        sizes: "384x384",
        type: "image/png",
      },
      {
        src: "/icons/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    screenshots: [
      {
        src: "/screenshots/desktop-3840x2160.png",
        sizes: "3840x2160",
        type: "image/png",
        form_factor: "wide",
      },
      {
        src: "/screenshots/mobile-640x1280.png",
        sizes: "640x1280",
        type: "image/png",
      },
    ],
  };
}
