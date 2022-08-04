// import React, {useState, useEffect} from 'react';
import {
  CLIENT_API_KEY, 
  CLIENT_SECRET_KEY
} from './config.js';

// const GetClientToken = () => {
//   const [token, setToken] = useState(null);

//   const headerAPI = new Headers();
//   headerAPI.append("Content-Type", "text/plain");

//   const bodyAPI = JSON.stringify({
//     "key": `${CLIENT_API_KEY}`,
//     "secret": `${CLIENT_SECRET_KEY}`
//   });

//   const requestAPI = {
//     method: 'POST',
//     headers: headerAPI,
//     body: bodyAPI,
//     redirect: 'follow'
//   };

//   useEffect(() => {
//     fetch('https://api.concati.com/wallets/auth', requestAPI)
//     .then((res) => {
//       if (res.ok){
//         return res.json();
//       }
//       throw new Error("Bad Response");
//     })
//     .then((res) => {setToken(res.access_token)})
//     .then( res => res.access_token)
//     .catch((err) => console.log(err));
//   },[]);
   

//   return 'client: ' + token;
// }

// export default  GetClientToken

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