import { SET_DETAILS, SET_GRAPH_DATA } from './actions'

const initialState = {
  isDataLoaded: false,
  isGraphLoaded: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_DETAILS:
      return {
        ...state,
        isDataLoaded: true,
        currentCoin: {
        	...state.currentCoin,
        	...action.data
        }
      }

    case SET_GRAPH_DATA:
    	return {
    		...state,
        isGraphLoaded: true,
    		currentCoin: {
    			...state.currentCoin,
    			graph: action.data
    		}
    	}

    // delete order
    // edit order
    // add order

    default:
      return state
  }
}
