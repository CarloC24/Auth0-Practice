import React, { useState } from "react";
import axios from "axios";

export default function() {
  const [myImages, setMyImages] = useState([]);
  async function uploadImage(e) {
    const files = e.target.files;
    let formData = new FormData();
    formData.append("file", files[0]);
    formData.append("data", "carlo");
    const res = await axios.post("http://localhost:5000/formdata", {
      data: formData
    });
    console.log(res);
  }
  return (
    <div>
      <input type="file" onChange={uploadImage} />
      <p>Trigger Build</p>
      {myImages && myImages.map(item => <img src={item} alt="wow" />)}
    </div>
  );
}
