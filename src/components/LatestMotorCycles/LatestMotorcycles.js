import React from "react";
import styles from "./LatestMotorcycles.module.css";
import { LatestMotorcyclesCard } from "./LatestMotorcyclesCard";

export const LatestMotorcycles = () => {
  return (
    <section className={styles.latest_motorcycles}>
      <h2 className={styles.latest_motorcycles_title}>Check Out</h2>
      <h3 className={styles.latest_motorcycles_subtitle}>New Arrival</h3>
      <div className={styles.latest_motorcycles_cards}>
        <LatestMotorcyclesCard
          frontBackgroundImage={
            "https://marvel-b1-cdn.bc0a.com/f00000000269959/s18390.pcdn.co/wp-content/uploads/2023/02/Kawasaki-Featured-1000x500.png"
          }
          motorcycleName={"Kawasaki"}
        />
        <LatestMotorcyclesCard
          frontBackgroundImage={
            "https://robbreport.com/wp-content/uploads/2020/04/1-9.jpg?w=1000"
          }
          motorcycleName={"Vyrus"}
        />
        <LatestMotorcyclesCard
          frontBackgroundImage={
            "https://robbreport.com/wp-content/uploads/2021/10/bandit901.jpg?w=1000"
          }
          motorcycleName={"Bandit9"}
        />
        <LatestMotorcyclesCard
          frontBackgroundImage={
            "https://etimg.etb2bimg.com/photo/102535393.cms"
          }
          motorcycleName={"Honda"}
        />
        <LatestMotorcyclesCard
          frontBackgroundImage={
            "https://robbreport.com/wp-content/uploads/2020/04/1-9.jpg?w=1000"
          }
          motorcycleName={"Vyrus"}
        />
        <LatestMotorcyclesCard
          frontBackgroundImage={
            "https://robbreport.com/wp-content/uploads/2021/10/bandit901.jpg?w=1000"
          }
          motorcycleName={"Bandit9"}
        />
      </div>
    </section>
  );
};
