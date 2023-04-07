/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from "react";
import { connect } from "react-redux";
import { useRouter } from "next/router";

function StartInput({ setDataToStore, state }) {
 
  const [data, setData] = useState({
   
  });


  


    const handlePartenza = (e) => {
     
   
      setData({ ...data, partenza: e.target.value});
    };

  const handleTipo = (e) => {

    setData({ ...data, tipo: Number(e.target.value)});
  };

  const handlePeso = (e) => {
    setData({ ...data, peso: Number(e.target.value)});
  };

  const handleLarghezza = (e) => {
    setData({ ...data, larghezza: Number(e.target.value)});
  };

  const handleAltezza = (e) => {
    setData({ ...data, altezza: Number(e.target.value)});
  };

  const handleLunghezza = (e) => {
    setData({ ...data, lunghezza: Number(e.target.value)});
  };

  

  const handleDestinazione = (e) => {
    
    setData({...data, destinazione: e.target.value  });
  };

  const router = useRouter();
  const handleGoToAllPlatforms = () => {
    router.push("/AllPlatforms");
  };



 
  // eslint-disable-next-line no-unused-vars
  const [inputsState, setInputsState] = useState(router.route);
  let disableButtonPreventivo = false;
  if (inputsState === "/AllPlatforms") {
    disableButtonPreventivo = true;
  }


  const calculatePrice = (dat) => {
    // _______TIPO______
    let priceByType;
    if (dat.tipo === 1) {

      priceByType = 5;
    } else if (dat.tipo === 2) {
      priceByType = 10;
    } else if (dat.tipo === 3) {
      priceByType = 15;
    }
    // ________PESO_________
    let priceByWeigth;
    if (dat.peso < 5) {
      priceByWeigth = 3;
    } else if (dat.peso > 5) {
      priceByWeigth = 10;
    }
    // ______LARGHEZZA____
    let priceBywidth = 5;

    if (dat.larghezza < 30) {
      priceBywidth = 10;
    } else if (dat.larghezza > 30) {
      priceBywidth = 20;
    }
    // ______ALTEZZA_____
    let priceByHeigth = 15;

    if (dat.altezza < 20) {
      priceByHeigth = 3;
    }
    // ______LUNGHEZZA_______
    let priceByLength = 15;
    if (dat.lunghezza < 20) {
      priceByLength = 3;
    }

    const final =
      priceByType +
      priceByWeigth +
      priceBywidth +
      priceByLength +
      priceByHeigth;
    return final;
  };


  function onPreventivoButton(e) {


    e.preventDefault();
     
     if(Object.keys(state.dataReducer).length === 0){
      const prezzo = calculatePrice(data);
      const newData = data

      setDataToStore({ ...newData, prezzo });
  
      handleGoToAllPlatforms();
     }else{
      const oldAndNewData = {...state.dataReducer,...data}
      const prezzo = calculatePrice(oldAndNewData);
      

      setDataToStore({ ...oldAndNewData, prezzo });

      handleGoToAllPlatforms();
     }
      
    

  
  }


 
  return (
  
    <div className="masterContainer">
 <form id='Main-preventivo' onSubmit={(e) => {

      onPreventivoButton(e);
    }}>
    <div className="mainPartDesc">

   
      <div className="form-group col-md-4 partDesc">
      
        <label  className="control-label">Partenza</label>
        <input
          disabled={disableButtonPreventivo}
          placeholder="CAP o città"
          className="form-control output"
          required
          minLength='3'
          maxLength="25"
          defaultValue={Object.keys(state.dataReducer).length !== 0 && state.dataReducer.partenza ||data.partenza}
          onChange={(e) =>{handlePartenza(e)}}
        />
      
    
      </div>
     
      <div className="form-group col-md-4 partDesc dest">
        <label className="control-label">Destinazione</label>
        <input
          disabled={disableButtonPreventivo}
          placeholder="CAP o città"
          className="form-control"
          required
          minLength='3'
          maxLength="25"
          defaultValue={Object.keys(state.dataReducer).length !== 0 && state.dataReducer.destinazione ||data.destinazione}
          onChange={(e) => handleDestinazione(e)}
        />
      </div>
    </div>

    <div className="mainPesoLarghezzaEcc">
      <div className=" singleDiv tipoPacco">
        <label className="control-label">Tipo Pacco</label>
        <select
          disabled={disableButtonPreventivo}
          type="number"
          min="1"
          className="form-select"
          defaultValue={Object.keys(state.dataReducer).length !== 0&& state.dataReducer.tipo ||data.tipo}
          onChange={(e) => handleTipo(e)}
        >
          
          <option value="1">Piccolo</option>
          <option value="2">Medio</option>
          <option value="3">Grande</option>
        </select>
      </div>

      <div className="form-group singleDiv peso ">
       
        <label htmlFor="pesoP" className="control-label">Peso</label>
        <input
          disabled={disableButtonPreventivo}
          type="number"
          placeholder="Kg"
          className="form-control "
          required
          min="1"
          defaultValue={Object.keys(state.dataReducer).length !== 0 && state.dataReducer.peso ||data.peso}
          onChange={(e) => handlePeso(e)}
          
        />
   
      </div>
      <div className="form-group  singleDiv larghezza">
   
        <label htmlFor="larghezzaI" className="control-label">Larghezza</label>
        <input
          id="larghezzaI"
          type="number"
          min="1"
          required
          disabled={disableButtonPreventivo}
          placeholder="cm"
          className="form-control"
          defaultValue={Object.keys(state.dataReducer).length !== 0 && state.dataReducer.larghezza ||data.larghezza}
          onChange={(e) => handleLarghezza(e)}
         
        />
        

      </div>
      <div className="form-group  singleDiv altezza">
       
        <label htmlFor="altezzaI" className="control-label">Altezza</label>
        <input
           id="altezzaI"
           type="number"
           min="1"
           required
          disabled={disableButtonPreventivo}
          placeholder="cm"
          className="form-control"
          defaultValue={Object.keys(state.dataReducer).length !== 0 && state.dataReducer.altezza ||data.altezza}
          onChange={(e) => {handleAltezza(e)}}
        />
  
   
      </div>
      <div className="form-group  singleDiv lunghezza">
      
        <label  htmlFor="lungI" className="control-label">Lunghezza</label>
        <input
          disabled={disableButtonPreventivo}
          id="lungI"
          min="1"
          type="number"
          required
          placeholder="cm"
          className="form-control"
          defaultValue={Object.keys(state.dataReducer).length !== 0 && state.dataReducer.lunghezza ||data.lunghezza}
          onChange={(e) => handleLunghezza(e)}
        />


      </div>
    </div>
</form>
    <div className="mainButton">
      <div className="preventivo">
        {!disableButtonPreventivo && (
        
          // eslint-disable-next-line jsx-a11y/no-redundant-roles
          <button
          form='Main-preventivo'
            type='submit'
            disabled={disableButtonPreventivo}
            role="button"
            className=" button-start"
          
          >
                     'Preventivo'
          </button>
        )}

      </div>
     
     
    </div>

  </div>
  );
}
// action
export const setDataToStore = (x) => ({
  type: "STORE_DATA",
  payload: x,
});

// send object to store
const mapDispatchToProps = {
  setDataToStore,
};

const mapStateToProps = (state) => ({
  state,
});

export default connect(mapStateToProps, mapDispatchToProps)(StartInput);
