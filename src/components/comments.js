const Comment = ({ item: { id, email, body } }) => {
  return (
    <>
      <div className="container">
        <div className="comment">
          <div className="usertime">
            <div className="user" id="user">
              ${email}
            </div>
            <div className="time">EXAMPLE TIME </div>
          </div>
          <div className="tweet">{body}</div>
          <div className="respond">
            <a href="#" alt="retweet">
              <img
                src="/retweet.jpeg"
                alt="retweet"
              />
            </a>
            <a href="#">
              <img
                src="/comment.png"
                alt="retweet"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Comment;
