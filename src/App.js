import Header from './components/Header'
import Signup from './pages/signup'
import Login from './pages/login'
import {Route, Routes, Link,} from 'react-router-dom'
import {useState} from 'react'
import "./styles.scss"
import Main from './pages/main'
import Profile from './pages/profile'


function App() {
 

  const [token, setToken] = useState({})
  const [userAuth, setUsername] = useState({
    username: "",
    userId: ""
  })

  const URL = "https://group-3-project-3.herokuapp.com/";

  const getToken = async (token) => {
    setToken(token);
    localStorage.setItem("token", JSON.stringify(token));
    
  };

const getUsername = async (param) => {
  // console.log(param)
  // console.log(`${URL}auth/user/${param}`)
  const response = await fetch(`${URL}auth/user/${param}`, {
    method: "get"
  })
  const data = await response.json()
  const newData = {
    username: data[0].username,
    userId: data[0]._id
  }
  console.log(newData)
  await setUsername(newData)
  localStorage.setItem('userId', newData.userId)
  localStorage.setItem('username', newData.username)
}
const createTweet = async (tweet) => {
  //make the post request to our api. fetch defaults to a get request so it needs a second argument (an object) to clarify what kind of request you want to do
  await fetch(URL, {
    method: "post",
    //This type of request is sent different than express. This changes it so it can be read by the url-encoded middleware in our backend
    headers: {
      //MUST INCLUDE THIS. Turns it into json data
      "Content-Type": "application/json",
    },
    //changes the json data to a JS object into the body
    body: JSON.stringify(tweet),
  });
};
  
  
  
  return (
    <div className="App">
      
      <main>
        <Routes>
          <Route exact path="/" element={<Main URL={URL} userAuth={userAuth} createTweet={createTweet}/>} />
          <Route path="/signup" element={<Signup URL={URL} />} />
          <Route
            path="/login"
            element={<Login URL={URL} getToken={getToken} getUsername={getUsername}/>}
          />
          <Route path="/user/:id" element={<Profile/>}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
