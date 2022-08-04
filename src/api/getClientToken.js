import React, {useState, useEffect} from 'react';
import {
  CLIENT_API_KEY, 
  CLIENT_SECRET_KEY} from './config.js';

export default function GetClientToken() {
  const [token, setToken] = useState(null);

  const headerAPI = new Headers();
  headerAPI.append("Content-Type", "text/plain");

  const bodyAPI = JSON.stringify({
    "key": `${CLIENT_API_KEY}`,
    "secret": `${CLIENT_SECRET_KEY}`
  });

  const requestAPI = {
    method: 'POST',
    headers: headerAPI,
    body: bodyAPI,
    redirect: 'follow'
  };

  useEffect(() => {
    fetch('https://api.concati.com/wallets/auth', requestAPI)
    .then((res) => {
      if (res.ok){
        return res.json();
      }
      throw new Error("Bad Response");
    })
    .then((res) => {setToken(res.access_token)})
    .catch((err) => console.log(err));
  },[]);
   

  return 'client: ' + token;
}