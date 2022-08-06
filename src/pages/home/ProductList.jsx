import React, { useEffect, useContext, useState } from "react";
import { TokenContext } from "../../context/TokenContext";

const ProductList = () =>  {
  const [myData, setMyData] = useState('');
  const [isAvail, setAvailable] = useState('')
  const { clientToken }  = useContext(TokenContext);

  let headerAPI = new Headers();
  headerAPI.append("Authorization", 'Bearer ' + clientToken);
  headerAPI.append("Content-Type", "application/json");

  let bodyAPI = JSON.stringify({
    "search": isAvail
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


  console.log (myData)
  return (
    <div>
     {/* <pre> {JSON.stringify(myData)}</pre> */}

     {/* <ul>
      {myData.map((item) => (
        <li key={item.product_id}>{item.is_active ? item.name : null}</li>
      ))}
     </ul> */}

     <form>
      <input type="text" class="border-2"/>
     </form>
    </div>
  )
}

export default ProductList