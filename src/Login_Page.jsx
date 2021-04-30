import React from 'react';
import Header from './component/header';
import Footer from './component/below';
import Login from './component/login';
function Login_Page(){
    return (
        <div className="App">
          <Header ID={'login'}/>
          <Login/>
          <Footer/>
        </div>
      );
}
export default Login_Page;