import React, { useState, useContext } from "react";
import Navbar from "../../../Components/navbar/Navbar";
import swal from 'sweetalert';

import { TokenContext } from "../../../context/TokenContext";

const Product = () => {
  const [imgFile, setImgFile] = useState(null);

  const { adminToken }  = useContext(TokenContext);
  

  const uploadImage = async (e) => {
    const file = e.target.files[0];
    setImgFile(file);
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
  
  const ImgNewMedia = ( method, url, token, body = {} ) => {
    const baseUrl = 'https://api.concati.com/inventory';
    let headers = new Headers();
    headers.append("Accept", "*/*");
    headers.append("Connection", "keep-alive");
    headers.append("Authorization", `Bearer ${token}`);
    
    let requestOptions = {
      method,
      headers,
      body: JSON.stringify(body),
      redirect: 'follow'
    };
    
    return fetch(baseUrl + url, requestOptions)
      .then(async (response) => {
        if ( response.status === 403 ) {
          swal("Upload error", "Please try again later", "error");
        }
        if (!response.ok) return console.error(response);
        return response.json()
      })
      .then(result => console.log(result))
      .catch( error => {
        console.error('error', error)
      });
  }

  const handleImageSubmit = async ev => {
    ev.preventDefault();
    let base64 = await convertBase64(imgFile);
    let content = base64.split(',')[1]

    let body = {
      filename: imgFile.name,
      content,
      module: "product"
    }
    console.log(body);

    const response = await ImgNewMedia( 'POST', '/medias', adminToken, body);
    if (response) swal("Upload success", "", "success");
  }
  
    return (
      
      <div>
        <Navbar />
        <div className="h-64" ></div>
        <div className="flex justify-center">
          <form action="#" method="POST" onSubmit={handleImageSubmit}>
            <div>
                <label className="block text-sm font-medium text-gray-700"> Cover photo </label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div className="space-y-1 text-center">
                    <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                      <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <div className="flex text-sm text-gray-600">
                      <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                        <input 
                          type="file" 
                          accept="image/*"
                          onChange={(e) => {uploadImage(e);}}
                        />
                      </label>
                    </div>
                    <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                  </div>
                </div>
            </div>

            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
              <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Save</button>
            </div>
          </form>

          {/* <img src={base64Img} height="100px" alt="img"/> */}
        </div>
      </div>
    )
}

export default Product