import React from 'react';
import { Button } from '@material-ui/core';
function Phone(){
    return (
        <div className="">
          
            <input  type="text" placeholder="Enter Number" required></input>
            <br/>
            <input type="text" placeholder="Enter Number" required></input>
            <br/>
            <Button className="" variant="contained" color="secondary" >Submit</Button>
           
        </div>

    );
}
export default Phone;