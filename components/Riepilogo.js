import { connect } from "react-redux";
import PreviewPage from "./PreviewPage";


// eslint-disable-next-line react/prop-types
function Riepilogo({ state, allInfo, setDataToStore,boolean}) {


  const pickUpDate = new Date();
  pickUpDate.setDate(pickUpDate.getDate() + 1);
  const finalPickUpDate = pickUpDate.toISOString().substring(0, 10);

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
  
    <div className="container-riepilogo hideOnMobile">
      <div className="child-container-riepilogo">
      
        <h4 className="titolo-riepilogo">Riepilogo</h4>

        <div className="conteiner-compagnia">
          <p className="p-placeholder">Compagnia</p>
     
          <p className="p-data">{state.choiseReducer.nome}</p>
        </div>
        <div className='div-hr'>
        <hr/>
        </div>
       
        <div className="p-container">
          <div className="p-container-left">
            <p className="p-placeholder">Da</p>
            <p className="p-data">{state.choiseReducer.partenza}</p>
          </div>
          <div className="p-container-right">
            <p className="p-placeholder">A</p>
            <p className="p-data">{state.choiseReducer.destinazione}</p>
          </div>
        </div>

        <div className='div-hr'>
        <hr/>
        </div>

        <div className="p-container2">
          <p className="p-placeholder">Dimensioni </p>
          <p className="p-data">
            {state.choiseReducer.altezza} x {state.choiseReducer.larghezza} x{" "}
            {state.choiseReducer.lunghezza}
          </p>
        </div>
        <div className='div-hr'>
        <hr/>
        </div>
        <div className="p-container2">
          <p className="p-placeholder add-margin">Data di ritiro</p>
          <p className="p-data">{finalPickUpDate}</p>
        </div>
        <hr />
        <div className="p-container prezzo-totale-margin">
          <div className="p-container-left">
            <h5 className="p-data">Totale</h5>
          </div>
          <div className="p-container-right">
            <p className="p-prezzo">{state.choiseReducer.prezzo}£</p>
            <p className="p-iva">IVA inclusa</p>
          </div>
        </div>
        <div className="container-button">
     
        <PreviewPage prova={sendToBackAllData} boolean={boolean} />
    
    </div>
       
      </div>
    </div>
    
    

   
  );
}

// <button className="button-riepilogo" onClick={()=>{sendToBackAllData()}}>Paga</button>
// <button className="button-riepilogo" onClick={()=>{ fetchData()}}>GET</button>
export const setDataToStore = (data) => ({
  type: "SAVE_PARTENZA_SPEDIZIONE_DATA",
  payload: data,
});

const mapDispatchToProps = {
  setDataToStore,
};

export default connect(null, mapDispatchToProps)(Riepilogo);
