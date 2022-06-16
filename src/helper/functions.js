export const filterCoin = (coins, userCoin) => {
  return coins.filter(
    ({name,symbol}) => 
      name.toLowerCase().startsWith(userCoin.toLowerCase()) ||
      symbol.toLowerCase().startsWith(userCoin.toLowerCase())
  );
};
