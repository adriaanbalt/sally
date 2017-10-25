import { SET_DETAILS, SET_GRAPH_DATA } from './actions'

const initialState = {
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_DETAILS:
      return {
        ...state,
        currentCoin: {
        	...state.currentCoin,
        	...action.data
        }
      }

    case SET_GRAPH_DATA:
    	return {
    		...state,
    		currentCoin: {
    			...state.currentCoin,
    			graph: action.data
    		}
    	}

    default:
      return state
  }
}
