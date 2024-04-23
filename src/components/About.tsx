import { forwardRef } from "react";
import styles from "./About.module.css";

const About = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div ref={ref} className={styles.about}>
      <h1> About</h1>
      <div className={styles.container}>
        <p>
          I am constantly building new projects, to improve my skillset. They
          say "Practice makes a man Perfect". So I am on a journey to make
          myself PERFECT. Would you like to join me...? So far I have acquired
          these skills show here. But why stop here? When you have learnt the
          art of teaching yourself "THEN SKY IS THE LIMIT". So I invite you to
          join me in my journey...✌🏻
        </p>
        <div>
          <h3>my skillset</h3>
          <h4>HTML</h4>
          <h4>CSS</h4>
          <h4>Javascript</h4>
          <h4>MongoDB</h4>
          <h4>Express</h4>
          <h4>React</h4>
          <h4>Node</h4>
        </div>
      </div>
    </div>
  );
});

export default About;
