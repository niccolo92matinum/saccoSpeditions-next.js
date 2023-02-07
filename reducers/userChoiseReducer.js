const initialState = {};

// eslint-disable-next-line default-param-last
function choiseReducer(state = initialState, action) {
   // console.log(state, 'state action ', action)
    switch (action.type) {
      case "SAVE_USER_CHOISE":

       return {...state,...action.payload}
      
      
      default:
        return state;
    }
  }
  
  
  
  
  export default  choiseReducer