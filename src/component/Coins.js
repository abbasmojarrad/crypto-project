import React, { useEffect, useState } from "react";
//api
import { getData } from "../services/api";
//component
import Coin from "./Coin";
import loader from "../assets/loader.gif";
//helper function
import { filterCoin } from "../helper/functions";
//css
import styles from "./coins.module.css";

const Coins = () => {
  const [coins, setCoins] = useState([]);
  const [userCoin, setUserCoin] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData();
      setCoins(data);
    };
    fetchData();
  }, []);

  const changeHandler = (e) => {
    setUserCoin(e.target.value);
  };

  const filteredCoins = filterCoin(coins, userCoin);

  return (
    <div className={styles.container}>
      <input
        className={styles.search}
        type="text"
        placeholder="enter your coin"
        value={userCoin}
        onChange={changeHandler}
      />
      {coins.length ? (
        <div className={styles.coin__wrapper}  >
          {filteredCoins.map((coin) => (
            <Coin
              key={coin.id}
              name={coin.name}
              image={coin.image}
              marketCap={coin.market_cap}
              priceChange={coin.price_change_percentage_24h}
              symbol={coin.symbol}
              totalVolume={coin.total_volume}
            />
          ))}
        </div>
      ) : (
        <div className={styles.loading}>
          <img src={loader} alt="loading" />
        </div>
      )}
    </div>
  );
};

export default Coins;
