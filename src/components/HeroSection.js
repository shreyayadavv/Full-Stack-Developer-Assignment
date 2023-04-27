import React, { useState, useEffect } from 'react';
import '../App.css';
import './HeroSection.css';
import axios from 'axios';

function HeroSection() {

  const [image, setImage]= useState();
  const [data, setData] = useState([]);
  const handleImage = (e) => {
    setImage(e.target.files[0])
  }

  useEffect(()=>{
      axios.get('http://localhost:3001/')
      .then(res=> {
        setData(res.data[0])
      })
      .catch(err => console.log(err));
  }, [])

  const handleUpload = () => {
    const formData = new FormData();
    formData.append("image", image);
    axios.post('http://localhost:3001/upload', formData)
    .then((res)=>{
      if(res.data.Status === "Success"){
        console.log("Succeded")
      } else{
        console.log("Failed")
      }
    })
    .catch(err => console.log(err));
  }
  return (
    <div className='hero-container'>

      <input type='image' name='image' onChange={handleImage}/>
      <button onClick={handleUpload}>Upload</button>
      <br/>
      <img src = {`http://localhost:3001/images/`+data.image} alt=""/>

    </div>
  );
}

export default HeroSection;