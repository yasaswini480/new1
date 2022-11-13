import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Add from "./components/Add";
import Books from "./components/All/Books";
import Header from "./components/Header";
import Bookdetails from './components/All/Bookdetails';


function App() {
  return <React.Fragment>
    <header>
      <Header/>
    </header>
    <main>
      <Routes>
        <Route path= "/add" element={<Add/>} />
        <Route path= "/books" element={<Books/>} />
        <Route path= "/books/:id" element={< Bookdetails />} exact />
        
      </Routes>
    </main>
    
  </React.Fragment>
}

export default App;
