import Header from "../components/Header";
import { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Link, useParams } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";


const Profile = (props) => {
  const params=useParams()
  const username = params.id;
  const [profPic, setProfPic] = useState(null);
  const [coverPic, setCoverPic] = useState(null);
  const [userId, setUserId] = useState(null)
  const [tweets, setTweets] = useState({});


const createTweet = async (tweet) => {
  await fetch("https://group-3-project-3.herokuapp.com/tweet/", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(tweet),
  });
  getTweets();
};

//MAKING A FORM FOR NEW TWEETS
const [newForm, setNewForm] = useState({
  username: localStorage.username,
  content: "",
});

const handleChange = (event) => {
  const newState = { ...newForm };
  newState[event.target.name] = event.target.value;
  setNewForm(newState);
};

const handleSubmit = (event) => {
  event.preventDefault();
  createTweet(newForm);
  setNewForm({
    username: localStorage.username,
    content: "",
  });
  getTweets()
};

const form = (
  <form className='tweet-form' onSubmit={handleSubmit}>
    <input
      style={{ display: "none" }}
      type="text"
      value={newForm.username}
      name="username"
      placeholder={userId}
      onChange={handleChange}
    />
    <input
      type="text"
      value={newForm.content}
      name="content"
      placeholder="Tell everyone what's on your mind!"
      onChange={handleChange}
      className="main-form-input"
    />
    <input type="submit" value="Send Retweet!" className="new-tweet-button" />
  </form>
);




  
//gets the users profile and sets the cover photo and profile picture
  const getProfile = async() => {
    const response = await fetch(`${props.URL}auth/user/${username}`)
    const data = await response.json()
    setProfPic(data[0].profilePic);
    setCoverPic(data[0].coverPic);
    
  }
 //calls getProfile on loadint
  useEffect(() => { getProfile() }, [profPic,coverPic])

  //if a user hasn't set a profile picture or cover photo, this sets a default
  if (profPic === undefined) {
    setProfPic(
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
    );
  }
  if (coverPic === undefined) {
     setCoverPic(
       "https://i.pinimg.com/474x/50/b1/a8/50b1a89e3201d7adec2cb16f0660b2fe--photo-ideas.jpg"
     );
   }
 
  const getTweets = async () => {
    const response = await fetch(`${props.URL}tweet/oneUser/${username}`)
    const data = await response.json()
    const newState = { ...tweets }
    newState.data = await data
    setTweets(newState.data)
  }
  
  useEffect(() => {getTweets()},[])
  if (tweets.user) {
    return (
      <>
        <Header />
        <div className="cover-photo" style={{ backgroundImage: `url(${coverPic})` }}>
          <Link to={`/user/${username}/edit`}>
            <h2>Edit</h2>

          </Link>
          <img
            className="profile-picture"
            src={profPic}
            alt="profile picture"
          />
          <h2 className="profile-user-name">${username}</h2>
        </div>
        <div className="profile-tweets">
          <div className="tweet-container">
            {tweets.user[0].username === localStorage.username ?  form  : null}
            
          {tweets.tweets.map((tweet) => {
            return (
              <div className="tweet">
                <h2 className="tweet-classname">${tweet.username}</h2>
                <p>{tweet.content}</p>
                <div className="tweet-symbols">
                  {tweet.username === localStorage.username ? (
                    <>
                      <Link to={`/tweet/${tweet._id}/edit`}>
                        <AiFillEdit/>
                      </Link>
                      <FaTrashAlt
                        className="delete"
                        onClick={async () => {
                          await fetch(`${props.URL}tweet/${tweet._id}`, {
                            method: "delete",
                          });
                          getTweets();
                        }}
                      />
                    </>
                  ) : null}
                </div>
              </div>
            );
          })}
       </div>
        

        </div>
      </>
  
    );
  } else {
    return <h1>Loading...</h1>
  }
};

export default Profile;
