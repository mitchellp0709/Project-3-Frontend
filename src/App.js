import React from 'react'
import logo from './logo.svg'
import Header from './components/Header'
import Signup from './pages/signup'
import {Route, Routes, Link, Switch} from 'react-router-dom'
import "./App.css"

export const GlobalCtx = React.createContext(null)



function App() {

  const [gState, setGState] = React.useState({url: "http://localhost:3000"})

  return (
    <GlobalCtx.Provider vaule={{gState, setGState}}>
    <div className="App">
      <h1>Retweet</h1>
      <Header/>
      <main>
        
          <Routes>
          <Route exact path="/" element={<h1>Home</h1>}/>
          <Route path="/signup" element={<h1><Signup/></h1>}/>
          <Route path="/login" element={<h1>Login</h1>}/>
      
          </Routes>
        

      </main>
      
      
    </div>
    </GlobalCtx.Provider>
  );
}

export default App;
