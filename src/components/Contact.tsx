import { forwardRef } from "react";
import styles from "./Contact.module.css";

const Contact = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div ref={ref} className={styles.contacts}>
      <h1>Contacts</h1>
      <div>
        <a href="https://www.linkedin.com/in/hichoudhary22">linkedIn</a>
        <a href="https://github.com/hichoudhary22">GitHub</a>
        <a href="mailto:hichoudhary22@gmail.com">Mail</a>
      </div>
    </div>
  );
});

export default Contact;
