import mathAppPic from "../assets/mathApp.png";
import diaryAppPic from "../assets/diaryApp.png";
import styles from "./Projects.module.css";
import { forwardRef } from "react";

const Projects = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div ref={ref} className={styles.projects}>
      <h1>My Projects</h1>
      <div className={styles.container}>
        <div className={styles.card}>
          <a href="https://hichoudhary22.github.io/math_practice/">
            Math Practice
          </a>
          <p>used vanilla JS and HTML to create this project</p>
          <img src={mathAppPic} alt="" />
        </div>
        <div className={styles.card}>
          <a href="https://diary-app-4ipf.onrender.com/">Diary App</a>
          <p>used MERN Stack to create this app</p>
          <img src={diaryAppPic} alt="" />
        </div>
      </div>
    </div>
  );
});

export default Projects;
