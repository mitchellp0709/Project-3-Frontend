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
  const [userAuth, setUsername] = useState({})

  const URL = "https://group-3-project-3.herokuapp.com/";

  const getToken = async (token) => {
    setToken(token);
    localStorage.setItem("token", JSON.stringify(token));
    
  };

const getUsername = async (username) => {
  setUsername({username: username})
  console.log(username)
  console.log(`${URL}auth/user/${username}`)
  const response = await fetch(`${URL}auth/user/${username}`, {
    method: "get"
  })
  const data = await response.json()
  console.log(data)
  setUsername({userId: data[0]._id})
  console.log(userAuth)
}

  return (
    <div className="App">
      
      <main>
        <Routes>

          <Route exact path="/" element={<Main URL={URL} username={userAuth}/>} />
          <Route path="/signup" element={<Signup URL={URL} />} />
          <Route
            path="/login"
            element={<Login URL={URL} getToken={getToken} getUsername={getUsername}/>}
          />
          <Route path="/user/id" element={<Profile/>}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
