import mathAppAdditionPic from "../assets/mathAppAddition.png";
import sample_mflixLanding from "../assets/sample_mflixLanding.png";
import sample_mflix_homepage from "../assets/sample_mflix_homepage.png";
import sample_mflix_Mongo from "../assets/sample_mflix_Mongo.png";
import sample_mflix_TMDB from "../assets/sample_mflix_TMDB.png";
import sample_mflix_youtube from "../assets/sample_mflix_youtube.png";

import styles from "../components/Projects.module.css";
export default function Sample_Mflix() {
  return (
    <>
      <p className={styles.title}>
        <a href="https://sample-mflix-sigma.vercel.app/">Sample_Mflix</a>
      </p>
      <p className={styles.description}>
        used <span>NextJS</span> to create this project
      </p>
      <div className={styles.container}>
        <div className={styles.card}>
          <p>
            welcome screen <span>landing page</span>
          </p>
          <img src={sample_mflixLanding} alt="" />
        </div>
        <div className={styles.card}>
          <p>
            <span>home screen</span>
          </p>
          <img src={sample_mflix_homepage} alt="" />
        </div>
        <div className={styles.card}>
          <p>
            search a <span>movie</span> over <span>Mongo_DB</span>
          </p>
          <img src={sample_mflix_Mongo} alt="" />
        </div>
        <div className={styles.card}>
          <p>
            search a <span>movie</span> over <span>TMDB</span>
          </p>
          <img src={sample_mflix_TMDB} alt="" />
        </div>
        <div className={styles.card}>
          <p>
            watch <span>trailer</span> from youtube and related media directily
          </p>
          <img src={sample_mflix_youtube} alt="" />
        </div>
      </div>
    </>
  );
}
