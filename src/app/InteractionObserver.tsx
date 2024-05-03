"use client";

import { Dispatch, SetStateAction } from "react";
import { InView, observe } from "react-intersection-observer";
import { useUser } from "@/src/context/UserProvider";

type InteractionObserverProps = {
  children: React.ReactNode;
  name: string;
  setName?: Dispatch<SetStateAction<string>>;
};

export default function InteracionObserver({
  children,
  name,
  setName,
}: InteractionObserverProps) {
  const { setActiveSection } = useUser();

  return (
    <InView
      threshold={0.1}
      rootMargin={"-20% 0% -70% 0%"}
      onChange={(inView, entry) => {
        if (inView) setActiveSection?.(name);
      }}
    >
      {({ inView, ref, entry }) => (
        <section
          id={name}
          ref={ref}
        >
          {children}
        </section>
      )}
    </InView>
  );
}
