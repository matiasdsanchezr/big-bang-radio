"use client";
import Image from "next/image";
import React, { useState } from "react";
import BigBangLogo from "../assets/logo.svg";
import { Link } from "react-scroll";
import { useUser } from "@/src/context/UserProvider";

export const SocialMediaButton = ({
  children,
}: {
  children: React.ReactElement;
}) => {
  return (
    <a className="h-[24] w-[24] flex justify-center items-center fill-white hover:fill-primary cursor-pointer">
      {children}
    </a>
  );
};

type NavBarLinkProps = {
  name: string;
  text: string;
  isActive: boolean;
  onClick: (name: string) => void;
};

const NavBarLink = ({
  name,
  text,
  isActive = false,
  onClick,
}: NavBarLinkProps) => {
  return (
    <li
      className={`hover:text-primary ${
        isActive ? "line-through text-primary" : ""
      }`}
    >
      <a
        href={`#${name}`}
        onClick={() => {
          onClick(name);
        }}
      >
        {text}
      </a>
    </li>
  );
};

const Header = () => {
  const { activeSection, setActiveSection } = useUser();
  const [showMenu, setShowMenu] = useState(false);

  const onClickNavLink = (sectionName: string) => {
    setShowMenu(false);
    setActiveSection?.(sectionName);
  };

  return (
    <header
      className={`fixed z-[10000] w-full flex justify-between items-center p-3 ${
        showMenu ? "bg-slate-800" : "bg-gradient-to-b from-black to-black/0"
      } md:p-4 md:flex-row md:bg-transparent`}
    >
      <div className="w-full flex justify-between md:w-auto">
        <a href="#">
          <BigBangLogo className="h-[50px] fill-white hover:fill-primary" />
        </a>
      </div>
      <button
        className={`${showMenu ?? ""} md:hidden`}
        onClick={() => setShowMenu((prev) => !prev)}
      >
        MENU
      </button>
      <nav
        className={`${
          showMenu ? "block" : "hidden"
        } absolute top-[100%] left-0 bg-slate-800 w-full h-screen md:h-auto p-5 md:block md:static md:bg-transparent`}
      >
        <ul className="flex flex-col md:flex-row gap-5 justify-center font-bold">
          <NavBarLink
            name="home"
            isActive={activeSection === "home"}
            text="INICIO"
            onClick={onClickNavLink}
          />
          <NavBarLink
            name="contact"
            isActive={activeSection === "contact"}
            text="CONTACTO"
            onClick={onClickNavLink}
          />
          <NavBarLink
            name="sponsors"
            isActive={activeSection === "sponsors"}
            text="AUSPICIANTES"
            onClick={onClickNavLink}
          />
        </ul>
      </nav>
      <div className="hidden md:flex justify-end gap-1">
        <SocialMediaButton>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 256 256"
          >
            <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,191.63V152h24a8,8,0,0,0,0-16H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,0-16H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0,0,16h24v63.63a88,88,0,1,1,16,0Z"></path>
          </svg>
        </SocialMediaButton>
        <SocialMediaButton>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 256 256"
          >
            <path d="M214.75,211.71l-62.6-98.38,61.77-67.95a8,8,0,0,0-11.84-10.76L143.24,99.34,102.75,35.71A8,8,0,0,0,96,32H48a8,8,0,0,0-6.75,12.3l62.6,98.37-61.77,68a8,8,0,1,0,11.84,10.76l58.84-64.72,40.49,63.63A8,8,0,0,0,160,224h48a8,8,0,0,0,6.75-12.29ZM164.39,208,62.57,48h29L193.43,208Z"></path>
          </svg>
        </SocialMediaButton>
        <SocialMediaButton>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            width="24"
            height="24"
          >
            <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
          </svg>
        </SocialMediaButton>
        <SocialMediaButton>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
            width="28"
            height="28"
          >
            <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
          </svg>
        </SocialMediaButton>
      </div>
    </header>
  );
};
export default Header;
