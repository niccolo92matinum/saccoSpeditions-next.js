const initialState = {};

// eslint-disable-next-line default-param-last
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