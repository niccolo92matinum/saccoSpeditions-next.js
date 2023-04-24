
import { connect } from "react-redux";

import PreviewPage from "./PreviewPage";

function Spedizione({ name, state, handle}) {
  const renderAuthSelect = () => {
    if (state.choiseReducer.nome === "DHL") {
      return <option>Spedizione a Domicilio</option>;
    }
    return <option>Spedizione in sede</option>;
  };

  const pickUpDate = new Date();
  pickUpDate.setDate(pickUpDate.getDate() + 1);







  return (
 
    <div className="container-spedizione">
      <div className="child-container-partenza">
        <h4 className="title-patenzaSpedizione">{name}</h4>
        <div className="master-children-partenza">
          <div className="children-partenza">
            <label htmlFor="cars" className="control-label" >
              Ritiro
           
            <select
           
              type="number"
              className="form-select"
              defaultValue=""
              disabled
            >
              {renderAuthSelect()}
            </select>
            </label>
          </div>
        </div>
        <hr />
        <div className="master-children-partenza">
          <div className="children-partenza">
    
            <label htmlFor="name" className="control-label">
              Nome
            
            <input
              maxLength="20"
              className="form-control"
              defaultValue={state.partenzaSpedizioneReducer.nameDispatcher}
              type="text"
              name="name"
              onChange={(e) => handle(e, "nameDispatcher")}
            />
            </label>

          </div>
          <div className="children-partenza">
            <label htmlFor="cognomeS" className="control-label">
              Cognome
            
            <input
              placeholder=""
              className="form-control"
              defaultValue={state.partenzaSpedizioneReducer.surnameDispatcher}
              id="cognomeS"
              required
              type="text"
              maxLength="20"
              onChange={(e) => {
                handle(e, "surnameDispatcher");
              }}
            />
            </label>
          </div>
        </div>

        <div className="master-children-partenza">
          <div className="children-partenza">
            <label htmlFor="cittaS" className="control-label">
              Città
           
            <input
              id="cittaS"
              placeholder=""
              className="form-control"
              defaultValue={state.partenzaSpedizioneReducer.cityDispatcher}
              maxLength="25"
              type="text"
              onChange={(e) => {
                handle(e, "cityDispatcher");
              }}
            />
             </label>
          </div>
          <div className="children-partenza">
            <label htmlFor="viaS" className="control-label">
              Via
            
            <input
              id="viaS"
              placeholder=""
              className="form-control"
              defaultValue={state.partenzaSpedizioneReducer.streetDispatcher}
              maxLength="25"
              required
              type="text"
              onChange={(e) => {
                handle(e, "streetDispatcher");
              }}
            />
            </label>
          </div>
        </div>

        <div className="master-children-partenza">
          <div className="children-partenza">
            <label htmlFor="telS" className="control-label">
              Telefono
          
            <input
              placeholder=""
              className="form-control"
              defaultValue={state.partenzaSpedizioneReducer.phoneDispatcher}
             
              required
              type="tel" id="phone" name="phone"
              pattern="[0-9]{10}"
            
              onChange={(e) => {
                handle(e, "phoneDispatcher");
              }}
              
            />
              </label>
          </div>
          <div className="children-partenza">
            
            <label htmlFor="emailS" className="control-label">
              Email address
            <input
              type="email"
              className="form-control"
              id="emailS"
              aria-describedby="emailHelp"
              defaultValue={state.partenzaSpedizioneReducer.emailDispatcher}
              required
              onChange={(e) => handle(e, "emailDispatcher")}
            />
             </label>
           
          </div>
        </div>
       
        <div className="container-button fullscreen-hidden">
          <PreviewPage  />
          
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
