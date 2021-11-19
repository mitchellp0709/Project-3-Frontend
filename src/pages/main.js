import InfiniteScroll from "react-infinite-scroll-component";
import Comment from "../components/comments";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

// MUST RUN THIS TO HOST THE SERVER ON PORT 3004:
//json-server --watch db.json --port 3004


//must have run this to run the dummy server:
//npm install -g json-server
//I had to overwrite my permissions to do it, if you can run it locally it should work

const Main = (props) => {
  //sets the item state
  const [items, setItems] = useState([]);

  //state to determine if we have reached the bottom of the feed
  const [hasMore, setHasMore] = useState(true);

  //state that changes how many iterations of the infinite scroll have loaded
  const [page, setPage] = useState(2);

  //sets the initial state of the page, in this case it is the first 20 items (based on the url)
  useEffect(() => {
    //runs a api call to localhost for the items
    const getComments = async () => {
      const res = await fetch(
        `http://localhost:3004/comments?_page=1&_limit=20`
      );
      const data = await res.json();
      //sets items state with the data from the api call
      setItems(data);
    };
    //calls function to load the page
    getComments();
  }, []);
  console.log(items);

  const fetchComments = async () => {
    const res = await fetch(
      `http://localhost:3004/comments?_page=${page}&_limit=20`
    );
    const data = await res.json();
    return data;
  };

  const fetchData = async () => {
    const commentsFromServer = await fetchComments();
    setItems([...items, ...commentsFromServer]);
    if (commentsFromServer.length === 0 || commentsFromServer.length < 20) {
      setHasMore(false);
    }

    setPage(page + 1);
  };

  const navigate = useNavigate();

  const nav = () => {
    navigate("/login")
  }

  if (localStorage.token) {
    
  
    return (<>
    
      <Header />
      <InfiniteScroll
        dataLength={items.length} //This is important field to render the next data
        next={fetchData}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You've seen every Retweet! Time to go outside!</b>
          </p>
        }
      >
        {items.map((item) => {
          return <Comment key={item.id} item={item} />;
        })}
      </InfiniteScroll>
    </>);
  }
  else {
    return <div className="redirect">
      <h2>Looks like you aren't logged in!</h2>
      <h3>Please either <Link to = "/login">login </Link> or <Link to = "/signup">signup! </Link></h3>
    </div>
  }
};
export default Main;