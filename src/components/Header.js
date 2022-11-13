import React, { useState } from 'react';
import {AppBar, Toolbar, Typography, Box, Tab, Tabs} from '@mui/material';
import { NavLink } from 'react-router-dom';
const Header = () => {
  const [value, setValue] = useState();
  return (
    <AppBar position="sticky" sx={{background: "radial-gradient(circle, rgba(20,122,192,1) 0%, rgba(252,70,181,0.9447129193474265) 100%);"}} >
      <Toolbar>
        <Typography  color="indigo" variant='h4'>BOUQUETS</Typography>
        <Box sx={{ml:"auto"}} display="flex">
          <Tabs textColor='inherit' indicatorColor= 'secondary' value={value} onChange= {(e, val)=>setValue(val)}>
            <Tab LinkComponent={NavLink} to= "/books" label= " All Bouquet" />
            <Tab LinkComponent={NavLink} to= "/add" label= " Add Bouquet" />
          </Tabs>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header