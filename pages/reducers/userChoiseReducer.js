const initialState = {};

function choiseReducer(state = initialState, action) {
   // console.log(state, 'state action ', action)
    switch (action.type) {
      case "SAVE_USER_CHOISE":
      console.log(action, state, 'dento')
       return {...state,...action.payload}
      
      
      default:
        return state;
    }
  }
  
  
  
  
  export default  choiseReducer