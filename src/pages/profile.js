import Header from "../components/Header";
import { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Comment from "../components/comments";
import { Link } from "react-router-dom";

const Profile = (props) => {
  

 
  return (
    <>
      <Header />
      <div className="cover-photo">
        <img
          className="profile-picture"
          src="https://imgix.ranker.com/list_img_v2/19241/2779241/original/best-frank-reynolds-quotes?w=817&h=427&fm=jpg&q=50&fit=crop"
          alt="profile picture"
        />
        <h2 className="profile-user-name">$Sample User Name</h2>
      </div>
    </>
  );
};

export default Profile;
