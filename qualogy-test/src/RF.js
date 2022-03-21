import React, {useState, useEffect} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

function RF() {
    const [data, setData] = useState([{}])

    useEffect( () => {
      fetch("/algorithms").then(
        res => res.json()
      ).then(
        data => {
          setData(data);
          console.log(data);
        }
      )
  
    }, [])
  return (
    <div className='body__display'>{(typeof data.algorithms === 'undefined')?(
        <p></p>
      ):(
        data.algorithms.map((algorithm, i) => (
          <Link href="#">
          <Card sx={{ maxWidth: 345, minWidth: 300  }}>
        <CardMedia
          component="img"
          height="140"
          image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
             {algorithm} accuracy 74% 
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Best parameters:  p<br />
          Accuracy Train set with best parameters 0.75: <br />
          Accuracy Test set with best parameters 0.75: 
          </Typography>
        </CardContent>
      </Card>
          </Link>
        ))
      )}</div>
  )
}

export default RF