import "./subreddit.css";

export function Subreddit(props) {
  return (
    <>
      <div className="subreddit-text-icon-container">
        <div
          className="subreddit-icon"
          style={{ backgroundImage: `url(${props.icon})` }}
        ></div>
        <div className="subreddit-text-members-container">
          <h2 className="subreddit-text">{props.subreddit}</h2>
          <p className="subreddit-members">{props.members}K members</p>
        </div>
      </div>
    </>
  );
}
