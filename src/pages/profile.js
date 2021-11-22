import Header from "../components/Header";
import { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Link, useParams } from "react-router-dom";


const Profile = (props) => {
  const params=useParams()
  const username = params.id;
  const [profPic, setProfPic] = useState(null);
  const [coverPic, setCoverPic] = useState(null);
  const [userId, setUserId] = useState(null)
  const [tweets, setTweets] = useState({});
  
//gets the users profile and sets the cover photo and profile picture
  const getProfile = async() => {
    const response = await fetch(`${props.URL}auth/user/${username}`)
    const data = await response.json()
    setProfPic(data[0].profilePic);
    setCoverPic(data[0].coverPic);
    
  }
 //calls getProfile on loadint
  useEffect(() => { getProfile() }, [])

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

  
  //fetches the user id based on their username
  // const getUserId = async () => {
  //   const response = await fetch(`${props.URL}auth`, {
  //     headers: {
  //       "Content-Type": "application/json",
  //       "Accept": "application/json",
  //     },
  //   });
  //   const data = await response.json()
  //   const target = data.find((q) => q.username === username);
  //   setUserId(target._id)
  //   console.log(userId)
  // }
  
  

//   const getTweets = async () => {
//     const response = await fetch(`${props.URL}tweet/oneuser/${username}`);
//     const data = await response.json()
//     setTweets(data.tweets);
//     console.log(tweets)
//  }
  
//   useEffect(() => {getTweets()},[])
  
  
 
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
          {tweets.tweets.map((tweet) => {
            return (
              <div className="tweet">
                <h2 className="tweet-classname">${tweet.username}</h2>
                <p>{tweet.content}</p>
                <div className="tweet-symbols">
                  {tweet.username === localStorage.username ? (
                    <>
                      <Link to={`/tweet/${tweet._id}/edit`}>
                        <img src="/edit.png" alt="edit tweet" />
                      </Link>
                      <img
                        src="/delete.png"
                        alt="delete tweet"
                        onClick={async () => {
                          await fetch(props.URL + tweet._id, {
                            method: "delete",
                          });
                          window.location.reload(true);
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
