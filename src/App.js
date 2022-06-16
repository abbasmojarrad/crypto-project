import Coins from "./component/Coins";
import { Switch, Route, Redirect } from "react-router-dom";

const App = () => {
  return (
    <Switch>
      <Route path="/" exact component={Coins} />
      <Redirect to="/" component={Coins} />
    </Switch>
  );
};

export default App;
