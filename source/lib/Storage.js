import Cookies from 'js-cookie'
import Config from '../constants'

const locations = ['cookie', 'local', 'session']

// test for localStorage (Safari can be strict about it)
let hasLocalStorageSupport
try {
  hasLocalStorageSupport = 'localStorage' in window && window.localStorage !== null
  const testKey = 'props.storageTest'
  window.localStorage.setItem(testKey, 'test')
  window.localStorage.removeItem(testKey)
} catch (e) {
  hasLocalStorageSupport = false
}

export const storeValue = (location, key, data) =>
{

  console.log( 'storeValue', location, key, data )

  if (!location || !locations.includes(location)) {
    return false
  }

  if (typeof data !== 'string')
    data = JSON.stringify(data)

  // cookie fallback, Safari does not allow locaStorage in private browsing
  if (!hasLocalStorageSupport) location = 'cookie'

  switch (location)
  {
    case 'cookie':
      Cookies.set(key, data, { expires: 1 , domain: Config.DOMAIN })
      return true

    case 'local':
      localStorage.setItem(key, data)
      return true

    case 'session':
      sessionStorage.setItem(key, data)
      return true
  }

  return false
}

export const retrieveStoredValue = (location, key) => {

  if (!location || !locations.includes(location)) {
    return false
  }

  let data

  // cookie fallback, Safari does not allow locaStorage in private browsing
  if (!hasLocalStorageSupport) location = 'cookie'

  switch (location) {
    case 'cookie':
      data = Cookies.get(key)
      break

    case 'local':
      data = localStorage.getItem(key)
      break

    case 'session':
      data = sessionStorage.getItem(key)
      break
  }

  if (!data) {
    return null
  }

  if (['{', '['].includes(data.charAt(0)))
    data = JSON.parse(data)

  return data
}

export const removeStoredValue = (location, key) => {
  if (!location || !locations.includes(location) ) {
    return false
  }

  // cookie fallback, Safari does not allow locaStorage in private browsing
  if (!hasLocalStorageSupport) location = 'cookie'

  switch (location) {
    case 'cookie':
      Cookies.remove(key, {domain: Config.DOMAIN})
      return true

    case 'local':
      localStorage.removeItem(key)
      return true

    case 'session':
      sessionStorage.removeItem(key)
      return true
  }

  return true
}

export const clearStorage = location => {
  if (!location || !['local', 'session'].includes(location) ) {
    return false
  }

  // cookie fallback, Safari does not allow localStorage in private browsing
  if (!hasLocalStorageSupport) return false

  switch (location) {
    case 'local':
      localStorage.clear()
      break

    case 'session':
      sessionStorage.clear()
      break
  }

  return true
}
