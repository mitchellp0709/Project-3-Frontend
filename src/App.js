import React from 'react'
import Header from './components/Header'
import Signup from './pages/signup'
import Login from './pages/login'
import {Route, Routes, Link,} from 'react-router-dom'
import "./styles.scss"





function App() {

  const [token, setToken] = React.useState({})

const URL = "https://group-3-project-3.herokuapp.com/"

const getToken = async (token) => {
 

  setToken(token)
  localStorage.setItem("token", JSON.stringify(token))
}

  return (
    
    <div className="App">
      <Link to="/"><h1 className="retweet-main">Retweet</h1></Link>
      <Header/>
      <main>
        
          <Routes>
          <Route exact path="/" element={<h1>Home</h1>}/>
          <Route path="/signup" element={<Signup URL={URL}/>}/>
          <Route path="/login" element={<Login URL={URL} getToken={getToken}/>}/>
          </Routes>
        

      </main>
      
      
    </div>
  
  );
}

export default App;
