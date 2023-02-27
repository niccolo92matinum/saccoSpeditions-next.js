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

  const sendToBackAllData = (e) => {
    // inserisco tutti i dati nello store
    e.preventDefault()
      const x = setDataToStore(allInfo);
      // faccio una POST
      sendAllParameter({ ...state, ...{ partenzaSpedizioneReducer: x.payload } });
    
    
    };


    const valdationFunction = (inp, bu) =>{
      // inp =  input ID 
      // bu =  button ID
      const input = document.getElementById(inp);
      const inputButton =  document.getElementById(bu)
    
     
       input.onkeyup = ( ) => {
          inputButton.click();        
      }
    
    }
    
    const prevent = (e) =>{
       e.preventDefault()
    }
  

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
              <form  onSubmit={(e)=>prevent(e)} >
              <label htmlFor="nameS" className="control-label">Nome</label>
              <input
                placeholder=""
                maxLength="20"
                className="form-control"
                defaultValue=""
                type="text"
                required
                id="nameS"
                onChange={(e) => {handle(e, "nameDispatcher");valdationFunction("nameS","butNaS")}}
              />
               <input type="submit" hidden id="butNaS"/>
               </form>
            </div>
            <div className="children-partenza">
              <form onSubmit={(e)=>prevent(e)} >
              <label htmlFor="cognomeS" className="control-label">Cognome</label>
              <input
                placeholder=""
                className="form-control"
                defaultValue=""
                id="cognomeS"
                required
                type="text"
                maxLength="20"
                onChange={(e) => {handle(e, "surnameDispatcher");valdationFunction("cognomeS","butCoS")}}
              />
              <input type="submit" hidden id="butCoS"/>
              </form>
            </div>
          </div>

          <div className="master-children-partenza">
            <div className="children-partenza">
              <form onSubmit={(e)=>prevent(e)} >
              <label htmlFor="cittaS" className="control-label">Città</label>
              <input
                id="cittaS"
                placeholder=""
                className="form-control"
                defaultValue=""
                maxLength="25"
                type="text"
                onChange={(e) => {handle(e, "cityDispatcher");valdationFunction("cittaS","butCittaS")}}
              />
              <input type="submit" hidden id="butCittaS"/>
              </form>
            </div>
            <div className="children-partenza">
              <form onSubmit={(e)=>prevent(e)}  >
              <label htmlFor="viaS" className="control-label">Via</label>
              <input
                id="viaS"
                placeholder=""
                className="form-control"
                defaultValue=""
                maxLength="25"
                required
                type="text"
                onChange={(e) => {handle(e, "streetDispatcher");valdationFunction("viaS","butViaS")}}
              />
              <input type="submit" hidden id="butViaS"/>
              </form>
            </div>
          </div>

          <div className="master-children-partenza">
            <div className="children-partenza">
              <form onSubmit={(e)=>prevent(e)}>
              <label htmlFor="telS" className="control-label">Telefono</label>
              <input
                placeholder=""
                className="form-control"
                defaultValue="telefono"
                id="telS"
                required
                maxLength="10"
                onChange={(e) => {handle(e, "phoneDispatcher");valdationFunction("telS","butTelS")}}
                type="tel"
              />
              <input type="submit" hidden id="butTelS"/>
              </form>
            </div>
            <div className="children-partenza">
             <form onSubmit={(e)=>prevent(e)}>
              <label htmlFor="emailS" className="control-label">Email address</label>
              <input
                type="email"
                className="form-control"
                id="emailS"
                aria-describedby="emailHelp"
                defaultValue=""
                required
                onChange={(e) => {handle(e, "emailDispatcher");valdationFunction("emailS","butEmS")}}
              />
              <input type="submit" hidden id="butEmS"/>
            </form>
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
