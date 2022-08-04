// {{ baseUrl }} : https://api.concati.com/users

// Create new account 
// POST {{baseUrl}}/accounts
// Request body / form
// {
//     "email": required
//     "mobile":
//     "password": required
//     "first_name":
//     "middle_name":
//     "last_name":
//     "suffix":
//     "nickname":
//     "photo":
//     "birthdate":
//     "sex":
//     "civil_status":
//     "region":
//     "province":
//     "city_municipality":
//     "barangay":
//     "address":
//     "meta":{
//       "type": "customer" / "admin"
//     }
// }

// List of all accounts
// GET {{baseUrl}}/accounts



export const UserApi = ( method, url, token, body = {} ) => {
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", 'Bearer' + token);
    myHeaders.append("Access-Token", 'Bearer' + token);
    
    var requestOptions = {
      method,
      headers: myHeaders,
      body,
      redirect: 'follow'
    };
    
    fetch(url, requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
}