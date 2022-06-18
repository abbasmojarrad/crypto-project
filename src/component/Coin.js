import React from "react";
//css
import styles from "./coin.module.css";
const Coin = ({ name, image, priceChange, marketCap, symbol, totalVolume }) => {
  return (
    <div className={styles.coin__container}>
      <div className={styles.coin__items}>
        <img src={image} alt="coin" />
      </div>
      <div className={styles.coin__items}>
        <span className={styles.name}>{name}</span>
      </div>
      <div className={styles.coin__items}>
        <span>{symbol}</span>
      </div>
      <div className={styles.coin__items}>
        <span>{marketCap.toLocaleString()}</span>
      </div>
      <div className={styles.coin__items}>
        <span
          className={priceChange > 0 ? styles.green__price : styles.red__price}
        >
          {priceChange.toFixed(2)}
        </span>
      </div>
      <div className={styles.coin__items}>
        <span>{totalVolume.toLocaleString()}</span>
      </div>
    </div>
  );
};
export default Coin;
