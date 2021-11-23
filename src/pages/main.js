import InfiniteScroll from "react-infinite-scroll-component";
import Comment from "../components/comments";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import FollowBar from '../components/FollowBar'
import Wall from './wall'
import FirstHeader from "../components/FirstHeader";


const Main = (props) => {

  const navigate = useNavigate();
  
   if (localStorage.token?.length>50) {
     return (
       <>
         <Header />
           <Wall URL={props.URL} />
        
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
