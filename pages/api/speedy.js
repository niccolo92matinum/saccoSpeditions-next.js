
import {parameter} from './checkout_sessions'


export default function preventive(req, res) {

    if(req.method === 'GET'){



     res.status(200).json(parameter)
    }else if(req.method === 'POST'){
     const dat = req.body

 const calculatePrice = (data) => {
    // _______TIPO______
    let priceByType;
    if (data.tipo === 1) {

      priceByType = 5;
    } else if (data.tipo === 2) {
      priceByType = 10;
    } else if (data.tipo === 3) {
      priceByType = 15;
    } 
    // ________PESO_________
    let priceByWeigth;
    if (data.peso < 5) {
      priceByWeigth = 3;
    } else if (data.peso > 5) {
      priceByWeigth = 10;
    }
    // ______LARGHEZZA____
    let priceBywidth = 5

    if (data.larghezza < 30) {
      priceBywidth = 10;
    } else if (data.larghezza > 30) {
      priceBywidth = 20;
    }
    // ______ALTEZZA_____
    let priceByHeigth = 15

    if (data.altezza < 20) {
      priceByHeigth = 3;
    } 
    // ______LUNGHEZZA_______
    let priceByLength = 15
    if (data.lunghezza < 20) {
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

let price =  calculatePrice(dat.dataReducer)*100
   

  if(dat.choiseReducer.nome === 'DHL'){
    price+= 500
    parameter[0] = price
  }else{
                                 
     price += 1500
     parameter[0] = price
  }
  
    
     res.status(201).json(parameter)
    
    }
   
     
   
    
     
   }
   

  