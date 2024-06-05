import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import styles from "./Cart.module.css";
import { Link } from "react-router-dom";
import back from "../../assets/back.png";

export const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  return (
    <div>
      <div className={styles.navigation}>
        <Link className={styles.back} to={"/bikes"}>
          <img src={back} alt="" />
        </Link>
        <h2 className={styles.title}>Cart</h2>
      </div>
      {cartItems.length === 0 ? (
        <p className={styles.empty}>Your cart is empty</p>
      ) : (
        cartItems.map((item, index) => (
          <div key={index} className={styles.card}>
            <img src={item.path} alt={item.name} className={styles.image} />
            <div className={styles.details}>
              <p className={styles.name}>{item.name}</p>
              <p className={styles.price}>{item.price}</p>
            </div>
            <span
              className={styles.remove}
              onClick={() => removeFromCart(index)}
            >
              Remove
            </span>
          </div>
        ))
      )}
    </div>
  );
};
