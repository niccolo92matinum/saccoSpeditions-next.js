import { connect } from "react-redux";
import { useState } from "react";
// eslint-disable-next-line import/named
import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import Partenza from "../components/Partenza";
import Spedizione from "../components/Spedizione";
import Riepilogo from "../components/Riepilogo";
import Nav from "../components/Nav";





// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
// eslint-disable-next-line no-unused-vars
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

function Overview({ state }) {


  React.useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    if (query.get('success')) {
     // console.log('Order placed! You will receive an email confirmation.');
    }

    if (query.get('canceled')) {
      // console.log('Order canceled -- continue to shop around and checkout when you’re ready.');
    }
  }, []);


  const [data, setData] = useState({});

  const checkIfInputsAreFilled = new Set(
    Object.values(data).filter((x) => x === "")
  ).has("");

  const checkIfInputsAreeAllPresent = Object.values(data).length === 12;

  const boolean = !checkIfInputsAreFilled && checkIfInputsAreeAllPresent;



  const handleObjDispatch = (e, key) => {
   
    setData({ ...data, ...{ [key]: e.target.value } });
   
  };


 

  return (
    <>
      <Nav />
      <form id="myform" action="/api/checkout_sessions" method="POST">
      <div className="overview-container">
      
        <Partenza name="Partenza" state={state} handle={handleObjDispatch} />

        <Riepilogo state={state} allInfo={data} boolean={boolean}  />
      </div>
      <div className="overview-container-spedizione">
        <Spedizione
          name="Spedizione"
          state={state}
          handle={handleObjDispatch}
          allInfo={data}
          boolean={boolean}
         
        />
      
      </div>
      </form>
    </>
  );
}
//
const mapStateToProps = (state) => ({
  state,
});

export default connect(mapStateToProps, null)(Overview);
