const initialState = {};

// eslint-disable-next-line default-param-last
function dataReducer(state = initialState, action) {

  switch (action.type) {
    case "STORE_DATA":
    
     return {...state,...action.payload}
     case "SAVE_LOCAL_STORAGE_TO_STORE":
       
       return  {...state,...action.payload.dataReducer}
    
    default:
      return state;
  }
}




export default   dataReducer