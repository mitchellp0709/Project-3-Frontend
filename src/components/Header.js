import { Route, Routes, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Header = (props) => {

const navigate = useNavigate()
  const logout = (() => {
    localStorage.removeItem("token")
    localStorage.removeItem("userId");
    navigate("/login")
  })
  

  return (
    <>
      <nav>
        <Link className="tweet-symbol" to="/">
          <img id="tweet-symbol" src="/twitter.png" alt="twitter symbol" />
        </Link>
        <Link className="retweet-main" to="/">
          <h1 className="retweet-main">Retweet</h1>
        </Link>

        <Link className="user-symbol" to={`/user/${localStorage.username}`}>
          <img
            id="user-icon"
            src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
            alt="user icon"
          />
        </Link>
        <h2 className="logout" onClick={logout}>Logout</h2>
      </nav>
    </>
  );
};
export default Header;
