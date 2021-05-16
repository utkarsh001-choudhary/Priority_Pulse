import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from '@material-ui/core';
import ReactPhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css'
import firebaseConfig from './firebaseConfig';
//  import Recaptcha from 'react-recaptcha';
import * as firebaseui from 'firebaseui';
import firebase from 'firebase';
import 'firebaseui/dist/firebaseui.css';
import { FilterCenterFocusSharp } from '@material-ui/icons';
// class Phone extends React.Component {

//   // useEffect(() => {
//   //   if (!firebase.apps.length) {
//   //     firebase.initializeApp(firebaseConfig);
//   //   }
//   //   const uiConfig = {
//   //     signInSuccessUrl: "http://localhost:3000/home",
//   //     signInOptions: [
//   //       {
//   //         provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
//   //         defaultCountry: "IN",
//   //       },
//   //     ],
//   //     callbacks: {
//   //       signINSuccessWithAuthResult: function (authResult, redirectUrl) {
//   //         alert('successful');
//   //         return true;
//   //       }
//   //     },
//   //     signInSuccessUrl: 'https://youtube.com'
//   //   };
//   //   var ui = new firebaseui.auth.AuthUI(firebase.auth());
//   //   ui.start("#firebaseui-auth-container", uiConfig);
//   // }, []);
//   state = {
//     loading: true,
//     person: null,
//   };


//   async componentDidMount() {
//     const url = 'https://server.prioritypulse.co.in/user/';
//     const response = await fetch(url);
//     const data = await response.json();
//     this.setState({ loading: false });
//     console.log(data);
//   }

//   render() {
//     return (
//       <div className="outer-firebase">
//         {this.state.loading ? <div> ...loading </div> : <div> person </div>}
//         {/* <div id='firebaseui-auth-container' className="firebase-input" > */}

//       </div>
         
            
//         );
//   }
// }
// export default Phone;




function Otp() {
  const [loading,setLoading]=useState(true);
  const [person,setPerson]=useState("");
  const [number,setNumber]=useState(0);
  useEffect(() => {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
    const uiConfig = {
      signInSuccessUrl: "http://localhost:3000",
      signInOptions: [
        {
          provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
          defaultCountry: "IN",
        },
      ],
      // callbacks: {
      //   signINSuccessWithAuthResult: function (authResult, redirectUrl) {
          
      //   }
        callbacks: {
          signInSuccess: (user) => {
            const userDetails = {
              number: user.phoneNumber.slice(3, 13),
            };
            fetch('/auth/usersignin',{
              method:'post',
              headers:{
                  "Content-Type":"application/json"
              },body:JSON.stringify({
                  number:userDetails.number
              })
          }).then(res=>res.json()).then(result=>{
            console.log(result)
            localStorage.setItem("jwt",JSON.stringify(result))
          }).catch(error=> console.log(error))

          },
        },
      
      signInSuccessUrl: 'http://localhost:3000'
    };
    if(firebaseui.auth.AuthUI.getInstance()) {
      const ui = firebaseui.auth.AuthUI.getInstance()
      ui.start('#firebaseui-auth-container', uiConfig)
    } else {
      const ui = new firebaseui.auth.AuthUI(firebase.auth())
      ui.start('#firebaseui-auth-container', uiConfig)
    }



    // var ui = new firebaseui.auth.AuthUI(firebase.auth());
    // ui.start("#firebaseui-auth-container", uiConfig);
  // componentDidMount()
   
  }, []);

  



  // async function componentDidMount(){
  //   fetch('/auth/usersignin',{
  //     method:'post',
  //     headers:{
  //         "Content-Type":"application/json"
  //     },body:JSON.stringify({
  //         number:8290292841
  //     })
  // }).then(res=>res.json()).then(result=>{
  //   console.log(result)
  // }).catch(error=> console.log(error))
// }

  return (
    <div className="outer-firebase">
      <div id='firebaseui-auth-container' className="firebase-input" >

      </div>
    </div>
  );
}
export default Otp;






