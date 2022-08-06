import { useContext, useState, useEffect } from "react";
import { TokenContext } from "../context/TokenContext";

const GetProducts = () =>  {
  const [myData, setMyData] = useState('');
  const { clientToken }  = useContext(TokenContext);

  let headerAPI = new Headers();
  headerAPI.append("Authorization", 'Bearer ' + clientToken);
  headerAPI.append("Content-Type", "application/json");

  let bodyAPI = JSON.stringify({
    "search": "romar"
  });

  var requestAPI = {
    method: 'POST',
    headers: headerAPI,
    body: bodyAPI,
    redirect: 'follow'
  };
  
  useEffect(() => {
    fetch("https://api.concati.com/inventory/products", requestAPI)
    .then( response => {
      if (response.ok){
        return response.json();
      }
      throw new Error("Bad Response");
    })
    .then( res => {setMyData(res.data)})
    .catch( err => console.error('error', err))
  },[]);
  
  return console.log(myData);
}

export default GetProducts