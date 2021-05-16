 import React, { useState } from 'react';
 import 'bootstrap/dist/css/bootstrap.min.css';
 import { Link } from "react-router-dom";
import Logo from '../image/Website Logo.png'
function Header({ID}){
    const [state,setState] = useState(false);
     function handleClick (){
      return (  setState(!state))
    }
    return (
        <div className=" container-fluid  header" >
        <nav className="navbar ll navbar-expand-md navbar-dark">
       <Link className="navbar-brand" exact to={'/'}>  <img  className="navbar-logo  " src={Logo} alt="Priority Pulse"></img>   </Link>  

       <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
     <div className="collapse navbar-collapse" id="navbarSupportedContent">
       <ul className="navbar-nav ml-auto">
           <li className="nav-item" >
             <div className="link-div"   >
             <Link className="nav-link" id={ ID=== "home"? "home-nav": "none"} exact to={'/'} >Home</Link>
             </div>
           </li>
           <li className="nav-item">     <div  className="link-div" onClick={{id:"active"}}>
               <a className="nav-link" href="">Track Ambulance</a>
               </div>
           </li>
           <li className="nav-item" >    <div  className="link-div" onClick={{id:"active"}}>
               <a className="nav-link" href="">About Us</a>
               </div>
           </li>
           <li className="nav-item" >    <div   className="link-div" >
           <Link className="nav-link"  id={ ID=== "login"? "login-nav": "none"} exact to={'/login'}>Login</Link>
               {/* <a className="nav-link" href="">Login</a> */}</div>
           </li>
       </ul>
    </div>
    </nav>
    </div>
      

    //  <nav className="NavbarItems">
    //     <img  className="navbar-logo fa-react " src={Logo} alt="Priority Pulse"></img>
    //      {/* <h1 className="navbar-logo">  <img  className="fa-react" src="./images/Logo.jpg" alt="logo"></img></h1>  */}
    //      <div className="menu-icon" onClick={handleClick}>
    //          <i className={state ? 'fas fa-times' :'fas fa-bars'}></i>
    //      </div>
    //      <ul className={state? 'nav-menu active':'nav-menu'}>
    //        {MenuItems.map((item)=>{
    //            return (
    //             <li>
    //             <Link  className={item.cName} exact to={item.url}>{item.title}</Link>
    //             </li>
    //            )
    //        })}
             
    //      </ul>
    //  </nav>

































    );
}
export default Header;