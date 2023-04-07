import { connect } from "react-redux";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
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

function Overview({ state, setDataToStore }) {
  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    if (query.get("success")) {
      // console.log('Order placed! You will receive an email confirmation.');
    }

    if (query.get("canceled")) {
      // console.log('Order canceled -- continue to shop around and checkout when you’re ready.');
    }
  }, []);

  const [data, setData] = useState({});

  const handleObjDispatch = (e, key) => {
    setData({ ...data, ...{ [key]: e.target.value } });
  };

  const sendAllParameter = async (store) => {
    const response = await fetch("/api/speedy", {
      method: "POST",
      body: JSON.stringify(store),
      headers: {
        "Content-Type": "application/json",
      },
    });

    await response.json();
  };

  const sendToBackAllData = () => {
    // inserisco tutti i dati nello store

    const x = setDataToStore(data);
    // faccio una POST
    sendAllParameter({ ...state, ...{ partenzaSpedizioneReducer: x.payload } });
  };


  const router = useRouter();
  const handleGoHomePage = () => {
    router.push("/");
  };

  if (Object.keys(state.dataReducer).length === 0) {
    return (
      <>
        <Nav />
        <button  className=" button-start button-overview-homePage" onClick={()=>handleGoHomePage()}>
          Vai nella Home Page
        </button>
      </>
    );
  }

  return (
    <>
      <Nav />

      <form
        id="myform"
        onSubmit={() => sendToBackAllData()}
        action="/api/checkout_sessions"
        method="POST"
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

const mapDispatchToProps = {
  setDataToStore,
};
//
const mapStateToProps = (state) => ({
  state,
});

export default connect(mapStateToProps, mapDispatchToProps)(Overview);
