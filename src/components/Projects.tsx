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
          <h3>Math Practice</h3>
          <p>used vanila JS and HTML to create this project</p>
          <img src={mathAppPic} alt="" />
        </div>
        <div className={styles.card}>
          <h3>Diary App</h3>
          <p>used MERN Stack to create this app</p>
          <img src={diaryAppPic} alt="" />
        </div>
      </div>
    </div>
  );
});

export default Projects;
