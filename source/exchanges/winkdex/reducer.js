import { CHANGE_VIEW, SELL, BUY, POLONIEX } from './actions'

const initialState = {
  data: [],
  views: {
    current: 'currentPrice',
    options: [
      {
        id: 'currentPrice',
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
