import * as React from 'react';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
function Signup(props) {
 const[name,setName]=useState("");
 const[email,setEmail]=useState("");
 const[password,setPassword]=useState("");
const navigate=useNavigate();
const signupp=()=>{
    let obj={
        name,
         email,
         password
    };
    console.log(obj);
    
    navigate(`/profile/${email}`);
}
  return (
    <Box sx={{padding:4}}>
        <Box><TextField id=""  label="Enter name" varient="standard"/></Box>
        <Box><TextField id=""  label="Enter email" varient="standard"/></Box>
        <Box><TextField id=""  label="Password" varient="standard" type="password"/></Box>
        <Button variant='contained'onClick={signupp}> Submit</Button>

    </Box>
  )
}

export default Signup