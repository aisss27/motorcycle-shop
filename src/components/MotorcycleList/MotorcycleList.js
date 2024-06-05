import React, { useContext } from "react";
import MotorcycleCard from "./MotorcycleCard";
import styles from "./MotorcycleList.module.css";
import moto1 from "../../assets/moto1.png";
import moto2 from "../../assets/moto2.png";
import moto3 from "../../assets/moto3.png";
import moto4 from "../../assets/moto4.png";
import moto5 from "../../assets/moto5.png";
import moto6 from "../../assets/moto6.png";
import moto7 from "../../assets/moto7.png";
import moto8 from "../../assets/moto8.png";
import moto9 from "../../assets/moto9.png";
import moto10 from "../../assets/moto10.png";
import moto11 from "../../assets/moto11.jpg";
import moto12 from "../../assets/moto12.png";
import cart from "../../assets/cart.png";
import back from "../../assets/back.png";
import { Link } from "react-router-dom";
import { CartContext } from "../Cart/CartContext";

export const MotorcycleList = () => {
  const { cartItems, addToCart } = useContext(CartContext);

  return (
    <section className={styles.motorcycle_list}>
      <div className={styles.navigation}>
        <Link className={styles.back} to={"/"}>
          <img src={back} alt="" />
        </Link>
        <h2>Inventory</h2>
        <Link className={styles.cart} to="/cart">
          <img src={cart} alt="" />
          {cartItems.length > 0 && (
            <span className={styles.cart_count}>{cartItems.length}</span>
          )}
        </Link>
      </div>
      <div className={styles.motorcycle_cards}>
        <MotorcycleCard
          id={1}
          name={"Suzuki GSX-R1000"}
          price={"$6,899"}
          quantity={"1"}
          color={"Blue"}
          path={moto1}
          addToCart={addToCart}
        />
        <MotorcycleCard
          id={2}
          name={"Triumph Street Triple"}
          price={"$12,499"}
          quantity={"1"}
          color={"Black"}
          path={moto2}
          addToCart={addToCart}
        />
        <MotorcycleCard
          id={3}
          name={"Kawasaki Versys"}
          price={"$8,299"}
          quantity={"5"}
          color={"Green"}
          path={moto3}
          addToCart={addToCart}
        />
        <MotorcycleCard
          id={4}
          name={"Ducati 1199 Panigale"}
          price={"$12,899"}
          quantity={"2"}
          color={"Glossy Red"}
          path={moto4}
          addToCart={addToCart}
        />
        <MotorcycleCard
          id={5}
          name={"Yamaha MT-09"}
          price={"$8,499"}
          quantity={"8"}
          color={"Metallic Gray"}
          path={moto5}
          addToCart={addToCart}
        />
        <MotorcycleCard
          id={6}
          name={"Harley Davidson"}
          price={"$11,499"}
          quantity={"5"}
          color={"Vivid Black"}
          path={moto6}
          addToCart={addToCart}
        />
        <MotorcycleCard
          id={7}
          name={"Honda CB650 neo"}
          price={"$8,199"}
          quantity={"5"}
          color={"Chrome Red"}
          path={moto7}
          addToCart={addToCart}
        />
        <MotorcycleCard
          id={8}
          name={"Suzuki GSX-R1000"}
          price={"$11,299"}
          quantity={"1"}
          color={"White"}
          path={moto8}
          addToCart={addToCart}
        />
        <MotorcycleCard
          id={9}
          name={"BMW S1000RR"}
          price={"$12,300"}
          quantity={"2"}
          color={"Blue"}
          path={moto9}
          addToCart={addToCart}
        />
        <MotorcycleCard
          id={10}
          name={"Yamaha R7"}
          price={"$8,799"}
          quantity={"4"}
          color={"Yamaha Blue"}
          path={moto10}
          addToCart={addToCart}
        />
        <MotorcycleCard
          id={11}
          name={"Kawasaki Ninja 400"}
          price={"$5,599"}
          quantity={"4"}
          color={"Cordovan Red"}
          path={moto11}
          addToCart={addToCart}
        />
        <MotorcycleCard
          id={12}
          name={"Harley Davidson Street"}
          price={"$7,199"}
          quantity={"2"}
          color={"Blaze Red"}
          path={moto12}
          addToCart={addToCart}
        />
      </div>
    </section>
  );
};
