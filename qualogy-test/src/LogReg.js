import React, {useState, useEffect} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

function LogReg() {
    const [data, setData] = useState([{}])

    useEffect( () => {
      fetch("/rf").then(
        res => res.json()
      ).then(
        data => {
          setData(data);
          console.log(data);
        }
      )
  
    }, [])
  return (
    <div className='body__display'>{(typeof data.results === 'undefined')?(
        <p>Nothing</p>
      ):(
        data.algorithms.map((algorithm, i) => (
          {i, algorithm}
        ))
      )}</div>
  )
}
export default LogReg