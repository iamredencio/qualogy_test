import * as React from 'react';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import './Sidebar.css';


function Sidebar() {
  return (
    <div className='sidebar__body'>

    <div className='sidebar__data_train'>
        Train Data
    </div>

    <div className='sidebar__data_test'>
        Test data
    </div>

    <Paper elevation={3} />

    </div>
  )
}

export default Sidebar