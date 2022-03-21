import React from 'react';
import './Body.css';
import  DropArea from "./DropArea";
import  SVM from "./SVM";
import  LogReg from "./LogReg";
import  RF from "./RF";

function Body() {
  return (
    <div className='body'>
      <DropArea />
      <div className='body__display'>
        <SVM />
        <LogReg />
        <RF />
      </div>
    </div>
  )
}

export default Body