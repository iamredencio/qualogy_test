import React, {useState, useEffect} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

function LogReg() {
    const [data, setData] = useState([{}])

    useEffect(() => {
        // declare the async data fetching function
        const fetchData = async () => {
          // get the data from the api
          const data = await fetch('/logreg');
          // convert the data to json
          const json = await data.json();
      
          // set state with the result
          setData(json);
          console.log(json);
        }
      
        // call the function
        fetchData()
          // make sure to catch any error
          .catch(console.error);;
      }, [])
  return (
    <div className=''>
    {(typeof data === 'undefined')?(
        <p>Nothing LogReg</p>
      ):(
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
             Log Reg accuracy {data.accuracy} 
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Best parameters:  {data.best_parameters}<br />
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