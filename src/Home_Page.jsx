import React from 'react';
import Header from './component/header';
import Footer from './component/below';
import Mapp from './map';
function Home_Page(){

    const d={type:'p'};
    d.type='d';
    return (
        <div className="App">
           <Header ID={"home"}/>
           
            <div className="home_page">
              <div className="inner_div">
                {/* <span> */}
                  <input type="text" placeholder="Search your location" className="login-input home_input"></input> 
                  <button style={{backgroundColor:"white", border:"none"}}>  <i class="fas fa-search-location fa-2x" style={{color:"purple"}}></i></button>
                  
                  {/* </span>  */}
              </div>
              <div className="map">
                  <Mapp/>
              </div>

            </div>
           
           <Footer/>
        </div>
      );
}
export default Home_Page;