import "./feed.css";
import { Carousel } from "../carousel/Carousel";
import { Highlights } from "../highlights/Highligths";
import { Menu } from "../menu/Menu";
import { Post } from "../posts/Post";

export default function Feed() {
  return (
    <div className="feed">
      <Carousel />
      <div
        style={{
          position: "relative",
          display: "flex",
          alignItems: "flex-start",
        }}
      >
        <div>
          <Menu />
          <Post />
        </div>
        <Highlights />
      </div>
    </div>
  );
}
