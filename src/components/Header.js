import { Route, Routes, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Header = (props) => {

const navigate = useNavigate()
  const logout = (() => {
    localStorage.removeItem("token")
    navigate("/login")
  })
  

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
        <button onClick={logout}>Logout</button>
      </nav>
    </>
  );
};
export default Header;
