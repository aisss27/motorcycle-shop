import React from "react";
import styles from "./Testimonials.module.css";

export const Testimonials = () => {
  return (
    <section className={styles.testimonials}>
      <h2 className={styles.testimonials_title}>What people say about us</h2>
      <div className={styles.container}>
        <input
          className={styles.input}
          type="radio"
          name="nav"
          id={styles.first}
          defaultChecked
        />
        <input
          className={styles.input}
          type="radio"
          name="nav"
          id={styles.second}
        />
        <input
          className={styles.input}
          type="radio"
          name="nav"
          id={styles.third}
        />

        <label
          htmlFor={styles.first}
          className={`${styles.first} ${styles.label}`}
        ></label>
        <label
          htmlFor={styles.second}
          className={`${styles.second} ${styles.label}`}
        ></label>
        <label
          htmlFor={styles.third}
          className={`${styles.third} ${styles.label}`}
        ></label>

        <div className={`${styles.one} ${styles.slide}`}>
          <blockquote>
            <span className={`${styles.quotes} ${styles.leftq}`}>&ldquo;</span>{" "}
            Rover Motorcycles is fantastic! They have a great selection of bikes
            and the staff is super knowledgeable and friendly. They helped me
            find the perfect bike and made the whole process enjoyable. Highly
            recommend!{" "}
            <span className={`${styles.rightq} ${styles.quotes}`}>
              &bdquo;{" "}
            </span>
          </blockquote>
          <img
            className={styles.image}
            src="https://static.vecteezy.com/system/resources/previews/011/459/666/original/people-avatar-icon-png.png"
            width="100"
            height="130"
            alt="Avatar"
          />
          <h2>Steve Kruger</h2>
          <h6>UI/UX Designer at Woof Design Studio</h6>
        </div>

        <div className={`${styles.two} ${styles.slide}`}>
          <blockquote>
            <span className={`${styles.quotes} ${styles.leftq}`}>&ldquo;</span>{" "}
            Rover Motorcycles exceeded my expectations! Their staff is
            incredibly helpful, and their selection of bikes is impressive. I
            found exactly what I was looking for, and the buying process was a
            breeze. I'll definitely be recommending them to all my friends!{" "}
            <span className={`${styles.rightq} ${styles.quotes}`}>
              &bdquo;{" "}
            </span>
          </blockquote>
          <img
            className={styles.image}
            src="https://static.vecteezy.com/system/resources/previews/011/459/674/original/people-avatar-icon-png.png"
            width="100"
            height="130"
            alt="Avatar"
          />
          <h2>John Doe</h2>
          <h6>Developer Relations at Woof Studios</h6>
        </div>

        <div className={`${styles.three} ${styles.slide}`}>
          <blockquote>
            <span className={`${styles.quotes} ${styles.leftq}`}>&ldquo;</span>{" "}
            Rover Motorcycles is a gem! The team there made my bike-buying
            experience seamless and enjoyable. Their expertise and friendly
            service are unmatched. I'm thrilled with my purchase and can't wait
            to hit the road. Highly recommend them to all motorcycle
            enthusiasts!s{" "}
            <span className={`${styles.rightq} ${styles.quotes}`}>
              &bdquo;{" "}
            </span>
          </blockquote>
          <img
            className={styles.image}
            src="https://static.vecteezy.com/system/resources/previews/011/459/668/original/people-avatar-icon-png.png"
            width="100"
            height="130"
            alt="Avatar"
          />
          <h2>Steve Stevenson</h2>
          <h6>CEO Woof Web Design Studios</h6>
        </div>
      </div>
    </section>
  );
};
