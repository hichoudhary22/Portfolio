import mathAppAdditionPic from "../assets/mathAppAddition.png";
import mathAppLearnTablePic from "../assets/mathAppLearnTablePic.png";
import mathAppMixedCalculationPic from "../assets/mathAppMixedCalculationPic.png";
import mathAppMultiplicationPic from "../assets/mathAppMultiplicationPic.png";
import styles from "../components/Projects.module.css";
export default function MathPractice() {
  return (
    <>
      <p className={styles.title}>
        <a href="https://hichoudhary22.github.io/math_practice/">
          Math Practice
        </a>
      </p>
      <p className={styles.description}>
        used <span>vanilla JS</span> and <span>HTML</span> to create this
        project
      </p>
      <div className={styles.container}>
        <div className={styles.card}>
          <p>
            practice <span>addition</span>
          </p>
          <img src={mathAppAdditionPic} alt="" />
        </div>
        <div className={styles.card}>
          <p>
            practice <span>multiplication</span>
          </p>
          <img src={mathAppMultiplicationPic} alt="" />
        </div>
        <div className={styles.card}>
          <p>
            practice <span>table</span>
          </p>
          <img src={mathAppLearnTablePic} alt="" />
        </div>
        <div className={styles.card}>
          <p>
            practice <span>mix calculation</span>
          </p>
          <img src={mathAppMixedCalculationPic} alt="" />
        </div>
      </div>
    </>
  );
}
