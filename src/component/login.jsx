import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from '@material-ui/core';
import logo from '../logo';
import Info from './info';

import UserInput from './login_user_input_box';

// import OtpInput from "react-otp-input";
function print(item) {
  return (
    <Info
      key={item.id}
      id={item.id}
      img={item.img}
      title={item.title}
      content={item.content}
    />);
}

function Login() {
  const [numberInput, setNumberInput] = useState(true);




  return (
    <div className="home">
      {/* for login */}
     
     { <UserInput name='Login'/>}
      {/* for why choose us */}
      <div className="why-choose-us">
        <h2 className="why-choose-us-heading"> Why Choose Us</h2>
        <div calssName="logo">
          {logo.map(print)}
        </div>

      </div>


    </div>

  )
}
export default Login;