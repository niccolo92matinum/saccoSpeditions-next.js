
import {  useEffect, useState } from "react";
import { connect } from "react-redux";
import Nav from "../components/Nav";


import PlatformCard from "../components/PlatformCard";

// eslint-disable-next-line import/named
import StartInput from "../components/StartInput";

function AllPlatforms({ state }) {


 

  const [data, setData] = useState({})
 
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('items'));
    if (items) {
     setData(items);
    }
  }, []);


  const arrCompany = [
    {
      id: 0,
      nome:"DHL",
      costoAggiuntivo: 5,
      tempoSpedizione: 2,
      tipoRitiro:"Domicilio",
      img:"./aa.jpeg",
    },
    {
      id: 1,
      nome:"PosteItaliane",
      costoAggiuntivo: 15,
      tempoSpedizione: 6,
      tipoRitiro:"Sede più vicina",
      img:"/poste.png",
    },
  ];

  const createObjCompany = arrCompany.map((x, i) => {

    let final
    if(Object.keys(state.dataReducer).length === 0){
      
      final = { ...data.dataReducer, ...arrCompany[i] };

    }else{
      final = { ...state.dataReducer, ...arrCompany[i] };
    }
   

    

    const timeToAdd = x.tempoSpedizione;
    const today = new Date();
    const finalDate = today.setDate(today.getDate() + timeToAdd);
    const consegnaStimata = { ...final, ...{ consegnaStimata: finalDate } };
    const modifyFinalPrice =
      consegnaStimata.costoAggiuntivo + consegnaStimata.prezzo;
    consegnaStimata.prezzo = modifyFinalPrice;

    return consegnaStimata;
  });


 

 

  return (
    <>
      <Nav />
      <div className="container-startEndCard">
        <StartInput />
        </div>
        <div className="container-platformCards">
          {createObjCompany.map((allInfo) => (
            <PlatformCard key={allInfo.id} Info={allInfo} />
          ))}
        
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  state,
});

export default connect(mapStateToProps, null)(AllPlatforms);
