import React from 'react';
import { Switch, Route } from "react-router-dom";


import Header from "./components/Header";
import BurgerBuilder from "./containers/BurgerBuilder";
import Orders from "./containers/Orders";
import SignUp from "./containers/Signup";
import SignIn from "./containers/Signin";
import Checkout from "./containers/Checkout";



function App() {
  return (
    <div className="App">
      <Header />
      <main>
          <Switch>
              <Route path="/" exact component={BurgerBuilder} />
              <Route path="/orders" exact component={Orders} />
              <Route path="/sign-in" exact component={SignIn} />
              <Route path="/sign-up" exact component={SignUp} />
              <Route path="/checkout" exact component={Checkout} />
          </Switch>
      </main>
    </div>
  );
}

export default App;
