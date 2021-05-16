import React, { useEffect, useState } from 'react';
import Header from './component/header';
import Footer from './component/below';
import Login from './component/login';

function Login_Page(){
 

    return (
        <div className="App">
          <Header ID={"login"}/>
          <Login/>
          <Footer/>
        </div>
      );
}
export default Login_Page;






// export default class Login_Page extends React.Component{




  
//   state={
//     loading:true
//   };
//   async componentDidMount() {
//        const url="https://server.prioritypulse.co.in/auth/usersignin";
//        const response=await fetch(url);
//        const data=await response.json();
//        console.log(data);
//        }
//        render(){
//          return (
//           <div className="App">
//                      <Header ID={"login"}/>
//                      <Login/>
//                     <Footer/>
//                    </div>
//          );
//        }

// }