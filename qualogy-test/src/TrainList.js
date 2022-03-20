
const TrainList = (props) => {

    return (
        <div className="m-2">
        {/* Display the article details if article is not None */} 
   	    {props.train && props.train.map(traindata =>{
            return (

              <div key= {traindata.id}>
                <h2 className="text-primary"> { traindata.title} </h2>
                <p> { traindata.body } </p>
                <p> { traindata.date } </p>
    	        <hr/>
              </div>
            )
            
            })}
        </div>
        )
}

export default TrainList;