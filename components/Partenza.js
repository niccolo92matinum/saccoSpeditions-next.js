
export default function Partenza({ name, state, handle }) {

  const pickUpDate = new Date();
  pickUpDate.setDate(pickUpDate.getDate() + 1);
  const finalPickUpDate = pickUpDate.toISOString().substring(0, 10);

  const renderAuthSelect = () => {
    if (state.choiseReducer.nome === "DHL") {
      return <option>Ritiro a Domicilio</option>;
    } 
      return <option>Ritiro in sede</option>;
    
  };

 
  return (
    <div className="container-partenza ">
        <div className="child-container-partenza">
          <h4 className="title-patenzaSpedizione">{name}</h4>

          <div className="master-children-partenza">
            <div className="children-partenza">
            
              <label htmlFor="number" className="control-label" >
                Ritiro
             
              <select type="number"  className="form-select" value={state.choiseReducer.tipo} disabled>
                {renderAuthSelect()}
              </select>
              </label>
            </div>
            <div className="children-partenza">
             
              <label htmlFor="start"> Data di ritiro
              <input
                disabled
                className="form-select"
                type="date"
                name="date"
                placeholder={finalPickUpDate}
                defaultValue={finalPickUpDate || ""}
               
               
              />
            </label>
            </div>
          </div>
          <hr />
          <div className="master-children-partenza">
            <div className="children-partenza">
           
              <label htmlFor="name" className="control-label">Nome
              <input
                name="name"
                placeholder=""
                className="form-control"
                defaultValue={state.partenzaSpedizioneReducer.nameSender}
                id="name"
                required
                onChange={(e) => {handle(e, "nameSender")}}
              />
              </label>
             
            </div>
            <div className="children-partenza">
             
              <label htmlFor="cognome" className="control-label">Cognome
              <input
                placeholder=""
                name="cognome"
                className="form-control"
                defaultValue={state.partenzaSpedizioneReducer.surnameSender}
                required
                id="cognome"
                type="text"
                onChange={(e) => {handle(e, "surnameSender")}}
              />
              </label>
             
            </div>
          </div>

          <div className="master-children-partenza">
            <div className="children-partenza">
             
              <label htmlFor="citta" className="control-label">Città
              <input
                placeholder=""
                className="form-control"
                defaultValue={state.partenzaSpedizioneReducer.citySender}
                maxLength="20"
                required
                id="citta"
                type="text"
                onChange={(e) =>{handle(e, "citySender")}}
              />
              </label>
              
            </div>
            <div className="children-partenza">
         
              <label htmlFor="via" className="control-label">Via
              <input
                placeholder=""
                className="form-control"
                defaultValue={state.partenzaSpedizioneReducer.streetSender}
               id="via"
               maxLength="20"
               required
                onChange={(e) => {handle(e, "streetSender")}}
              />
              </label>
            
            </div>
          </div>

          <div className="master-children-partenza">
            <div className="children-partenza">
            
              <label htmlFor="tel" className="control-label">Telefono
              <input
                required
                type="tel" id="phone" name="phone"
                defaultValue={state.partenzaSpedizioneReducer.phoneSender}
                pattern="[0-9]{10}"
                className="form-control"
                onChange={(e) => {handle(e, "phoneSender")}}
              />
             
             </label>
            
            </div>
            <div className="children-partenza">
            
              <label className="control-label" htmlFor="email">Email address
              <input
                type="email"
                name="firstName"
                defaultValue={state.partenzaSpedizioneReducer.emailSender}
                required
                id="email"
                className="form-control"
                onChange={(e) => {handle(e, "emailSender")}}
              />
              
                </label>
                
            </div>
          </div>
       
        </div>
      </div>
  );
}
