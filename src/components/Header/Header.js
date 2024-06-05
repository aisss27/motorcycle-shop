import React from "react";
import { Link } from "react-router-dom";
import styles from "../Main/Main.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img
          src="https://png.pngtree.com/png-vector/20230124/ourmid/pngtree-bike-rider-png-image_6572045.png"
          alt=""
        />
        <span>ROVER</span>
      </div>
      <nav>
        <ul>
          <li>
            <Link className={styles.link} to="/bikes">
              Bikes
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
