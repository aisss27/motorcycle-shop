import React from "react";
import styles from "./LatestMotorcycles.module.css";
import { Link } from "react-router-dom";

export const LatestMotorcyclesCard = ({
  frontBackgroundImage,
  motorcycleName,
}) => {
  return (
    <div className={styles.latest_motorcycles_card}>
      <label className={styles.label} id={styles.cardName}>
        <input className={styles.input} type="checkbox" />
        <div className={styles.card}>
          <div
            className={styles.front}
            style={{ backgroundImage: `url(${frontBackgroundImage})` }}
          >
            <h2 className={styles.motorcycleName}>{motorcycleName}</h2>
          </div>
          <div className={styles.back}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum,
              nam, quam. Aspernatur blanditiis debitis deleniti fugiat magnam
              minima repellat veniam! Aliquid animi, dolorum expedita fuga
              laboriosam magnam reiciendis reprehenderit tenetur?
            </p>
            <Link to={"/bikes"} className={styles.back_button}>
              GO TO
            </Link>
          </div>
        </div>
      </label>
    </div>
  );
};
