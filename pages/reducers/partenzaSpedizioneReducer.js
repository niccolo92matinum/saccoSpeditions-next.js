const initialState = {};

function partenzaSpedizioneReducer(state = initialState, action) {
   // console.log(state, 'state action ', action)
    switch (action.type) {
      case "SAVE_PARTENZA_SPEDIZIONE_DATA":
      console.log(action, state, 'dento')
       return {...state,...action.payload}
      default:
        return state;
    }
  }
  
  
  
  
  export default  partenzaSpedizioneReducer