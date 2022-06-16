import React from "react";
//css
import styles from './coin.module.css'
const Coin = ({
  name,
  image,
  marketCapRank,
  marketCap,
  symbol,
  totalVolume,
}) => {
  return (
    <div className={styles.coin__container}>
      <img src={image} alt="coin" />
      <h3>{name}</h3>
      <p>{symbol}</p>
      <p>{marketCap}</p>
      <p>{totalVolume}</p>
      <p>{marketCapRank}</p>
    </div>
  );
};
export default Coin;
