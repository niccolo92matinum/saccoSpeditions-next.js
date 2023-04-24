const initialState = {};

// eslint-disable-next-line default-param-last
function choiseReducer(state = initialState, action) {

    switch (action.type) {
      case "SAVE_USER_CHOISE":

       return {...state,...action.payload}
      
       case "SAVE_LOCAL_STORAGE_TO_STORE":
       
       return  {...state,...action.payload.choiseReducer}
      default:
        return state;
    }
  }
  
  
  
  
  export default  choiseReducer