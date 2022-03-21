import React from 'react';
import "./DropArea.css";
import SplitButton from "./SplitButton";
import { styled } from '@mui/material/styles';

const Input = styled('input')({
    display: 'none',
  });

function DropArea() {
  return (
    <div className='droparea__zone'>
    <div className='droparea'>
        <div className='sidebar__data_train data_field'>
        <Input accept="image/*" id="contained-button-file" multiple type="file" />
            Drop train data hier
        </div>
        <div className='sidebar__data_test data_field'>
            Drop test data hier
        </div>
    </div>
    <div className='droparea__summary'>
        <SplitButton />
    </div>
</div>
  )
}

export default DropArea