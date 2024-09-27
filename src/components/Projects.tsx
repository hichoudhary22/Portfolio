import styles from "./Projects.module.css";
import { forwardRef } from "react";
import MathPractice from "../projects/MathPractice";
import DiaryApp from "../projects/DiaryApp";
import Sample_Mflix from "../projects/Sample_Mflix";

const Projects = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div ref={ref} className={styles.projects}>
      <h1>My Projects</h1>
      <MathPractice />
      <DiaryApp />
      <Sample_Mflix />
    </div>
  );
});

export default Projects;
