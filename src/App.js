import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import "./App.css";
import Checkout from "./Checkout";
import Login from "./Login";
import Payment from './Payment'
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise= loadStripe('pk_test_51HcP5zBPxYTEXn4DFXMvLNCqNV6hj4eMt7B8JhRq7g5XRUy8fbSc5t98emdJQrI1ISI22zvsRumvjrcaR0ytNy2400CLAZBmjE');

function App() {
  const [{ user }, dispatch] = useStateValue();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });

    return () => {
      //any cleanup operaion goes here
      unsubscribe();
    };
  }, []);

  console.log("User is ====> ", user);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/" exact>
            <Header />
            <Home />
          </Route>

          <Route path='/payment' >
            <Header/>
            <Elements stripe= {promise}>
              <Payment/>
            </Elements>
           
         
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
