import Partenza from './components/Partenza'
import Spedizione from './components/Spedizione'
import Riepilogo from './components/Riepilogo'
import Nav from './components/Nav'
import {connect} from 'react-redux'
import {useState} from 'react'



 function  Overview({state}) {

   const [data, setData] = useState({})
console.log(data, 'datassss')

const checkIfInputsAreFilled = new Set( Object.values(data).filter(x => x === '')).has('')

const checkIfInputsAreeAllPresent = Object.values(data).length === 12

let boolean = !checkIfInputsAreFilled && checkIfInputsAreeAllPresent

   const handleObjDispatch = (e,key) =>{
    setData({...data, ...{[key]:e.target.value} })
    }


    return(
        <>
            <Nav></Nav>
           <div className='overview-container'>
              <Partenza name='Partenza' state={state} handle={handleObjDispatch}></Partenza>
              <Riepilogo state={state} allInfo={data} boolean={boolean}></Riepilogo>
       
           </div> 
           <div className='overview-container-spedizione'>
              <Spedizione name='Spedizione' state={state} handle={handleObjDispatch}></Spedizione>
              <div className="container-spedizione"></div>
           </div> 
         
        </>
     )
} 
//
const mapStateToProps = (state) =>({
   state
})

export default connect(mapStateToProps,null)(Overview)