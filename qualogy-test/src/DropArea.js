import React from 'react';
import "./DropArea.css";
import SplitButton from "./SplitButton";

function DropArea() {
  return (
    <div className='droparea__zone'>
    <div className='droparea'>
        <div className='sidebar__data_train data_field'>
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