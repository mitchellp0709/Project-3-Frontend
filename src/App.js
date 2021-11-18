import React from 'react'
import logo from './logo.svg'
import Header from './components/Header'
import Signup from './pages/signup'
import {Route, Routes, Link, Switch} from 'react-router-dom'
import "./App.css"





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
      <h1>Retweet</h1>
      <Header/>
      <main>
        
          <Routes>
          <Route exact path="/" element={<h1>Home</h1>}/>
          <Route path="/signup" element={<Signup URL={URL}/>}/>
          <Route path="/login" element={<h1>Login</h1>}/>
          </Routes>
        

      </main>
      
      
    </div>
  
  );
}

export default App;
