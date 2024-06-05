import React from "react";
import styles from "./MotorcycleList.module.css";

const MotorcycleCard = ({
  id,
  name,
  price,
  path,
  quantity,
  color,
  addToCart,
}) => {
  const handleAddToCart = () => {
    addToCart({ id, name, price, path, quantity, color });
  };

  return (
    <div className={styles.product_card}>
      <img src={path} alt="moto" />
      <h2>{name}</h2>
      <h3>{price}</h3>
      <div className={styles.colorAndStock}>
        <div className={styles.stock}>
          <p>Stock:</p>
          <p>{quantity}</p>
        </div>
        <div className={styles.color}>
          <p>Color:</p>
          <p>{color}</p>
        </div>
      </div>
      <button className={styles.btn} onClick={handleAddToCart}>
        To Cart
      </button>
    </div>
  );
};

export default MotorcycleCard;
