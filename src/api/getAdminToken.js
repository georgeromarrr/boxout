import React, {useState, useEffect} from 'react';
import {
  ADMIN_API_KEY, 
  ADMIN_SECRET_KEY} from './config.js';

const GetAdminToken = () => {
  const [token, setToken] = useState(null);

  const headerAPI = new Headers();
  headerAPI.append("Content-Type", "text/plain");

  const bodyAPI = JSON.stringify({
    "key": `${ADMIN_API_KEY}`,
    "secret": `${ADMIN_SECRET_KEY}`
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
  },[token]);
   

  console.log('admin:', token);
}

export default GetAdminToken