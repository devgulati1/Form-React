import logo from './logo.svg';
import './App.css';
import { Button,Typography,Grid,Paper, TextField, Container } from '@mui/material';
import { Form } from './component/form.component';
import { useState } from 'react';






const App=()=>{
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [details,setDetails]=useState("");


  const recieveData=(name,email,details)=>{
    setName(name);
    setEmail(email);
    setDetails(details);
  }
  return(
  <Container>
    <Typography
    variant="h1">Form </Typography>
    <Grid container spacing={4} >
      <Grid item  xs={12} md={6}>
   <Form recieveData={recieveData}/>
   
   </Grid>
   <Grid item  xs={12} md={6}>

     {` name : ${name}  ,  email: ${email} ,  details : ${details}`}
     </Grid>
   </Grid>
  </Container>
  )
}
export default App;
