import React, {useState} from 'react';
import './Footer.css';

function Footer() {
  const [data, setData] = useState(null);
  const [print, setPrint] = useState(false);

  function getData(val){
    setData(val.target.value)
    setPrint(false)
    console.warn(val.target.value)
  }
  return (
    <div className='footer-container'>
      <input type='text' onChange={getData} />
      <button onClick={()=>setPrint(true)}>Submit</button>

      {
        print?
        <h5>{data}</h5>
        :null
      }
    </div>
  );
}

export default Footer;