const initialState = {
    catalogo: [],
  };
  
  export function reducerCatalog(state = initialState, action) {
    switch (action.type) {
      case "SET_CATALOGO": {
        return {
          ...state,
          catalogo: action.payload,
        };
      }
  
      default: {
        return state;
      }
    }
  }
  