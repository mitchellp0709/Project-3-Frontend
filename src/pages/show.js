import { useParams, useNavigate } from "react-router-dom";
import {useState, useEffect} from "react"

const Show = (props) => {

  const navigate = useNavigate()
  
  const params = useParams();
 
  const id = params.id;
  
  const tweets = props.tweets;
 
  const [editForm, setEditForm] = useState({})
 
  useEffect(() => {
      if(props.tweets){
          const Tweet = tweets.find((t) => t._id === id);
          setEditForm(oneCheese)
      }
  }, [props.tweets])

  if (props.tweets) {
  
    const oneTweet = tweets.find((t) => t._id === id);
    

    const handleChange = (event) => {
        // create a copy of the state
        const newState = {...editForm}
        // update the newState
        newState[event.target.name] = event.target.value
        // update the state
        setEditForm(newState)
    }

      // handleSubmit for form
      const handleSubmit = (event) => {
        // prevent the refresh
        event.preventDefault()
        // pass the form data to updateCheese
        props.updateCheese(editForm, Tweet._id)
   
        navigate("/")
    }
   

 

    return (
      <div className="tweet">
        
      </div>
    );
  } else {
    return <h1>Show page</h1>;
  }
};

export default Show;