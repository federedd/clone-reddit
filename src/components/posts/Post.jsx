import "./post.css";
import Button from "../button/Button";
import { CAROUSEL_CONTENT } from "../carousel/carousel-utils";
import Ellipsis from "/src/assets/ellipsis.svg";
import * as FaIcons from "@fortawesome/free-solid-svg-icons";

export function Post() {
  return (
    <>
      {CAROUSEL_CONTENT.map((post, index) => (
        <div className="post-container" key={index}>
          <div className="last-container">
            <div className="post-icon-time-container">
              <div
                className="post-icon"
                style={{ backgroundImage: `url(${post.icon})` }}
              ></div>
              <p className="post-subreddit">{post.subreddit}</p>
              <p className="time-ago">{post.time}</p>
            </div>
            <div className="join-container">
              <button className="join-button">Join</button>
              <img src={Ellipsis} className="ellipsis" />
            </div>
          </div>
          <p className="post-text">{post.title}</p>
          <div className="post-button-container">
            <Button
              text={`${post.repost}K`}
              icon={FaIcons.faUpLong}
              iconAfter={FaIcons.faDownLong}
            />
            <Button text={`${post.members}K`} icon={FaIcons.faMessage} />
            <Button text="share" icon={FaIcons.faArrowUpFromBracket} />
          </div>
        </div>
      ))}
    </>
  );
}
