import { TextField, FormLabel, Button } from '@mui/material';
import { Box } from '@mui/system';
import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Add = () => {
  const history = useNavigate();
  const [inputs, setInputs] = useState({
    name: "",
    description:"",
    price:"",
    image:"",
  });
  const handlechange= (e)=>
  {
      setInputs((prevState) =>({
        ...prevState,
        [e.target.name]: e.target.value
      }) );
  };
  const sendrequest= async()=>
  {
    await axios.post(`http://localhost:5000/books`,{
      name: String(inputs.name),
      description: String(inputs.description),
      price: Number(inputs.price),
      image: String(inputs.image),
    }).then(res => res.data);
  }
  const handlesubmit=(e)=>
  {
    e.preventDefault();
    sendrequest().then(()=> history("/books") )
    
  };
  return (
    <form onSubmit={handlesubmit}>
      <Box display= "flex" flexDirection="column" marginLeft= "auto" marginRight="auto" marginTop="150px" width= "600px" height= "100px" color="plum" >
      <FormLabel>Name</FormLabel>
      <TextField value = {inputs.name} onChange={handlechange} margin='normal' fullWidth variant='outlined' name='name' />
      <FormLabel>Description</FormLabel>
      <TextField value = {inputs.description} onChange={handlechange} margin='normal' fullWidth variant='outlined' name='description'/>
      <FormLabel>Price</FormLabel>
      <TextField value = {inputs.price} onChange={handlechange} type="number" margin='normal' fullWidth variant='outlined' name='price'/>      
      <FormLabel>Image</FormLabel>
      <TextField value = {inputs.image} onChange={handlechange} margin='normal' fullWidth variant='outlined' name='image'/>      
      
      <Button variant='contained' type='submit'>Add Bouquet</Button>
      </Box>
    </form>   
  )};

export default Add;