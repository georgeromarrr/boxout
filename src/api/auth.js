import {
  ADMIN_API_KEY, 
  ADMIN_SECRET_KEY,
  CLIENT_API_KEY, 
  CLIENT_SECRET_KEY
} from './config.js';

export const getAdminToken = async () =>  {
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  let raw = JSON.stringify({
    "key": ADMIN_API_KEY,
    "secret": ADMIN_SECRET_KEY
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  return fetch("https://api.concati.com/wallets/auth", requestOptions)
    .then( response => {
      if (response.ok){
        return response.json();
      }
      throw new Error("Bad Response");
    })
    .then( result => result.access_token )
    .catch( err => console.error(err))
}

export const getClientToken = async () =>  {
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  let raw = JSON.stringify({
    "key": CLIENT_API_KEY,
    "secret": CLIENT_SECRET_KEY
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  return fetch("https://api.concati.com/wallets/auth", requestOptions)
    .then( response => {
      if (response.ok){
        return response.json();
      }
      throw new Error("Bad Response");
    })
    .then( result => result.access_token )
    .catch( err => console.error(err))
}