import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import './Predict.css';

function Predict() {
    const [inputFields, setInputFields] = useState([
        {duration: '', gender: '', age: '', kids: '',  destination: ''}
    ])

    const handleFormChange = (index, event) => {
        let data = [...inputFields];
        data[index][event.target.name] = event.target.value;
    }

    const submit = (e) => {
        e.preventDefault();
        console.log(inputFields)
    }

  return (
    <div className='body__display'>
    <form onSubmit={submit}>
        {inputFields.map((input, index) => {
          return (
        <Box 
        label="Duration"
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
        <TextField require className="textfield" name="duration" label="Duration" variant="standard" value={input.duration}
                onChange={event => handleFormChange(index, event)} />
        <TextField require className="textfield" name="gender" label="Gender F/M" variant="standard" value={input.gender}
                onChange={event => handleFormChange(index, event)} />
        <TextField require className="textfield" name="age" label="Age" variant="standard" value={input.age}
                onChange={event => handleFormChange(index, event)} />
        <TextField require className="textfield" name="kids" label="#Kids" variant="standard" value={input.kids}
                onChange={event => handleFormChange(index, event)} />
        <TextField require className="textfield" name="destination" label="Destination Code" variant="standard" value={input.destination}
                onChange={event => handleFormChange(index, event)} />
        <Button onClick={submit} variant="outlined" endIcon={<SendIcon />} className="textfield">
            Send
        </Button>
        <TextField require className="textfield" name="destination" label="Advise" variant="standard" value={input.destination}
                onChange={event => handleFormChange(index, event)} />
    </Box>
    )
})}
</form>
    </div>
  )
}

export default Predict