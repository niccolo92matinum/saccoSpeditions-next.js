import Partenza from './components/Partenza'
import Spedizione from './components/Spedizione'
import Riepilogo from './components/Riepilogo'
import Nav from './components/Nav'
import {connect} from 'react-redux'
import {useState} from 'react'



 function  Overview({state}) {

   const [data, setData] = useState({})
console.log(data, 'data')
   const handleObjDispatch = (e,key) =>{
    setData({...data, ...{[key]:e.target.value} })
    }


    return(
        <>
            <Nav></Nav>
           <div className='overview-container'>
              <Partenza name='Partenza' state={state} handle={handleObjDispatch}></Partenza>
              <Riepilogo state={state} allInfo={data}></Riepilogo>
       
           </div> 
           <div className='overview-container'>
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