import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
 import Otp from './otp_login';
 import Phone from './phone_login';
import { Height } from '@material-ui/icons';


function UserInput({name}){
  return (
 <div className="login"  >
 <h1 calssName="login-heading">{name}</h1>
 <div calssName="span">
   <span className="span-login">Welcome to Priorty Pulse.</span>
   <span style={{ color: "red" }} className="span-login">Your Pulse, Our priority.</span>
 </div>
 <br />
  {name==='Login'? <Otp/>:<Phone/>}
</div>
  );
}
export default UserInput;