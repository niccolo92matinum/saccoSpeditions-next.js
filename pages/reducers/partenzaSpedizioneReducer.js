const initialState = {};

// eslint-disable-next-line default-param-last
function partenzaSpedizioneReducer(state = initialState, action) {
   // console.log(state, 'state action ', action)
    switch (action.type) {
      case "SAVE_PARTENZA_SPEDIZIONE_DATA":
      
       return {...state,...action.payload}
      default:
        return state;
    }
  }
  
  
  
  
  export default  partenzaSpedizioneReducer