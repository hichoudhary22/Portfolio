import diaryAppPasswordProtected from "../assets/diaryAppPasswordProtected.png";
import diaryAppFilterByDate from "../assets/diaryAppFilterByDate.png";
import diaryAppSearchEntries from "../assets/diaryAppSearchEntries.png";
import diaryAppPC from "../assets/diaryAppPC.png";
import diaryAppAllEntries from "../assets/diaryAppAllEntries.png";

import styles from "../components/Projects.module.css";
export default function DiaryApp() {
  return (
    <>
      <p className={styles.title}>
        <a href="https://diary-app-4ipf.onrender.com/">Diary App</a>
      </p>
      <p className={styles.description}>
        used <span>MERN</span> stack to create this project
      </p>
      <div className={styles.container}>
        <div className={styles.card}>
          <p>
            your data is <span>password protected</span>
          </p>
          <img src={diaryAppPasswordProtected} alt="" />
        </div>
        {/* <div className={styles.card}>
          <p>
            use Email to as <span>unique Identifier</span> <span>sign up</span>
          </p>
          <img src={mathAppAdditionPic} alt="" />
        </div> */}
        <div className={styles.card}>
          <p>
            can access on <span>pc</span> also
          </p>
          <img src={diaryAppPC} alt="" />
        </div>
        <div className={styles.card}>
          <p>
            filter data by <span>date</span>
          </p>
          <img src={diaryAppFilterByDate} alt="" />
        </div>
        <div className={styles.card}>
          <p>
            search your <span>diary</span>
          </p>
          <img src={diaryAppSearchEntries} alt="" />
        </div>
        <div className={styles.card}>
          <p>
            see all <span>entries</span> at once
          </p>
          <img src={diaryAppAllEntries} alt="" />
        </div>
      </div>
    </>
  );
}
