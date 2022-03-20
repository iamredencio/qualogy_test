import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import './Body.css';
import SplitButton from "./SplitButton";
import  DragAndDrop from "./DragAndDrop";

const animals = ["RF", "SVM", "LogReg"];
function valuetext(value) {
  return `${value}`;
}

function Body() {
  return (
    <div className='body'>

    <div className='body__drop__zone'>
        <div className='body__drop'>
            <div className='sidebar__data_train data_field'>
                Drop train data hier
            </div>
            <div className='sidebar__data_test data_field'>
                Drop test data hier
            </div>
        </div>
        <div className='body__summary'>
            <SplitButton />
        </div>
    </div>
    
    
    <div className='body__display'>
    {/* {animals.map(animal => ( */}
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
          SVM accuracy 74%
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Best parameters:  'C': 100, 'gamma': 'scale', 'kernel': 'poly'<br />
        Accuracy Train set with best parameters 0.75: <br />
        Accuracy Test set with best parameters 0.75: 
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
        </Link>

        <Link href="#">
        <Card sx={{ maxWidth: 345, minWidth: 250  }}>
      <CardMedia
        component="img"
        height="140"
        image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          RandForest accuracy 76%
        </Typography>
        <Typography variant="body2" color="text.secondary">

        Best parameters:  'criterion': 'entropy',  'max_depth': 10, 'max_features': 'sqrt'<br />
        Accuracy Train set with best parameters 0.81: <br />
        Accuracy Test set with best parameters 0.77: 
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
        </Link>

        <Link href="#">
        <Card sx={{ maxWidth: 345, minWidth: 250  }}>
      <CardMedia
        component="img"
        height="140"
        image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Logistic Reg accuracy 55%
        </Typography>
        <Typography variant="body2" color="text.secondary"><br />
        Best parameters:  'C': 0.001, 'solver': 'newton-cg'<br />
        Accuracy Train set with best parameters 0.56: <br />
        Accuracy Test set with best parameters 0.56: 
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
        </Link>
      {/* // ))} */}

    </div>
    </div>
  )
}

export default Body