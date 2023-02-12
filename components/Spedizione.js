/* eslint-disable jsx-a11y/label-has-associated-control */

import { connect } from "react-redux";
import PreviewPage from "./PreviewPage";


function Spedizione({ name, state, handle,boolean, allInfo, setDataToStore}) {


  const renderAuthSelect = () => {
    if (state.choiseReducer.nome === "DHL") {
      return <option>Spedizione a Domicilio</option>;
    } 
      return <option>Spedizione in sede</option>;
    
  };

  const pickUpDate = new Date();
  pickUpDate.setDate(pickUpDate.getDate() + 1);
  

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
    
      const x = setDataToStore(allInfo);
      // faccio una POST
      sendAllParameter({ ...state, ...{ partenzaSpedizioneReducer: x.payload } });
    
    
    };

  return (
    <div className="container-spedizione">
        <div className="child-container-partenza">
          <h4 className="title-patenzaSpedizione">{name}</h4>
          <div className="master-children-partenza">
            <div className="children-partenza">
              <label className="control-label" htmlFor="cars" >
                Ritiro
              </label>
              <select type="number" className="form-select" defaultValue="" disabled>
                {renderAuthSelect()}
              </select>
            </div>
          </div>
          <hr />
          <div className="master-children-partenza">
            <div className="children-partenza">
              <label className="control-label">Nome</label>
              <input
                placeholder=""
                className="form-control"
                defaultValue=""
                onChange={(e) => handle(e, "nameDispatcher")}
              />
            </div>
            <div className="children-partenza">
              <label className="control-label">Cognome</label>
              <input
                placeholder=""
                className="form-control"
                defaultValue=""
                onChange={(e) => handle(e, "surnameDispatcher")}
              />
            </div>
          </div>

          <div className="master-children-partenza">
            <div className="children-partenza">
              <label className="control-label">Cità</label>
              <input
                placeholder=""
                className="form-control"
                defaultValue=""
                onChange={(e) => handle(e, "cityDispatcher")}
              />
            </div>
            <div className="children-partenza">
              <label className="control-label">Via</label>
              <input
                placeholder=""
                className="form-control"
                defaultValue=""
                onChange={(e) => handle(e, "streetDispatcher")}
              />
            </div>
          </div>

          <div className="master-children-partenza">
            <div className="children-partenza">
              <label className="control-label">Telefono</label>
              <input
                placeholder=""
                className="form-control"
                defaultValue="telefono"
                onChange={(e) => handle(e, "phoneDispatcher")}
              />
            </div>
            <div className="children-partenza">
             
              <label className="control-label">Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                defaultValue=""
                onChange={(e) => handle(e, "emailDispatcher")}
              />
            </div>
          </div>
          <div className="container-button fullscreen-hidden">
        <PreviewPage prova={sendToBackAllData} boolean={boolean} />
        
        </div>
        </div>
      </div>
  );
}

export const setDataToStore = (data) => ({
  type: "SAVE_PARTENZA_SPEDIZIONE_DATA",
  payload: data,
});

const mapDispatchToProps = {
  setDataToStore,
};

export default connect(null, mapDispatchToProps)(Spedizione);
