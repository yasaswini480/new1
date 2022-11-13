import { Button, FormLabel, TextField } from '@mui/material';
import axios from 'axios';
import React, {useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Box } from '@mui/system';

const Bookdetails = () => {
  const [inputs, setInputs] = useState({}); 
  const id= useParams().id;
  const [checked,setChecked] = useState(false);
  const history = useNavigate();
  useEffect(()=> { 
    const fetchHandler = async()=>
    {
      await axios.get(`http://localhost:5000/books/${id}`).then((res)=>res.data).then(data=>setInputs(data.book));
    };
    fetchHandler().then((data) => setInputs(data.book));
  },[id]);  
  const sendRequest = async()=>
  {
    await axios.put(`http://localhost:5000/books/${id}`, 
    {
        name:String(inputs.name),
        description: String(inputs.description),
      price: Number(inputs.price),
      image: String(inputs.image),
    }).then(res => res.data)
  }
  const handlesubmit = (e)=>
  {
      e.preventDefault();
      sendRequest().then(()=>history("/books"));
  };
  const handlechange = (e) =>
  {
    setInputs((prevState) =>({
      ...prevState,
      [e.target.name]: e.target.value
  }));
};
  return (
    <div>
      { inputs && (
      <form onSubmit={handlesubmit}>
      <Box display= "flex" flexDirection="column" marginLeft= "auto" marginRight="auto" marginTop="150px" width= "600px" height= "100px">
      <FormLabel >Name</FormLabel>
      <TextField value = {inputs.name} onChange={handlechange} margin='normal' fullWidth variant='outlined' name='name' />
      <FormLabel>Description</FormLabel>
      <TextField value = {inputs.description} onChange={handlechange} margin='normal' fullWidth variant='outlined' name='description'/>
      <FormLabel>Price</FormLabel>
      <TextField value = {inputs.price} onChange={handlechange} type="number" margin='normal' fullWidth variant='outlined' name='price'/>      
      <FormLabel>Image</FormLabel>
      <TextField value = {inputs.image} onChange={handlechange} margin='normal' fullWidth variant='outlined' name='image'/>      
      
      <Button variant='contained' type='submit'>Update Bouquet</Button>
      </Box>
    </form> 
      )}       
    </div>
  )
}

export default Bookdetails;