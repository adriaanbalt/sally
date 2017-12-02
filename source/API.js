import request from 'superagent';
import Promise from 'bluebird';
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
      if(err) reject(err);
      else resolve(res);
    });
  });
}

export const getSummaryBySymbol = ({ symbol }) => apiRequest(Object.assign({}, { verb: 'GET', route: `${Constants.API}/1/summary/crypto/${symbol}` }))
export const getRecordsBySymbol = ({ symbol, period, length }) => apiRequest(Object.assign({}, { verb: 'GET', route: `${Constants.API}/2/records/${ symbol }?period=${ period }&length=${ length }` }))
export const getSummary = () => apiRequest(Object.assign({}, { verb: 'GET', route: `${Constants.API}/2/summary/crypto` }))
export const getAutomationPreviewBySymbol = ({ symbol, risk }) => apiRequest(Object.assign({}, { verb: 'POST', route: `https://d1b0a1df.ngrok.io/api/1/automation`, body: { symbol, risk } }))