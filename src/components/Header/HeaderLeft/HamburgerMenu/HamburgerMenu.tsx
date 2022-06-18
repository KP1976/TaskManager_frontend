import { useContext, useRef } from "react";

import "./HamburgerMenu.css";
import { AddTaskContext } from "../../../../context/AddTaskContext";

export const HamburgerMenu = () => {
  const topBarMenu = useRef<HTMLDivElement>(null);
  const middleBarMenu = useRef<HTMLDivElement>(null);
  const bottomBarMenu = useRef<HTMLDivElement>(null);
  const { mobileMenuIsOpen, setMobileMenuIsOpen } = useContext(AddTaskContext);

  const toggleMobileMenu = () => {
    topBarMenu.current?.classList.toggle("turn-right");
    middleBarMenu.current?.classList.toggle("vanished");
    bottomBarMenu.current?.classList.toggle("turn-left");

    setMobileMenuIsOpen(!mobileMenuIsOpen);
  };

  return (
    <button className="HamburgerMenu" onClick={toggleMobileMenu}>
      <div ref={topBarMenu} className="HamburgerMenu__top"></div>
      <div ref={middleBarMenu} className="HamburgerMenu__middle"></div>
      <div ref={bottomBarMenu} className="HamburgerMenu__bottom"></div>
    </button>
  );
};
