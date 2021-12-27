import React, {useEffect} from "react";
import './App.css';
import Header from './Header'
import Home from './Home'
import Checkout from './Checkout'
import Login from './Login'
import Payment from './Payment'
import Orders from './Orders'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {auth} from './firebase'
import {useStateValue} from './StateProvider'
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"

const promise = loadStripe('pk_test_51IYsjMSEJ3Ss22qLKI5K3XqEWehJyTsOBev7rfNYXtShBe5pwid0Lqbf5Np3q2qj4ytywCWNNZAeOynNmu26Q1xi00zqMEn2qc')

function App() {

  const [{}, dispatch]=useStateValue()

  useEffect(() => {
    let isMounted=true
    // will only run once when the app component loads...
    if(isMounted) {
      auth.onAuthStateChanged(authUser => {
        console.log('The user is : ', authUser)
        if(authUser) {
          // the user just logged in or was logged in
          dispatch({
            type: 'SET_USER',
            user: authUser
          })
        } else {
          // the user is logged out
          dispatch({
            type: 'SET_USER',
            user: null
          })
        }
      })
    }
    return () => { isMounted = false }
  },[])

  return (
    // BEM convention
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>

          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>

          <Route path="/orders">
            <Header />
            <Orders />
          </Route>

          <Route path="/">
            <Header />
            <Home />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
