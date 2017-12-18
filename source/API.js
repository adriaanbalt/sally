import request from 'superagent';
import Constants from './constants'

// console.log ( "Constants", API, API_VERSION )
const apiRequest = o => {
  let endpoint = o.route
  // console.log( 'apiRequest', o)
  //if(o.body && ['get','del'].indexOf(o.method)!==-1) throw new Error("get and delete requests can't have a body with superagent library");
  o.body = o.body || {};
  o.headers = o.headers || {'Accept': 'application/json'}; // default to 'Accept': 'application/json' header
  return new Promise( (resolve,reject) => {
    request
    [o.verb.toLowerCase()]( endpoint )
    .set(o.headers)
    .send(o.body)
    .end((err, res) => {
      if(err) reject(new Error( res.body.error ) );
      else resolve(res);
    });
  });
}

export const getSummaryBySymbol = ({ symbol }) => apiRequest(Object.assign({}, { verb: 'GET', route: `${Constants.API}/1/summary/crypto/${symbol}` }))
export const getRecordsBySymbol = ({ symbol, period, length }) => apiRequest(Object.assign({}, { verb: 'GET', route: `${Constants.API}/2/records/${ symbol }?period=${ period }&length=${ length }` }))
export const getSummary = () => apiRequest(Object.assign({}, { verb: 'GET', route: `${Constants.API}/2/summary/crypto` }))
export const getAutomationPreviewBySymbol = ({ symbol, risk }) => apiRequest(Object.assign({}, { verb: 'POST', route: `https://d1b0a1df.ngrok.io/api/1/automation`, body: { symbol, risk } }))
export const getEstimatedReturnsBySymbol = ({symbol}) => apiRequest(Object.assign({}, { verb: 'GET', route: `https://app-production.bloo.financial/indices/nov062017/31/estimated-returns?symbol=${symbol}` }))

export const authSendPhoneNumber = ({ phoneNumber }) => apiRequest(Object.assign({}, { verb: 'POST', route: `https://a3feb934.ngrok.io/api/login`, body: { phoneNumber } }))
export const authSendCode = ({ phoneNumber, code }) => apiRequest(Object.assign({}, { verb: 'POST', route: `https://a3feb934.ngrok.io/api/login`, body: { phoneNumber, code } }))

export const getUser = ({ accessToken }) => apiRequest(Object.assign({}, { verb: 'POST', route: `https://a3feb934.ngrok.io/api/user`, headers: { 'Access-Token': accessToken } }))

