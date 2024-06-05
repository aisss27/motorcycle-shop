import React from "react";
import styles from "./Map.module.css";
export const MapAndSubscribe = () => {
  return (
    <section className={styles.map}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2906.950208994738!2d76.93230577650571!3d43.231503571125295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38836f2771ca82a7%3A0xc62caaab4fb45636!2sDucati%20Almaty!5e0!3m2!1sru!2skz!4v1717493888553!5m2!1sru!2skz"
        width="800"
        height="450"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );
};
