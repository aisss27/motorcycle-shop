import React from "react";
import styles from "./Main.module.css";
import { Header } from "../Header/Header";
import { MotoCharacteristics } from "./MotoCharacteristics";
import { Link } from "react-router-dom";

export const Main = () => {
  return (
    <section className={styles.hero}>
      <Header />
      <h1>Welcome to our motorcycle shop</h1>
      <MotoCharacteristics />
      <Link className={styles.browse_btn} to="/bikes">
        BROWSE
      </Link>
    </section>
  );
};
