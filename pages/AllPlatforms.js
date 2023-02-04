import styles from '../styles/Home.module.css'
import Nav from "./components/Nav"
import {connect} from 'react-redux'

import PlatformCard from "./components/PlatformCard"
import StartInput from './components/StartInput'

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
      consegnaStimata['prezzo']= modifyFinalPrice

return consegnaStimata
    
})
    console.log(createObjCompany , 'lillo')





    return (
      <>
       
       <Nav></Nav>
       <StartInput></StartInput>
      <div>
        {
          createObjCompany.map((allInfo)=><PlatformCard key={allInfo.id} allInfo={allInfo}  />)  
        }
      </div>
            

       
       
      
      </>
    
    )
  }

  const mapStateToProps = (state) =>({
    state
  })




export default connect(mapStateToProps, null)(AllPlatforms);