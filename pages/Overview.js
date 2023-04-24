import { connect } from "react-redux";
import { useState, useEffect } from "react";

import { loadStripe } from "@stripe/stripe-js";

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

function Overview({ state, setDataToStore,setLocalStorageToStorepartenzaSpedizioneReducer,setLocalStorageToStoredataReducer}) {

  useEffect(() => {
    if(Object.keys(state.dataReducer
      ).length !== 0){
      localStorage.setItem('items', JSON.stringify(state));
    }
    
  }, [state])

  useEffect(() => {
  
      const items = JSON.parse(localStorage.getItem('items'));
      if (items) {
        setLocalStorageToStorepartenzaSpedizioneReducer(items);
        setLocalStorageToStoredataReducer(items)
       
      } 

   
    // eslint-disable-next-line react-hooks/exhaustive-deps
},[]);
 
  const [data, setData] = useState({});

  const handleObjDispatch = (e, key) => {
    setData({ ...data, ...{ [key]: e.target.value } });
  };




  const handleClick = async (e, store) => {
    // Get Stripe.js instance
    e.preventDefault()
   
    const stripe = await stripePromise;

    // Call your backend to create the Checkout Session
    const response = await fetch('/api/checkout_sessions', {
      method: 'POST',
       body:JSON.stringify(store),
    });
   
    const session = await response.json();

    // When the customer clicks on the button, redirect them to Checkout.
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      // If `redirectToCheckout` fails due to a browser or network
      // error, display the localized error message to your customer
      // using `result.error.message`.
    }
  };

  const sendToBackAllData = async (e) => {
    // inserisco tutti i dati nello store

    const x = setDataToStore(data);
    await x
    // faccio una POST
    handleClick(e,state.choiseReducer);
  };


 


  return (
    <>
      <Nav />

      <form
        id="myform"
        onSubmit={(e)=>sendToBackAllData(e)}
       
       
      >
        <div className="overview-container">
          <Partenza name="Partenza" state={state} handle={handleObjDispatch} />

          <Riepilogo state={state} allInfo={data} />
        </div>
        <div className="overview-container-spedizione">
          <Spedizione
            name="Spedizione"
            state={state}
            handle={handleObjDispatch}
            allInfo={data}
          />
        </div>
      </form>
    </>
  );
}

const setDataToStore = (data) => ({
  type: "SAVE_PARTENZA_SPEDIZIONE_DATA",
  payload: data,
});

const setLocalStorageToStorepartenzaSpedizioneReducer = (data) => ({
  type:"SAVE_LOCAL_STORAGE_TO_STORE",
  payload:data,
})

const setLocalStorageToStoredataReducer = (data) => ({
  type:"SAVE_LOCAL_STORAGE_TO_STORE",
  payload:data,
})



const mapDispatchToProps = {
  setDataToStore,
  setLocalStorageToStorepartenzaSpedizioneReducer,
  setLocalStorageToStoredataReducer,


};
//
const mapStateToProps = (state) => ({
  state,
});

export default connect(mapStateToProps, mapDispatchToProps)(Overview);
