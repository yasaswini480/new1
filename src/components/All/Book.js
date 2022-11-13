import { Button } from '@mui/material';
import axios from 'axios';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./Book.css";

const Book = (props) => {
    const {_id, name, description, price, image}= props.book;
    const history = useNavigate();
    const deletehandler = async()=>
    {
     await axios.delete(`http://localhost:5000/books/${_id}`).then((res)=>res.data).then(() => history("/")).then(()=> history("/books"));
    }
  
  return (
<div className='card' >
  <img src={image} alt ={name} ></img>
  <h3>{name} </h3>
  <p>{description} </p>
  <h2>$ {price} </h2>
  <Button LinkComponent={Link} to = {`${_id}`} class='but1'> UPDATE </Button>
  <Button onClick={deletehandler} class='but2'>DELETE</Button>
</div>
)};

export default Book;