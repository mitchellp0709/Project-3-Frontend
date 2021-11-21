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

    const removeTweet = () => {
        props.deleteTweets(tweet._id)
        navigate("/")
    }

    const form = (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={editForm.name}
            name="name"
            placeholder="name"
            onChange={handleChange}
          />
          <input
            type="text"
            value={editForm.image}
            name=""
            placeholder=""
            onChange={handleChange}
          />
          <input
            type="text"
            value={editForm.title}
            name="title"
            placeholder="title"
            onChange={handleChange}
          />
          <input type="submit" value="" />
        </form>
      );

    return (
      <div className="tweet">
        <h1>{tweet.username}</h1>
        <h2>{tweet.title}</h2>
        {form}
      </div>
    );
  } else {
    return <h1>No Tweet</h1>;
  }
};

export default Show;