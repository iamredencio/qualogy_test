import React, {useState, useEffect} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import './Body.css';
import  DropArea from "./DropArea";
import  SVM from "./SVM";
import  LogReg from "./LogReg";

function Body() {
  return (
    <div className='body'>

    <DropArea />
    
    
    <div className=''>
    {/* <SVM /> */}
    </div>
    <LogReg />
    </div>
  )
}

export default Body