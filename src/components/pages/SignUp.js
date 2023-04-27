import React, {useState} from "react";
import Axios from 'axios';
import 'C:/Users/Shrey/blog/src/App.css';

export default function SignUp() {
    const [usernameReg, setUsernameReg] = useState('');
    const [useremailReg, setUseremailReg] = useState('');
    const [passwordReg, setPasswordReg] = useState('');

    const register = () => {
        Axios.post("http://localhost:3001/register",{
          username: usernameReg,
          useremail: useremailReg,
          password: passwordReg,
        }).then((response)=>{
          //alert("successful insert");
          console.log(response);
        });
      };


  return (
    <div className='sign-up'>
        <h1>Registration</h1>
        <label>Username</label>
        <input type='text' onChange={(e) => {
          setUsernameReg(e.target.value);
        }}/>
        <label>User email</label>
        <input type='text' onChange={(e) => {
          setUseremailReg(e.target.value);
        }}/>
        <label>Password</label>
        <input type='text'onChange={(e) => {
          setPasswordReg(e.target.value);
        }}/>
        <button onClick={register}>Register</button>
      </div>
  )
}