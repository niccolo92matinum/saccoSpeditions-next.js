const initialState = {};

// eslint-disable-next-line default-param-last
function partenzaSpedizioneReducer(state = initialState, action) {
   
    switch (action.type) {
      case "SAVE_PARTENZA_SPEDIZIONE_DATA":
      
       return {...state,...action.payload}

       case "SAVE_LOCAL_STORAGE_TO_STORE":
       
        return  {...state,...action.payload.partenzaSpedizioneReducer}
      default:
        return state;
    }
  }
  
  
  
  
  export default  partenzaSpedizioneReducer