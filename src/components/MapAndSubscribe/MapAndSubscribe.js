import React from "react";
import styles from "./MapAndSubscribe.module.css";
export const MapAndSubscribe = () => {
  return (
    <section className={styles.map_subscribe}>
      <iframe
        className={styles.map}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2906.950208994738!2d76.93230577650571!3d43.231503571125295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38836f2771ca82a7%3A0xc62caaab4fb45636!2sDucati%20Almaty!5e0!3m2!1sru!2skz!4v1717493888553!5m2!1sru!2skz"
        width="800"
        height="450"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className={styles.subscribe}>
        <img
          src="https://68.media.tumblr.com/abc925865de6e5f091dc7721315db6ea/tumblr_inline_orpfllNWRK1v00f4n_540.png"
          alt="Email"
        />
        <h2>subscribe</h2>
        <p> to our newsletter to get updates about our new products </p>
        <form>
          <input
            className={styles.input}
            type="email"
            name="Email"
            placeholder="Enter your email address"
            autoFocus
            autoComplete
            required
            checked
          />
          <button className={styles.button}>Subscribe</button>
        </form>
      </div>
    </section>
  );
};
