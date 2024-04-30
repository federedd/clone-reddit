import "./card.css";

export function Card(props) {
  return (
    <div className="card" style={{ backgroundImage: `url(${props.img})` }}>
      <div className="overlay"></div>
      <div style={{ flex: 1 }} />
      <div className="card-text-container">
        <h3 className="card-title">{props.title}</h3>
        <p className="card-subtitle">{props.subtitle}</p>
        <div className="subreddit-container">
          <div
            className="card-icon"
            style={{ backgroundImage: `url(${props.icon})` }}
          ></div>
          <p className="card-subreddit">
            {props.subreddit} <span className="more">and more</span>
          </p>
        </div>
      </div>
    </div>
  );
}
