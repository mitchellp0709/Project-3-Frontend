import { Route, Routes } from "react-router-dom";

const Header = (props) => {
  return (
    <>
      <nav>
        <a href="#">
          <img id="tweet-symbol" src="/twitter.png" alt="twitter symbol" />
        </a>
        <a href="#">
          <img
            id="user-icon"
            src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
            alt="user icon"
          />
        </a>
        <a href="#">Signout</a>
      </nav>
    </>
  );
};
export default Header;
