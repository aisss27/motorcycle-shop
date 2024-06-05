import React from "react";
import about from "../../assets/about.png";
import styles from "./About.module.css";

export const AboutUs = () => {
  return (
    <section className={styles.about}>
      <img src={about} alt="" />
      <div className={styles.about_text}>
        <h2>Why us?</h2>
        <p>
          Since 2019, twowheelers sells hundreds of motorcycles that are hot for
          the roads for a reasonable price. From low engine size to bigger
          engine, we have all. Want to enjoy the sunset on the road or you’re
          just a speed freak who likes to race against your friends on the
          racetrack? You’ll find the motorcycle that suits you.
        </p>
        <p>
          Our employees are the best on the field with many experiences on a
          motorcycle and tons of knowledge about it, so come visit us and do not
          hesitate to ask us questions. We welcome those who are new with a
          motorcycle and wonder how it feels to explore places on a motorcycle.
        </p>
      </div>
    </section>
  );
};
