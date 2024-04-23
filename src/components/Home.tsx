import { forwardRef } from "react";
import styles from "./Home.module.css";

const Home = forwardRef<
  HTMLDivElement,
  { projectsRef: React.RefObject<HTMLDivElement> }
>(({ projectsRef }, ref) => {
  function scrollToProjects(): void {
    if (projectsRef.current)
      projectsRef.current.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <div ref={ref} className={styles.home}>
      <h1>Hello there!!!</h1>
      <p>
        welcome to my portfolio, I make lots of different websites trying to
        solve various problem that I think solving will help others. Recently I
        made a Diary App in which you can add your entries which was password
        protected.
      </p>
      <button onClick={scrollToProjects}>Projects</button>
    </div>
  );
});

export default Home;
