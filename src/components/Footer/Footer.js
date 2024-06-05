import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerSection}>
        <h4 className={styles.footerTitle}>Quick Links</h4>
        <a className={styles.footerLink} href="/">
          Home
        </a>
        <a className={styles.footerLink} href="/bikes">
          Bikes
        </a>
        <a className={styles.footerLink} href="/about">
          About Us
        </a>
        <a className={styles.footerLink} href="/contact">
          Contact
        </a>
      </div>
      <div className={styles.footerSection}>
        <h4 className={styles.footerTitle}>Follow Us</h4>
        <div className={styles.socialIcons}>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
      <div className={styles.footerSection}>
        <h4 className={styles.footerTitle}>Contact Us</h4>
        <p>Email: info@rover.kz</p>
        <p>Phone: +777 777 7777</p>
        <p>Address: 123 Rover Street, Bike City</p>
      </div>
    </footer>
  );
};

export default Footer;
