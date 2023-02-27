

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
              <form
               onSubmit={(e)=>prevent(e)} >
              <label htmlFor="name" className="control-label">Nome
              <input
                name="name"
                placeholder=""
                className="form-control"
                defaultValue=""
                id="name"
                required
                onChange={(e) => {handle(e, "nameSender");valdationFunction("name","butNa")}}
              />
              </label>
              <input type="submit" hidden id="butNa"/>
              </form>
            </div>
            <div className="children-partenza">
              <form
              onSubmit={(e)=>prevent(e)} >
              <label htmlFor="cognome" className="control-label">Cognome
              <input
                placeholder=""
                name="cognome"
                className="form-control"
                required
                id="cognome"
                type="text"
                onChange={(e) => {handle(e, "surnameSender");valdationFunction("cognome","butSur")}}
              />
              </label>
              <input type="submit" hidden id="butSur"/>
              </form>
            </div>
          </div>

          <div className="master-children-partenza">
            <div className="children-partenza">
              <form
              onSubmit={(e)=>prevent(e)} >
              <label htmlFor="citta" className="control-label">Città
              <input
                placeholder=""
                className="form-control"
                defaultValue=""
                maxLength="20"
                required
                id="citta"
                type="text"
                onChange={(e) =>{handle(e, "citySender");valdationFunction("citta","butCit")}}
              />
              </label>
              <input type="submit" hidden id="butCit"/>
              </form>
            </div>
            <div className="children-partenza">
            <form 
              onSubmit={(e)=>prevent(e)} >
              <label htmlFor="via" className="control-label">Via
              <input
                placeholder=""
                className="form-control"
                defaultValue=""
               id="via"
               maxLength="20"
               required
                onChange={(e) => {handle(e, "streetSender");valdationFunction("via","butVia")}}
              />
              </label>
              <input type="submit" hidden id="butVia"/>
              </form>
            </div>
          </div>

          <div className="master-children-partenza">
            <div className="children-partenza">
             <form 
              onSubmit={(e)=>prevent(e)} >
              <label htmlFor="tel" className="control-label">Telefono
              <input
                type="tel"
                id="phone" name="phone" 
                maxLength="10"
                required
                className="form-control"
                onChange={(e) => {handle(e, "phoneSender");valdationFunction("phone","buTel")}}
              />
               <input type="submit" hidden id="buTel"/>
             </label>
             </form>
            </div>
            <div className="children-partenza">
              <form
              onSubmit={(e)=>prevent(e)}  
              >
              <label className="control-label" htmlFor="email">Email address
              <input
                type="email"
                name="firstName"
                size="30"
                required
                id="email"
                className="form-control"
                onChange={(e) => {handle(e, "emailSender");valdationFunction("email","buEmail")}}
              />
                <input type="submit" hidden id="buEmail"/>
                </label>
                </form>
            </div>
          </div>
       
        </div>
      </div>
  );
}
