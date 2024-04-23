import { useState } from "react";
import styles from "./Navbar.module.css";
import menuIcon from "../assets/menu.png";
import React from "react";

type props = {
  homeRef: React.RefObject<HTMLDivElement>;
  aboutRef: React.RefObject<HTMLDivElement>;
  projectsRef: React.RefObject<HTMLDivElement>;
  contactRef: React.RefObject<HTMLDivElement>;
};

function Navbar(props: props) {
  const [showMenu, setShowMenu] = useState(false);
  const { homeRef, aboutRef, projectsRef, contactRef } = props;
  function scrollTo(ref: React.RefObject<HTMLDivElement>) {
    setShowMenu(false);
    if (ref.current) ref.current.scrollIntoView({ behavior: "smooth" });
  }

  const NavButtons = () => {
    return (
      <>
        <button onClick={() => scrollTo(homeRef)}>Home</button>
        <button onClick={() => scrollTo(aboutRef)}>About</button>
        <button onClick={() => scrollTo(projectsRef)}>Projects</button>
        <button onClick={() => scrollTo(contactRef)}>Contact</button>
      </>
    );
  };

  return (
    <div className={styles.nav}>
      <h2>Himanshu</h2>
      <img src={menuIcon} alt="" onClick={() => setShowMenu(true)} />

      {showMenu && (
        <div className={styles.menuMobile}>
          <p onClick={() => setShowMenu(false)}>&times;</p>
          <NavButtons />
        </div>
      )}
      <div className={styles.menuDesk}>
        <NavButtons />
      </div>
    </div>
  );
}

export default Navbar;
