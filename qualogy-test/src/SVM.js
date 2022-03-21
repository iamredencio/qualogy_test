import React, {useState, useEffect, useCallback} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

function SVM() {
    const [data, setData] = useState([{}])

    const fetchData = useCallback(async () => {
        const data = await fetch('/svm');
        alert(data);
        console.log(data);
        setData(data);
      }, [])
      
      // the useEffect is only there to call `fetchData` at the right time
      useEffect(() => {
        fetchData()
          // make sure to catch any error
          .catch(console.error);;
      }, [fetchData])
  return (
    <div className=''>
        {(typeof data.accuracy === 'undefined')?(
        <p>Nothing SVM</p>
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
            SVM accuracy {data.accuracy} 
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

export default SVM