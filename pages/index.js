import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Nav from "./components/Nav"
import StartInput from './components/StartInput'


//chiedi a sergio perche se metti export default non c'è bisogno delle parentesi
export default function Home() {
  return (
    <>
   
    <Nav></Nav>
  
     <StartInput></StartInput>
 
   
    
    </>
  
  )
}
