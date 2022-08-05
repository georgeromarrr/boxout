import React, {useState, useEffect} from "react";
import { getAdminToken } from '../../../api/getAdminToken';


const Product = () => {
  const [adminToken, setAdminToken] = useState("");
  const [base64Img, setBase64Img] = useState("");

  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setBase64Img(base64);
    // setBase64Img(base64.replace(/^data:image\/[a-z]+;base64,/, ""));
  }

  const convertBase64 = (file) =>{
    return new Promise((resolve, reject) => {
      const readFile = new FileReader();
      readFile.readAsDataURL(file);

      readFile.onload = () => {
        resolve(readFile.result);
      };

      readFile.onerror = (error) => {
        reject(error);
      };
    });
  }

  const result = base64Img.replace(/^data:image\/[a-z]+;base64,/, "");

  const initToken = async () => {
    let admin_Token = await getAdminToken();
    setAdminToken(admin_Token);
  }

  const myHeaders = new Headers();
  myHeaders.append("Authorization", 'Bearer ' + adminToken);
  myHeaders.append("Content-Type", "text/plain");

  const bodyAPI = ('{\r\n  \"filename\": \"test.jpeg\",\r\n  \"content\": \"' + result + '\",\r\n  \"module\": \"product\"\r\n}');

  const requestAPI = {
    method: 'POST',
    headers: myHeaders,
    body: bodyAPI,
    redirect: 'follow'
  };

  useEffect(() => {
    initToken();
    fetch('https://api.concati.com/inventory/medias', requestAPI)
    .then((res) => {
      if (res.ok){
        return res.json();
      }
      throw new Error("Bad Response");
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
  }, [])


    console.log(getAdminToken);
  
    return (
      
        <div>
          <div class="h-64"></div>
        <div class="flex justify-center">
          <form action="#" method="POST">
            <div>
                <label class="block text-sm font-medium text-gray-700"> Cover photo </label>
                <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div class="space-y-1 text-center">
                    <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                      <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <div class="flex text-sm text-gray-600">
                      <label for="file-upload" class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                        <input type="file" onChange={(e) => {
                          uploadImage(e);
                        }}/>
                      </label>
                    </div>
                    <p class="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                  </div>
                </div>
            </div>


            <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
              <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Save</button>
            </div>
          </form>

          <img src={base64Img} height="100px" alt="img"/>
        </div>
        </div>
    )
}

export default Product