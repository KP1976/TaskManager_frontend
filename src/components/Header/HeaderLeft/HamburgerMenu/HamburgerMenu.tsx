import "./HamburgerMenu.css";
import { AddTaskAndMobileMenuContext } from "../../../../context/AddTaskAndMobileMenuContext";
import { useContext, useRef } from "react";

export const HamburgerMenu = () => {
  const topBarMenu = useRef<HTMLDivElement>(null);
  const middleBarMenu = useRef<HTMLDivElement>(null);
  const bottomBarMenu = useRef<HTMLDivElement>(null);
  const { mobileMenuIsOpen, setMobileMenuIsOpen } = useContext(
    AddTaskAndMobileMenuContext
  );

  const toggleMobileMenu = () => {
    topBarMenu.current?.classList.toggle("turn-right");
    middleBarMenu.current?.classList.toggle("vanished");
    bottomBarMenu.current?.classList.toggle("turn-left");

    setMobileMenuIsOpen(!mobileMenuIsOpen);
  };

  return (
    <button
      className="HamburgerMenu"
      aria-label="Hamburger menu of Task Done List"
      onClick={toggleMobileMenu}
    >
      <div ref={topBarMenu} className="HamburgerMenu__top"></div>
      <div ref={middleBarMenu} className="HamburgerMenu__middle"></div>
      <div ref={bottomBarMenu} className="HamburgerMenu__bottom"></div>
    </button>
  );
};
