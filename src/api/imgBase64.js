

export const ImgNewMedia = ( method, url, token, body = {} ) => {
  const baseUrl = 'https://api.concati.com/inventory';
  let myHeaders = new Headers();
  if ( method === 'POST' || method === 'PUT')
  myHeaders.append("Content-Type", "text/plain");
  myHeaders.append("Accept", "text/plain");
  myHeaders.append("Authorization", 'Bearer ' + token);
  // myHeaders.append("Access-Token", 'Bearer ' + token);
  
  let requestOptions = {
    method,
    headers: myHeaders,
    body,
    redirect: 'follow'
  };
  
  return fetch(baseUrl + url, requestOptions)
    .then(response => {
      // throw new Error('Bad Response');
      if (!response.ok) console.error(response);
      return response.json()
    })
    .then(result => console.log(result))
    .catch(error => console.error('error', error));
}