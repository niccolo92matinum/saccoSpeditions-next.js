import { connect } from "react-redux";
import { useState } from "react";
// eslint-disable-next-line import/named
import Partenza from "../components/Partenza";
import Spedizione from "../components/Spedizione";
import Riepilogo from "../components/Riepilogo";
import Nav from "../components/Nav";

function Overview({ state }) {
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
  
      <div className="overview-container">
        
        <Partenza name="Partenza" state={state} handle={handleObjDispatch} />

        <Riepilogo state={state} allInfo={data} boolean={boolean} />
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
      
    </>
  );
}
//
const mapStateToProps = (state) => ({
  state,
});

export default connect(mapStateToProps, null)(Overview);
