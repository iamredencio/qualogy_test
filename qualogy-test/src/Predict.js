import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import './Predict.css';

function Predict(props) {
    const [duration, setDuration] = useState('');
    const [gender, setGender] = useState('')
    const [age, setAge] = useState('')
    const [kids, setKids] = useState('')
    const [destination, setDestination] = useState('')

    function handleChange(e) {
      setDuration(e.target.value);
    }

    function handleChangeG(e) {
      setGender(e.target.value);
    }

    function handleChangeA(e) {
      setAge(e.target.value);
    }

    function handleChangeK(e) {
      setKids(e.target.value);
    }

    function handleChangeD(e) {
      setDestination(e.target.value);
    }


    let handleSubmit = async (e) => {
      e.preventDefault();
      try {
        let res = await fetch("/recommendations", {
          method: "POST",
          body: JSON.stringify({
            duration: duration,
            age: age,
            gender: gender,
          }),
          contentType: "application/json",
        });
        
        let resJson = await res.json();
        if (res.status === 200) {
          console.log(resJson);
          setAge(e.target.value);
        } else {
          setAge(e.target.value);
        }
      } catch (err) {
        console.log(err);
      }
    }

    
  return (
    <div className='body__display'>

        <Box 
        label="Duration"
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
        <TextField require="true" className="textfield" name="duration" label="Duration" variant="standard" value={duration} onChange={ handleChange }/>
        <TextField require="true" className="textfield" name="gender" label="Gender F/M" variant="standard" value={gender} onChange={ handleChangeG }/>
        <TextField require="true" className="textfield" name="age" label="Age" variant="standard" value={age} onChange={handleChangeA }/>
        <TextField require="true" className="textfield" name="kids" label="#Kids" variant="standard" value={kids} onChange={handleChangeK}/>
        <TextField require="true" className="textfield" name="destination" label="Destination Code" variant="standard" value={destination} onChange={ handleChangeD}/>
        <Button  variant="outlined" endIcon={<SendIcon />} onClick={handleSubmit} className="textfield">
            Send
        </Button>
        <TextField require="true" className="textfield" name="destination" label="Advise" variant="standard" value=""/>
    </Box>
    </div>
  )
}

export default Predict