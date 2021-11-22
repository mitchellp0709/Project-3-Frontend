import InfiniteScroll from "react-infinite-scroll-component";
import Comment from "../components/comments";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import FollowBar from '../components/FollowBar'
import Wall from './wall'
import FirstHeader from "../components/FirstHeader";

// MUST RUN THIS TO HOST THE SERVER ON PORT 3004:
//json-server --watch db.json --port 3004


//must have run this to run the dummy server:
//npm install -g json-server
//I had to overwrite my permissions to do it, if you can run it locally it should work

const Main = (props) => {

  const navigate = useNavigate();
  
   if (localStorage.token?.length>50) {
     return (
       <>
         <Header />
         {/* <div className="main-container"> */}
           {/* <FollowBar URL={props.URL} username={props.username} /> */}
           <Wall URL={props.URL} />
         {/* </div> */}
       </>
     );
   } else {
     return (
       <div className="redirect">
         <FirstHeader/>
         <h2>Looks like you aren't logged in!</h2>
         <h3>
           Please either <Link to="/login">login </Link> or{" "}
           <Link to="/signup">signup! </Link>
         </h3>
       </div>
     );
   }

};
export default Main;
