/* eslint-disable jsx-a11y/label-has-associated-control */
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
    <div className="container-partenza">
        <div className="child-container-partenza">
          <h4 className="title-patenzaSpedizione">{name}</h4>
          <div className="master-children-partenza">
            <div className="children-partenza">
            
              <label className="control-label" >
                Ritiro
              </label>
              <select type="number"  className="form-select" value={state.choiseReducer.tipo} disabled>
                {renderAuthSelect()}
              </select>
            </div>
            <div className="children-partenza">
             
              <label htmlFor="start"> Data di ritiro</label>
              <input
                disabled
                className="form-select"
                type="date"
                name="date"
                placeholder={finalPickUpDate}
                defaultValue={finalPickUpDate || ""}
                min="1997-01-01"
                max="2030-12-31"
              />
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
                onChange={(e) => handle(e, "nameSender")}
              />
            </div>
            <div className="children-partenza">
              <label className="control-label">Cognome</label>
              <input
                placeholder=""
                className="form-control"
                defaultValue=""
                onChange={(e) => handle(e, "surnameSender")}
              />
            </div>
          </div>

          <div className="master-children-partenza">
            <div className="children-partenza">
              <label className="control-label">Città</label>
              <input
                placeholder=""
                className="form-control"
                defaultValue=""
                onChange={(e) => handle(e, "citySender")}
              />
            </div>
            <div className="children-partenza">
              <label className="control-label">Via</label>
              <input
                placeholder=""
                className="form-control"
                defaultValue=""
                onChange={(e) => handle(e, "streetSender")}
              />
            </div>
          </div>

          <div className="master-children-partenza">
            <div className="children-partenza">
              <label className="control-label">Telefono</label>
              <input
                placeholder=""
                className="form-control"
                defaultValue=""
                onChange={(e) => handle(e, "phoneSender")}
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
                onChange={(e) => handle(e, "emailSender")}
              />
            </div>
          </div>
        </div>
      </div>
  );
}
