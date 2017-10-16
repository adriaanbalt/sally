import request from 'superagent';
import Promise from 'bluebird';
import Constants from './constants'

// console.log ( "Constants", API, API_VERSION )
const apiRequest = o => {
  let endpoint = `${Constants.API}/${Constants.API_VERSION}${o.route}`
  // console.log( 'apiRequest', o)
  o.params = o.params || [];
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

export const get = (route, options) => apiRequest(Object.assign({}, options, { verb: 'GET', route }))