
import {connect} from 'react-redux'
import Nav from "../components/Nav"

import PlatformCard from "../components/PlatformCard"

// eslint-disable-next-line import/named
import StartInput from '../components/StartInput'

function AllPlatforms({state}){

    const arrCompany = [
        {id:0,nome:'DHL', costoAggiuntivo:5, tempoSpedizione:2,tipoRitiro:"Domicilio",img:'./aa.jpeg'},
        {id:1,nome:'Poste Italiane', costoAggiuntivo:15,tempoSpedizione:6, tipoRitiro:"Sede più vicina", img:'/poste.png'},

        
    ]

const createObjCompany = 
  arrCompany.map((x,i)=>{
   const final = {...state.dataReducer,...arrCompany[i]}


     
    const timeToAdd = x.tempoSpedizione
    const today = new Date ()
    const finalDate = today.setDate(today.getDate() + timeToAdd );
    const consegnaStimata = {...final,...{consegnaStimata: finalDate}}
      const modifyFinalPrice = consegnaStimata.costoAggiuntivo+consegnaStimata.prezzo
      consegnaStimata.prezzo= modifyFinalPrice

return consegnaStimata
    
})






    return (
      <>
       
       <Nav />
       <StartInput />
      <div>
        {
          createObjCompany.map((allInfo)=><PlatformCard key={allInfo.id} Info={allInfo}  />)  
        }
      </div>
            

       
       
      
      </>
    
    )
  }

  const mapStateToProps = (state) =>({
    state
  })




export default connect(mapStateToProps, null)(AllPlatforms);