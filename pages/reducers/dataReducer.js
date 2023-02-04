const initialState = {};

function dataReducer(state = initialState, action) {
 // console.log(state, 'state action ', action)
  switch (action.type) {
    case "STORE_DATA":
    
     return {...state,...action.payload}
    
    default:
      return state;
  }
}




export default   dataReducer