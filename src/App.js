import React from 'react'
import Header from './components/Header'
import Signup from './pages/signup'
import Login from './pages/login'
import {Route, Routes, Link,} from 'react-router-dom'
import "./styles.scss"





function App() {

  const [token, setToken] = React.useState({})

const URL = "https://group-3-project-3.herokuapp.com/"

const getToken = async (un, pw) => {
  const response = await fetch(URL + "auth/login/", {
    method: "post",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({username: un, password: pw})
  })
  const data = await response.json()
  console.log(data)
  setToken(data)
  localStorage.setItem("token", JSON.stringify(data))
}

  return (
    
    <div className="App">
      <Link to="/"><h1 className="retweet-main">Retweet</h1></Link>
      <Header/>
      <main>
        
          <Routes>
          <Route exact path="/" element={<h1>Home</h1>}/>
          <Route path="/signup" element={<Signup URL={URL}/>}/>
          <Route path="/login" element={<Login URL={URL}/>}/>
          </Routes>
        

      </main>
      
      
    </div>
  
  );
}

export default App;
