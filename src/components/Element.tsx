"use client";

import React from "react";
import { Element as ReactScrollElement } from "react-scroll";

type ElementProps = {
  children: React.ReactElement;
  name: string;
  className?: string;
};

const Element = ({ children, name, className }: ElementProps) => {
  return (
    <ReactScrollElement name={name} className={className}>
      {children}
    </ReactScrollElement>
  );
};

export default Element;
