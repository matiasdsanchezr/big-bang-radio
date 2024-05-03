"use client";

import React, { useEffect, useState } from "react";

/**
 * Highly experimental feature
 * The BeforeInstallPromptEvent is fired at the Window.onbeforeinstallprompt handler
 * before a user is prompted to "install" a web site to a home screen on mobile.
 */
interface BeforeInstallPromptEvent extends Event {
  /**
   * Returns an array of DOMString items containing the platforms on which the event was dispatched.
   * This is provided for user agents that want to present a choice of versions to the user such as,
   * for example, "web" or "play" which would allow the user to chose between a web version or
   * an Android version.
   */
  readonly platforms: Array<string>;

  /**
   * Returns a Promise that resolves to a DOMString containing either "accepted" or "dismissed".
   */
  readonly userChoice: Promise<{
    outcome: "accepted" | "dismissed";
    platform: string;
  }>;

  /**
   * Allows a developer to show the install prompt at a time of their own choosing.
   * This method returns a Promise.
   */
  prompt(): Promise<void>;
}

const InstallPWA = () => {
  const [supportsPWA, setSupportsPWA] = useState(false);
  const [promptInstall, setPromptInstall] =
    useState<BeforeInstallPromptEvent>();

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();
      const beforeInstallPromptEvent = e as BeforeInstallPromptEvent;
      setSupportsPWA(true);
      setPromptInstall(beforeInstallPromptEvent);
    };
    window.addEventListener("beforeinstallprompt", handler);

    return () => window.removeEventListener("transitionend", handler);
  }, []);

  const onClick = (evt: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    evt.preventDefault();
    promptInstall?.prompt();
  };

  if (!supportsPWA) return null;

  return (
    <>
      <section className="text-center px-5 py-12 flex flex-col gap-5 w-full items-center object-center">
        <h3 className="font-semibold">
          Tu navegador es compatible con aplicaciones web progresivas
        </h3>
        <p>
          Descarga la aplicación de Radio Big Bang en tu dispositivo haciendo
          clic en &apos;Instalar&apos;.
        </p>
        <button
          className="px-5 py-3 bg-primary rounded-lg"
          id="setup_button"
          aria-label="Install app"
          title="Install app"
          onClick={(e) => onClick(e)}
        >
          Instalar
        </button>
      </section>
      <hr className="w-4/6 m-auto border-1 border-primary" />
    </>
  );
};

export default InstallPWA;
