import Header from "../components/Header";
import { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Comment from "../components/comments";
import { Link, useParams } from "react-router-dom";


const Profile = (props) => {
  const params=useParams()
  const username = params.id;
  const [profPic, setProfPic] = useState(null);
  const [coverPic, setCoverPic] = useState(null);
  

  const getProfile = async() => {
    const response = await fetch(`${props.URL}auth/user/${username}`)
    const data = await response.json()
    setProfPic(data[0].profilePic);
    setCoverPic(data[0].coverPic);
    
  }
 
  useEffect(() => { getProfile() }, [])
  if (profPic === undefined) {
    setProfPic(
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
    );
  }
  if (coverPic === undefined) {
     setCoverPic(
       "https://i.pinimg.com/474x/50/b1/a8/50b1a89e3201d7adec2cb16f0660b2fe--photo-ideas.jpg"
     );
   }

 
  return (
    <>
      <Header />
      <div className="cover-photo" style={{backgroundImage:`url(${coverPic})`}}>
        <img
          className="profile-picture"
          src={profPic}
          alt="profile picture"
        />
        <h2 className="profile-user-name">${username}</h2>
      </div>
    </>
  );
};

export default Profile;
