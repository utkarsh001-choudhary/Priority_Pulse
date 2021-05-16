import React, { useState } from 'react';
import Header from './component/header';
import Footer from './component/below';
import SearchIcon from "@material-ui/icons/Search";
// import Map from './map';
import MyGoogleMap from './google_map/map';
import { Button } from '@material-ui/core';
import Table from './Table/table';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

// function Home_Page(){


//     return (
//         <div className="App">
//            <Header ID={"home"}/>

//             <div className="home_page">
//                 <div className="inner_div">

//                     <input type="text" placeholder="Search your location" className=" home_input"></input> 
//                     <button style={{backgroundColor:"white", border:"none"}}>  <i class="fas fa-search-location fa-2x" style={{color:"purple"}}></i></button>
//                 </div>
//                 <div className="map-div">
//                     <Mapp/>
//                 </div>
//             </div>

//            <Footer/>
//         </div>
//       );
// }
// export default Home_Page;
// function Home_Page(props)  {

//       return(
//             <>
//             <Header/>
//           <Map
//        google={props.google}
//        center={{lat: 18.5204, lng: 73.8567}}
//        height='1000px'
//        zoom={15}
//       />
//       <Footer/>
//       </>
//         )

//   }
//   export default Home_Page;







// import Modalbox from "../Components/Modalbox";
function Home_Page(props) {
  // const Home_Page = (props) => {
    const [show,setShow]=useState(false);
  const [number, setNumber] = useState("");
  const [renumber, setreNumber] = useState("");
  function updateNumber(e){
      const num=e.target.value;
      setNumber(num);
      
  }
  function updatereNumber(e){
    const num=e.target.value;
    setreNumber(num);
    
}
function checkVal(){
  console.log(number);
  console.log(renumber);
  if(number.length!=10||renumber.length!=10)
  alert("please enter a valid number");
  else if(number!=renumber)
  alert("Numbers do not match please re-enter the number ");
  else alert("number sent to hospital")
}
  function handelClick(event){
    event.preventDefault();
  }
  
  
  return (
    <>
      <Header />
      {/* <div id="sidebar" className={ {show}===true? "showit": "hideit"}>
          <div id="toggle_btn" onClick={()=>setShow(!show)} >
         
          <h1>helloo</h1>
          </div>
         
            <h1>hellkoioio</h1>
        
      </div> */}






      <button style={{position:"fixed"}} onClick={()=>(setShow(!show))}> <ArrowRightIcon/></button>
       {show?<div className="home-table">
         <Table/>
         </div>:<div></div>}
      <div className="home-phone-input">
        <h1 className="login-heading">Register</h1>
        <div calssName="span">
          <span className="span-login">Welcome to Priorty Pulse.</span>
          <span style={{ color: "red" }} className="span-login">Your Pulse, Our priority.</span>
        </div>
        <form  onClick={handelClick}>
          <input className="home-register-input" type="text" placeholder="Enter Number" onChange={updateNumber} value={number} required ></input>

          <input type="text" className="home-register-input " placeholder="Re-Enter Number" required onChange={updatereNumber} value={renumber}></input>
          <br />
          <Button  className="home-phone"type="submit" variant="contained" color="secondary" onClick={checkVal} >Submit</Button>
        </form>
      </div>
      <div className="map-outer">
        {/* <i class="fas fa-search-location fa-2x map-search-icon" style={{ color: "purple" }}></i> */}
        
        <div className="mygooglemap  py-5 my-5 ">
          {/* <Map
            google={props.google}
            center={{ lat: 25.2604696, lng: 82.990535 }}
            zoom={15}
            height='60vh'
            loading="fast"
          /> */}
          <div className="main-wrapper">
            <MyGoogleMap/>
          </div>
        </div>
      </div>
       
      <Footer />
    </>
  );
};

export default Home_Page;
