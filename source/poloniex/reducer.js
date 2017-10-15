export const CHANGE_VIEW = 'CHANGE_VIEW'
export const SELL = 'SELL'
export const BUY = 'BUY'
export const POLONIEX = 'POLONIEX'

const initialState = {
  data: [],
  views: {
    current: "Price",
    options: [
      {
        id: 'Price',
        label: 'Price'
      }
    ]
  },
  buy: {
    amount: 0,
    types: [
      'market',
      'limit',
      'ioc',
      'moc'
    ],
    orders: []
  },
  sell: {
    amount: 0,
    types: [
      'market',
      'limit',
      'ioc',
      'moc'
    ],
    orders: []
  },
}

export default (state = initialState, action) => {
  switch (action.type) {

    case CHANGE_VIEW:
      return {
        ...state,
        views: {
          ...state.views,
          current: action.currentQuantityView
        }
      }


    case POLONIEX:{
      return {
        ...state,
        data:{
          ...state.data,
          [action.data.coin]:action.data
        }
      }
    }

    case BUY:
      return {
        ...state,
        buy: {
          amount: action.amount,
          conversion: action.conversion
        }
      }

    case SELL:
      return {
        ...state,
        sell: {
          amount: action.amount,
          conversion: action.conversion
        }
      }

    default:
      return state
  }
}


export const buy = ( amount, type ) => {
  return dispatch => {
    dispatch({
      type: BUY,
      amount,
      conversion
    })
  }
}

export const sell = () => {
  return dispatch => {
    dispatch({
      type: SELL,
      amount,
      conversion
    })
  }
}

export const changeViews = () => {
  return (dispatch, getState) => {
    const reducer = getState().geminiReducer;
    // TODO > handle the quantity view manipulation
    const previousQuantityView = reducer.views.current
    let currentQuantityViewIndex = 0
    reducer.views.options.map( (item, index) => {
      if ( item == previousQuantityView ) {
        currentQuantityViewIndex = index+1
        return
      }
    })
    if ( currentQuantityViewIndex > reducer.views.options.length-1 ) {
      currentQuantityViewIndex = 0;
    }
    dispatch({
      type: CHANGE_VIEW,
      currentQuantityView: reducer.views.options[currentQuantityViewIndex]
    })
  }
}


