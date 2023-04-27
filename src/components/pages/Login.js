import React, {useState} from "react";
import Axios from 'axios';
import 'C:/Users/Shrey/blog/src/App.css';

export default function Login() {
    
  const [useremail, setUseremail] = useState('');
  const [password, setPassword] = useState('');

      const login = () => {
        Axios.post("http://localhost:3001/login",{
          useremail: useremail,
          password: password,
        }).then((response)=>{
          console.log(response);
        });
    };


  return (
    <div className='login'>
        <h1>Login</h1>
        <input 
        type='text' 
        placeholder="User email..."
        onChange={(e)=>{
          setUseremail(e.target.value);
        }}
        />
        <input 
        type='text' 
        placeholder='Password...'
        onChange={(e)=> {
          setPassword(e.target.value);
        }}
        />
        <button onClick={login}>login</button>
      </div>
  )
}