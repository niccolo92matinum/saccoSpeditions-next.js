

import Nav from "../components/Nav"
import StartInput from '../components/StartInput'


// chiedi a sergio perche se metti export default non c'è bisogno delle parentesi
export default function Home() {
  return (
    <>
   

    <Nav/>
  
     <div className="start-input-container">
      <StartInput/>
     </div>
   
    
    </>
  
  )
}
