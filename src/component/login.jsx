import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from '@material-ui/core';
import logo from '../logo';
import Info from './info'
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
  return (
    
    <div className="home">
      {/* for login */}
      <div className="login">
        <h1 calssName="login-heading">Login</h1>
        <div calssName="span">
          <span className="span-login">Welcome to Priorty Pulse.</span>
          <span style={{ color: "red" }} className="span-login">Your Pulse, Our priority.</span>
        </div>
        <br />
        <input type="text" className="login-input"></input>
        <br />
        <Button variant="contained" color="secondary" id="login-button"> Get OTP</Button>
        <br />
        <div calssName="span">
        <span>Do you </span>
        <span style={{ color: "red" }}>Already have an account?</span>
        </div>

      </div>
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