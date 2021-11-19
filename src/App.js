import Header from './components/Header'
import Signup from './pages/signup'
import Login from './pages/login'
import {Route, Routes, Link,} from 'react-router-dom'
import {useState} from 'react'
import "./styles.scss"





function App() {

  const [token, setToken] = useState({})
  const [username, setUsername] = useState({})

const URL = "https://group-3-project-3.herokuapp.com/"

const getToken = async (token) => {
 

  setToken(token)
  localStorage.setItem("token", JSON.stringify(token))
}

const getUsername = async (username) => {
  await setUsername({username: username})
  const response = await fetch(`${URL}auth/${username}`, {
    method: "get"
  })
  const data = await response.json()
  localStorage.setItem('user_id', data._id)
}

  return (
    
    <div className="App">
      <Link to="/"><h1 className="retweet-main">Retweet</h1></Link>
      <Header/>
      <main>
        
          <Routes>
          <Route exact path="/" element={<h1>Home</h1>}/>
          <Route path="/signup" element={<Signup URL={URL}/>}/>
          <Route path="/login" element={<Login URL={URL} getToken={getToken} getUsername={getUsername}/>}/>
          </Routes>
        

      </main>
      
      
    </div>
  
  );
}

export default App;
