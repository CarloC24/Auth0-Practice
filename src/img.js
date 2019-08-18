import React, { useState } from "react";
import axios from "axios";

export default function() {
  const [myImages, setMyImages] = useState([]);
  async function uploadImage(e) {
    const files = e.target.files;
    let formData = new FormData();
    formData.append("file", files[0]);
    formData.append("upload_preset", "sickfits");
    const images = await axios.post(
      "https://api.cloudinary.com/v1_1/cc24/image/upload",
      formData
    );
    setMyImages(prevState => [...prevState, images.data.url]);
  }
  return (
    <div>
      <input type="file" onChange={uploadImage} />
      {myImages && myImages.map(item => <img src={item} alt="wow" />)}
    </div>
  );
}
