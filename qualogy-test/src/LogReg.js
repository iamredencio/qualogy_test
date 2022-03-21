import React, {useState, useEffect} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

function LogReg() {
    const [data, setData] = useState([{}])

    useEffect( () => {
        fetch("/logreg").then(
          res => res.json()
        ).then(
          data => {
            setData(data);
            console.log(data);
          }
        )
    
      }, [])
  return (
    <div className=''>
    {(typeof data.accuracy === 'undefined')?(
        <p>Nothing LogReg</p>
      ):(
        <Link href="/">
          <Card sx={{ maxWidth: 345, minWidth: 300  }}>
        <CardMedia
          component="img"
          height="140"
          image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
             LogReg accuracy {data.accuracy}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Best parameters: {data.best_parameters}<br />
          Accuracy Train set: {data.train_score}<br />
          Accuracy Test set: {data.test_score} 
          </Typography>
        </CardContent>
      </Card>
          </Link>
      )}
    </div>
  )
}
export default LogReg