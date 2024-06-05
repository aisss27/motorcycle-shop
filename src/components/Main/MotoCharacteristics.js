import React from "react";
import styles from "./Main.module.css";

export const MotoCharacteristics = () => {
  return (
    <div className={styles.moto_characteristics}>
      <div className={styles.moto_characteristics_card}>
        <span className={styles.characteristics_left}>TOP SPEED</span>
        <div className={styles.characteristics_right}>
          <span>6-SPEED CONSTANT-MESH</span>
          <span>169 MPH</span>
          <span>272 KM/H</span>
        </div>
      </div>
      <div className={styles.moto_characteristics_card}>
        <span className={styles.characteristics_left}>POWER</span>
        <div className={styles.characteristics_right}>
          <span>121 kW</span>
          <span>162 HP</span>
          <span>9.250 RPM</span>
        </div>
      </div>
      <div className={styles.moto_characteristics_card}>
        <span className={styles.characteristics_left}>FUEL CAPACITY</span>
        <div className={styles.characteristics_right}>
          <span>4.5 US GAL</span>
          <span>17 L</span>
          <span>3.7 IMP GAL</span>
        </div>
      </div>
    </div>
  );
};
