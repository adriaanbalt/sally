import superagent from 'superagent'
import Config from '../config'

export const api = options => new Promise((resolve, reject) =>
{
  const {data, headers, url, verb, onProgress} = options
  const req = superagent[verb.toLowerCase()](url)
  if ( headers ) {
    req.set( headers )
  }
  if ( data && !(data instanceof FormData) ){
    req.set( {'Content-Type':'application/json;charset=UTF-8'} )
  }
  if ( onProgress ) {
    req.on('progress', event => onProgress(event))
      /* the progress event is:
      {
        direction: "upload" or "download"
        percent: 0 to 100 // may be missing if file size is unknown
        total: // total file size, may be missing
        loaded: // bytes downloaded or uploaded so far
      } */
  }
  req
    .send( data )
    .end( (err, res) => {
      if ( res ) {
        const response = {...JSON.parse(res.text), xhrStatus:res.status, xhrReadyState:res.readyState}
        if(err) {
          reject(response)
        } else {
          resolve(response)
        }
      }
    })
})

// //DEPRECATED: xhrRequest()
// const xhrRequest = options => new Promise((resolve, reject) =>
// {
//   const {data, headers, url, verb, onProgress} = options
//   const xhr = new XMLHttpRequest()

//   xhr.onload = event => {
//     if(xhr.responseType === ''){
//       if (xhr.response) {
//         resolve({ ...JSON.parse(xhr.response), xhrStatus: xhr.status, xhrReadyState: xhr.readyState })
//       } else {
//         resolve()
//       }
//     } else {
//       resolve({...xhr.response, xhrStatus:xhr.status, xhrReadyState:xhr.readyState})
//     }
//   }

//   xhr.onerror = event => event => {
//     if(xhr.responseType === ''){
//       if (xhr.response) {
//         resolve({ ...JSON.parse(xhr.response), xhrStatus: xhr.status, xhrReadyState: xhr.readyState })
//       } else {
//         resolve()
//       }
//     } else {
//       reject({...xhr.response, xhrStatus:xhr.status, xhrReadyState:xhr.readyState})
//     }
//   }

//   if(onProgress) xhr.upload.onprogress = event => onProgress(event)

//   xhr.open(verb, url)
//   xhr.responseType = 'json'

//   if (headers) {
//     Object.keys(headers).forEach(key => xhr.setRequestHeader(key, headers[key]))
//   }

//   if (data) {
//     if (data instanceof FormData) {
//       xhr.send(data)
//     } else {
//       xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8')
//       xhr.send(JSON.stringify(data))
//     }
//   } else {
//     xhr.send()
//   }
// })

// // let baseURL = 'api'

// // if (LOCAL) baseURL = require('../local').API_BASE_URL

// // if (DEVELOP) baseURL = `/${Config.API_VERSION}/`

// // if (STAGING) baseURL = `/${Config.API_VERSION}/`

// // if (PRODUCTION) baseURL = `/${Config.API_VERSION}/`

// const apiRequest = request => 
//   const { cache, route, verb } = request

//   // if (cache && route && verb === 'GET') {
//   //   // cache
//   //   const data = retrieveStoredValue(cache, route)
//   //   if (data) {
//   //     return { data }
//   //   }
//   // }

//   const originalRequest = request
//   let response

//   request = Object.assign({}, request, { url: route })
//   request.headers = Object.assign(request.headers || {}, { 'Authorization': 'Bearer ' + auth.token })
//   try {
//     response = await xhrRequest(request)
//   } catch (error) {
//     console.log ( "API ERROR:", error )
//   }

//   if (!response) {
//     response = {
//       status: 'error',
//       errors: ['No response from server.'],
//     }
//   }

//   let { data, errors } = response
//   const { error, status } = response

//   if ( response.xhrStatus == 401 ) {
//     console.log ( "API ERROR:", response.xhrStatus )
//     return
//   }

//   if (error || errors || status === 'error') {

//     if (!errors) {
//       errors = []

//       if (error) {
//         errors.push(error)
//       }

//       if (data) {
//         if (typeof data === 'string') {
//           errors.push(data)
//         } else {
//           response.data = data
//         }
//       }
//     }

//     response.errors = errors
//   }
//   return response
// }

// export const apiGetRequest = (route, options) => apiRequest(Object.assign({}, options, { verb: 'GET', route }))

// export const apiPostRequest = (route, options) => apiRequest(Object.assign({}, options, { verb: 'POST', route }))

// export const apiPutRequest = (route, options) => apiRequest(Object.assign({}, options, { verb: 'PUT', route }))

// export const apiDeleteRequest = (route, options) => apiRequest(Object.assign({}, options, { verb: 'DELETE', route }))

// export const apiPatchRequest = (route, options) => apiRequest(Object.assign({}, options, {verb:'PATCH', route}))
