import request from 'superagent';
import Promise from 'bluebird';
import { API, API_VERSION } from './constants'

// console.log ( "Constants", API, API_VERSION )
const apiRequest = o => async (dispatch, getState) => {
  console.log( 'apiRequest', o )
  o.params = o.params || [];
  //if(o.body && ['get','del'].indexOf(o.method)!==-1) throw new Error("get and delete requests can't have a body with superagent library");
  o.body = o.body || {};
  o.headers = o.headers || {'Accept': 'application/json'}; // default to 'Accept': 'application/json' header
  return new Promise( (resolve,reject) => {
    request
    [o.method]( `${Constants.API}/${Constants.API_VERSION}${o.route}` ) // if o.params is not string destructure it
    .set(o.headers)
    .send(o.body)
    .end((err, res) => {
      if(err) reject(err);
      else resolve(res);
    });
  });
}

export const get = (route, options) => apiRequest(Object.assign({}, options, { verb: 'GET', route }))