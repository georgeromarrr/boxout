import React, {useState} from "react";

const Test = () => {
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
  
}

export default Test