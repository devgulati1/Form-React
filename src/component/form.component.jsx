import { Button,Typography,Grid,Paper, TextField } from '@mui/material';

import { useState } from 'react';

export const Form=({recieveData})=>{
    const [msg,setMsg]=useState("");
const [name,setName]=useState("");
const [details,setDetails]=useState("");
const [email,setEmail]=useState("");



const handleDetails=(e)=>{
    setDetails(e.target.value);
}
const handleName=(e)=>{
    setName(e.target.value);
}
const handleEmail=(e)=>{
    setEmail(e.target.value);
    console.log(e.target.value)
}
    const submitHandler=(e)=>{
        e.preventDefault();
        if(name==="" || email==="" || details ===""){
            setMsg=" Please Fill Out The Details Of the Form "
        }
        recieveData(name,email,details);
        console.log(name,email,details)
        
    }
    return (
<form onSubmit={submitHandler}>
    <Grid container spacing={4}>

   <Grid item md={12}>
    <TextField
        onChange={handleName}

required
label="Name"
variant='outlined'
color="secondary" focused

></TextField>
</Grid>
<Grid item md={12}>
        <TextField
             onChange={handleDetails}
required

label="Details"
variant='outlined'
multiline
maxRows={4}
color="secondary" focused

></TextField>
</Grid>
<Grid item md={12}>
        <TextField
             onChange={handleEmail}
required

label="Email"
variant='outlined'

color="secondary" focused

></TextField>
</Grid>
     

       
 
    

<Grid item md={12}>
<Button
type='submit'
     variant="contained"
     color="secondary"
     >Submit</Button>
     </Grid>
     <Grid item >
<p>{msg}</p>
</Grid>
</Grid>
</form> 


    
    )

    
}