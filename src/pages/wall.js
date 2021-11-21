import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Wall = (props) => {
  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("userId");
  const [tweets, setTweets] = useState({});

const createTweet = async (tweet) => {
  await fetch("https://group-3-project-3.herokuapp.com/tweet", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(tweet),
  });
  getTweets()
};
  

  //MAKING A FORM FOR NEW TWEETS
  const [newForm, setNewForm] = useState({
    username: localStorage.username,
    content: ""
  })

  const handleChange = (event) => {
    const newState = { ...newForm }
    newState[event.target.name] = event.target.value
    setNewForm(newState)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    createTweet(newForm)
    setNewForm({
      username: localStorage.username,
      content: "",
    });
  }

  const form = (
    <form onSubmit={handleSubmit}>
      <input
        style={{display: "none"}}
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
      />
      <input type="submit" value="Send Retweet!" />
    </form>
  );


  const getTweets = async () => {
    const response = await fetch(`${props.URL}tweet/${userId}`, {
      method: "get",
    });
    const data = await response.json();
    return data;
  };

  const handleLoad = async () => {
    const newState = { ...tweets };
    newState.data = await getTweets();
    newState.data.sort((a, b) => {
      if (a < b) {
        return -1;
      }
      if (a > b) {
        return 1;
      }
      if (a === b) {
        return 0;
      }
    });
    setTweets(newState);
    console.log(newState);
  };

  useEffect(() => {
    handleLoad();
  }, []);

  if (!token) {
    return <></>;
  } else if (!tweets.data) {
    return <h1>Loading Tweets...</h1>;
  } else {
    return (<>
      {form}
      <div className="tweet-container">
        {tweets.data.map((x) => {
          if (x.length) {
            return x.map((y) => {
              return (
                <div className="tweet">
                  <Link to={`/user/${localStorage.userId}`} > 
                    <h2 className="tweet-username">${y.username}</h2>
                  </Link>

                  <p className="tweet-content">{y.content}</p>
                  <div className="tweet-symbols">
                    {y.username === localStorage.username ? (
                      <>
                        <Link to="/tweet/:id/edit">
                          <img src="/edit.png" alt="edit tweet" />
                        </Link>
                        <img src="/delete.png" alt="delete tweet" />
                      </>
                    ) : null}
                  </div>
                </div>
              );
            });
          }
        })}
      </div>
    </>);
  }
};

export default Wall;
