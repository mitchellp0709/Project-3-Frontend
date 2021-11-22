import { useParams, useNavigate } from "react-router-dom";
import {useState, useEffect} from "react"

const Show = (props) => {
  // grab the navigate function
  const navigate = useNavigate()
  // get the params object
  const params = useParams();
  // grab the id from params
  const id = params.id;
  // grab people from props
  const tweets = props.tweets;
  // create state for form
  const [editForm, setEditForm] = useState({})
  

  const url = props.URL 

const getTweet = async () => {
  const response = await fetch (`${url}tweet/oneTweet/${id}`)
  const data = await response.json()
  setEditForm(data)
}
  
  useEffect(() => {
      if(props.tweets){
          const tweet = tweets.find((t) => t._id === id);
          setEditForm(tweet)
      }
  }, [props.tweets])

  if (props.tweets) {
    
    const tweet = tweets.find((t) => t._id === id);
    
    // handleChange function for form
    const handleChange = (event) => {
       
        const newState = {...editForm}
        newState[event.target.name] = event.target.value
        setEditForm(newState)
    }

     // handleSubmit for form
     const handleSubmit = (event) => {
       
        event.preventDefault()
        props.updateTweets(editForm, tweet._id)
        navigate("/")
    }

    

    const form = (
        <form onSubmit={handleSubmit}>
          
          <input
            type="text"
            value={editForm.content}
            name="content"
            placeholder={editForm.content}
            onChange={handleChange}
          />
        
          <input type="submit" value="Confirm" />
        </form>
      );

   return (
     <div className="tweet">
      {form}
     </div>
   );
    }
  }

export default Show;