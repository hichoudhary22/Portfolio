import { useState } from "react";
import styles from "./Navbar.module.css";
import menuIcon from "../assets/menu.png";

function Navbar({ homeRef, aboutRef, projectsRef, contactRef }) {
  const [showMenu, setShowMenu] = useState(false);

  function scrollTo(ref: object) {
    setShowMenu(false);
    ref.current.scrollIntoView({ behavior: "smooth" });
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
