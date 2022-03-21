import React from 'react';
import './Body.css';
import  DropArea from "./DropArea";
import  SVM from "./SVM";
import  LogReg from "./LogReg";
import  RF from "./RF";
import  Predict from "./Predict";

function Body() {
  return (
    <div className='body'>
      <DropArea />
      <div className='body__display'><Predict /></div>
      <div className='body__display'>
        <SVM />
        <LogReg />
        <RF />
      </div>
    </div>
  )
}

export default Body